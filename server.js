/* ═══════════════════════════════════════════════════
   StudyLab Local Auth Server
   Lightweight Express server for user management.
   Data stored in users.json (bcrypt-hashed passwords).
   Runs behind nginx on port 8089.
   ═══════════════════════════════════════════════════ */

const express = require('express');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const ghlSync = require('./ghl-sync');
const { provisionUserChannel, postToUserChannel, sendToUserChannel, deprovisionUserChannel } = require('./discord-provision');

const app = express();
const PORT = 8089;
const USERS_FILE = path.join(__dirname, 'users.json');

// ─── Tier Limits ─────────────────────────────────────────────────────────────
const TIERS = {
  free:      { name: 'Free',      hw: 10,  maxCourses: 2,  requests: 0,  price: '$0/mo'   },
  student:   { name: 'Student',   hw: 50,  maxCourses: -1, requests: 1,  price: '$9/mo'   },
  unlimited: { name: 'Unlimited', hw: -1,  maxCourses: -1, requests: 3,  price: '$19/mo'  },
};
// -1 = unlimited; admin always bypasses all limits
function currentMonth() { return new Date().toISOString().slice(0, 7); } // e.g. "2026-03"
function getMonthUsage(user, key) {
  const mo = currentMonth();
  if (!user.usage) user.usage = {};
  if (!user.usage[key] || user.usage[key].month !== mo) {
    user.usage[key] = { month: mo, count: 0 };
  }
  return user.usage[key]; // mutable reference — saveUsers() after mutation
}
function tierLimits(user) {
  if (user.status === 'admin') return { hw: -1, maxCourses: -1, requests: -1 };
  return TIERS[user.tier || 'free'] || TIERS.free;
}
const SESSIONS_FILE = path.join(__dirname, 'sessions.json');
const NOTIFICATIONS_FILE = path.join(__dirname, 'notifications.json');

app.use(express.json());

// ─── Helpers ────────────────────────────────────────
function loadUsers() {
  if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '[]');
  return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
}
function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}
function loadSessions() {
  if (!fs.existsSync(SESSIONS_FILE)) fs.writeFileSync(SESSIONS_FILE, '{}');
  return JSON.parse(fs.readFileSync(SESSIONS_FILE, 'utf8'));
}
function saveSessions(sessions) {
  fs.writeFileSync(SESSIONS_FILE, JSON.stringify(sessions, null, 2));
}

function loadNotifications() {
  if (!fs.existsSync(NOTIFICATIONS_FILE)) fs.writeFileSync(NOTIFICATIONS_FILE, '[]');
  return JSON.parse(fs.readFileSync(NOTIFICATIONS_FILE, 'utf8'));
}
function saveNotifications(notifs) {
  fs.writeFileSync(NOTIFICATIONS_FILE, JSON.stringify(notifs, null, 2));
}

function authMiddleware(req, res, next) {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Not authenticated' });
  const sessions = loadSessions();
  const userId = sessions[token];
  if (!userId) return res.status(401).json({ error: 'Invalid session' });
  const users = loadUsers();
  const user = users.find(u => u.id === userId);
  if (!user) return res.status(401).json({ error: 'User not found' });
  req.user = user;
  next();
}

// ─── Routes ─────────────────────────────────────────

// Signup
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: 'All fields required' });
  if (password.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters' });

  const users = loadUsers();
  if (users.find(u => u.email === email.toLowerCase().trim())) {
    return res.status(400).json({ error: 'Email already registered' });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = {
    id: crypto.randomUUID(),
    email: email.toLowerCase().trim(),
    display_name: name.trim(),
    password_hash: hash,
    status: 'pending', // pending | approved | denied | admin
    created_at: new Date().toISOString()
  };
  users.push(user);
  saveUsers(users);

  // Create session
  const token = crypto.randomBytes(32).toString('hex');
  const sessions = loadSessions();
  sessions[token] = user.id;
  saveSessions(sessions);

  // Sync to GHL (fire-and-forget)
  ghlSync.onUserSignup(user);

  // Provision Discord channel (fire-and-forget — don't block signup)
  provisionUserChannel(user).then(({ channelId, channelName, webhookUrl }) => {
    const users2 = loadUsers();
    const idx = users2.findIndex(u => u.id === user.id);
    if (idx !== -1) {
      users2[idx].discordChannelId = channelId;
      users2[idx].discordChannelName = channelName;
      users2[idx].discordWebhookUrl = webhookUrl;
      saveUsers(users2);
    }
    // Post welcome message to their new channel via bot
    postToUserChannel({ discordChannelId: channelId }, {
      title: `👋 Welcome to StudyLab, ${user.display_name}!`,
      description: `This is your private activity channel. Support tickets, course requests, and quiz milestones for **${user.email}** will appear here.`,
      color: 0x4f46e5,
      timestamp: new Date().toISOString(),
      footer: { text: `User ID: ${user.id}` }
    }).catch(() => {});
  }).catch(e => console.warn('[signup] Discord provision failed (non-blocking):', e.message));

  const signupCourses = []; // new users start with no courses
  res.json({
    token,
    user: { id: user.id, email: user.email, name: user.display_name, status: user.status, courses: signupCourses }
  });
});

// Login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'All fields required' });

  const users = loadUsers();
  const user = users.find(u => u.email === email.toLowerCase().trim());
  if (!user) return res.status(401).json({ error: 'Invalid email or password' });

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return res.status(401).json({ error: 'Invalid email or password' });
  if (user.status === 'denied') return res.status(403).json({ error: 'Your account has been denied access' });

  const token = crypto.randomBytes(32).toString('hex');
  const sessions = loadSessions();
  sessions[token] = user.id;
  saveSessions(sessions);

  const loginCourses = user.status === 'admin' ? 'all' : (user.courses || []);
  res.json({
    token,
    user: { id: user.id, email: user.email, name: user.display_name, status: user.status, courses: loginCourses }
  });
});

// Get current user
app.get('/api/me', authMiddleware, (req, res) => {
  const u = req.user;
  const courses = u.status === 'admin' ? 'all' : (u.courses || []);
  const tier = u.status === 'admin' ? 'admin' : (u.tier || 'free');
  const limits = tierLimits(u);

  // Read fresh usage from disk (not from JWT cache)
  const users = loadUsers();
  const fresh = users.find(x => x.id === u.id) || u;
  const hwUsage   = getMonthUsage(fresh, 'hw');
  const reqUsage  = getMonthUsage(fresh, 'courseRequests');

  res.json({
    user: {
      id: u.id, email: u.email, name: u.display_name, status: u.status, courses,
      tier,
      usage: {
        hw:             { used: hwUsage.count,  limit: limits.hw       },
        courseRequests: { used: reqUsage.count, limit: limits.requests },
      },
    }
  });
});

// Logout
app.post('/api/logout', (req, res) => {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  if (token) {
    const sessions = loadSessions();
    delete sessions[token];
    saveSessions(sessions);
  }
  res.json({ ok: true });
});

// ─── User Profile Routes ────────────────────────────

// PATCH /api/user/profile — update own display name
app.patch('/api/user/profile', authMiddleware, async (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) return res.status(400).json({ error: 'Name required' });
  const users = loadUsers();
  const idx = users.findIndex(u => u.id === req.user.id);
  if (idx === -1) return res.status(404).json({ error: 'User not found' });
  users[idx].display_name = name.trim();
  saveUsers(users);
  res.json({ ok: true, name: name.trim() });
});

// POST /api/user/change-password — change own password
app.post('/api/user/change-password', authMiddleware, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) return res.status(400).json({ error: 'Both password fields required' });
  if (newPassword.length < 6) return res.status(400).json({ error: 'New password must be at least 6 characters' });
  const users = loadUsers();
  const idx = users.findIndex(u => u.id === req.user.id);
  if (idx === -1) return res.status(404).json({ error: 'User not found' });
  const valid = await bcrypt.compare(currentPassword, users[idx].password_hash);
  if (!valid) return res.status(401).json({ error: 'Current password is incorrect' });
  users[idx].password_hash = await bcrypt.hash(newPassword, 10);
  saveUsers(users);
  res.json({ ok: true });
});

// ─── Admin Routes ───────────────────────────────────

// List all users (admin only)
app.get('/api/admin/users', authMiddleware, (req, res) => {
  if (req.user.status !== 'admin') return res.status(403).json({ error: 'Admin only' });
  const users = loadUsers().map(u => ({
    id: u.id, email: u.email, display_name: u.display_name,
    status: u.status, created_at: u.created_at,
    courses: u.status === 'admin' ? 'all' : (u.courses || [])
  }));
  res.json(users);
});

// Set user plan tier (admin only)
app.patch('/api/admin/users/:id/tier', authMiddleware, (req, res) => {
  if (req.user.status !== 'admin') return res.status(403).json({ error: 'Admin only' });
  const { tier } = req.body;
  if (!TIERS[tier]) return res.status(400).json({ error: `Invalid tier — valid: ${Object.keys(TIERS).join(', ')}` });
  const users = loadUsers();
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.tier = tier;
  saveUsers(users);

  // Sync tier tag + pipeline stage to GHL (fire-and-forget)
  ghlSync.syncTierToGHL(user, tier);

  res.json({ ok: true, tier });
});

// Update user courses (admin only)
app.patch('/api/admin/users/:id/courses', authMiddleware, (req, res) => {
  if (req.user.status !== 'admin') return res.status(403).json({ error: 'Admin only' });
  const { courses } = req.body; // array of course indexes e.g. [0, 1, 2]
  if (!Array.isArray(courses)) return res.status(400).json({ error: 'courses must be an array' });
  const users = loadUsers();
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.courses = courses.map(Number).filter(n => !isNaN(n));
  user.updated_at = new Date().toISOString();
  saveUsers(users);
  res.json({ ok: true, courses: user.courses });
});

// Get pending count (admin only)
app.get('/api/admin/pending-count', authMiddleware, (req, res) => {
  if (req.user.status !== 'admin') return res.status(403).json({ error: 'Admin only' });
  const count = loadUsers().filter(u => u.status === 'pending').length;
  res.json({ count });
});

// Update user status (admin only)
app.patch('/api/admin/users/:id', authMiddleware, (req, res) => {
  if (req.user.status !== 'admin') return res.status(403).json({ error: 'Admin only' });
  const { status } = req.body;
  if (!['pending', 'approved', 'denied', 'admin'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  const users = loadUsers();
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.status = status;
  user.updated_at = new Date().toISOString();
  saveUsers(users);

  // Sync to GHL (fire-and-forget)
  ghlSync.onUserStatusChange(user, status);

  res.json({ ok: true, user: { id: user.id, email: user.email, display_name: user.display_name, status: user.status } });
});

// Delete user (admin only)
app.delete('/api/admin/users/:id', authMiddleware, (req, res) => {
  if (req.user.status !== 'admin') return res.status(403).json({ error: 'Admin only' });
  let users = loadUsers();
  users = users.filter(u => u.id !== req.params.id);
  saveUsers(users);
  // Clean sessions
  const sessions = loadSessions();
  for (const [token, uid] of Object.entries(sessions)) {
    if (uid === req.params.id) delete sessions[token];
  }
  saveSessions(sessions);
  res.json({ ok: true });
});

// ─── Leaderboard & Scores ───────────────────────────

const SCORES_FILE = path.join(__dirname, 'scores.json');
const NOTES_FILE = path.join(__dirname, 'notes.json');

function loadScores() {
  if (!fs.existsSync(SCORES_FILE)) fs.writeFileSync(SCORES_FILE, '[]');
  return JSON.parse(fs.readFileSync(SCORES_FILE, 'utf8'));
}
function saveScores(scores) {
  fs.writeFileSync(SCORES_FILE, JSON.stringify(scores, null, 2));
}
function loadNotes() {
  if (!fs.existsSync(NOTES_FILE)) fs.writeFileSync(NOTES_FILE, '{}');
  return JSON.parse(fs.readFileSync(NOTES_FILE, 'utf8'));
}
function saveNotes(notes) {
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
}

// Post a score
app.post('/api/scores', authMiddleware, (req, res) => {
  const { subject, unit, score, total } = req.body;
  if (score == null || total == null) return res.status(400).json({ error: 'Missing fields' });
  const scores = loadScores();
  scores.push({
    userId: req.user.id,
    name: req.user.display_name,
    subject: subject || 'unknown',
    unit: unit || 0,
    score, total,
    pct: Math.round(score / total * 100),
    date: new Date().toISOString()
  });
  saveScores(scores);
  res.json({ ok: true });
});

// Leaderboard (aggregated avg score per user)
app.get('/api/leaderboard', authMiddleware, (req, res) => {
  const scores = loadScores();
  const users = loadUsers().filter(u => u.status === 'approved' || u.status === 'admin');
  const agg = {};
  scores.forEach(s => {
    if (!agg[s.userId]) agg[s.userId] = { total: 0, correct: 0, count: 0, name: s.name };
    agg[s.userId].total += s.total;
    agg[s.userId].correct += s.score;
    agg[s.userId].count++;
  });
  const board = Object.entries(agg)
    .map(([id, v]) => ({ name: v.name, avgScore: Math.round(v.correct / v.total * 100), quizzes: v.count }))
    .sort((a, b) => b.avgScore - a.avgScore || b.quizzes - a.quizzes);
  res.json(board);
});

// Notes - save
app.post('/api/notes/:subject/:unit', authMiddleware, (req, res) => {
  const notes = loadNotes();
  const k = `${req.user.id}_${req.params.subject}_${req.params.unit}`;
  notes[k] = { text: req.body.text || '', updated: new Date().toISOString() };
  saveNotes(notes);
  res.json({ ok: true });
});

// Notes - get
app.get('/api/notes/:subject/:unit', authMiddleware, (req, res) => {
  const notes = loadNotes();
  const k = `${req.user.id}_${req.params.subject}_${req.params.unit}`;
  res.json({ text: notes[k]?.text || '' });
});

// ─── Progress (per-user quiz state persistence) ─────
const PROGRESS_FILE = path.join(__dirname, 'progress.json');
function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) fs.writeFileSync(PROGRESS_FILE, '{}');
  return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
}
function saveProgress(data) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(data, null, 2));
}

// Save full state (answers, submitted, scores)
app.post('/api/progress', authMiddleware, (req, res) => {
  const { answers, submitted, scores } = req.body;
  if (!answers && !submitted && !scores) return res.status(400).json({ error: 'No data' });
  const all = loadProgress();
  if (!all[req.user.id]) all[req.user.id] = {};
  if (answers) all[req.user.id].answers = answers;
  if (submitted) all[req.user.id].submitted = submitted;
  if (scores) all[req.user.id].scores = scores;
  all[req.user.id].updated = new Date().toISOString();
  saveProgress(all);
  res.json({ ok: true });
});

// Load state
app.get('/api/progress', authMiddleware, (req, res) => {
  const all = loadProgress();
  const data = all[req.user.id] || {};
  res.json({
    answers: data.answers || {},
    submitted: data.submitted || {},
    scores: data.scores || {}
  });
});

// ─── Homework Helper AI ─────────────────────────────

const SOCRATIC_SYSTEM = `You are a helpful homework tutor. Follow these rules:

1. For CONCEPTUAL questions (solve this, find x, explain why): Use Socratic method — ask guiding questions, give hints, never give the direct answer.
2. For VISUAL/GRAPH requests (show me a graph, what does it look like, draw this): Describe the graph's key features ONLY (amplitude, vertical shift, period, direction). Start your response with GRAPH: followed by the function expressions separated by semicolons, one per line before your description. Example: GRAPH:4*cos(x)+1;-cos(x)-4
3. For "I am not sure" or "I don't know": Give a clear hint or explain the first step — don't ask another question.
4. Always use plain text — no asterisks for emphasis, no markdown symbols.
5. Be brief: 2-4 sentences max per response.`;

// Extract graph functions from AI response
function extractGraphFunctions(text) {
  const match = text.match(/^GRAPH:([^\n]+)/);
  if (!match) return null;
  return match[1].split(';').map(f => f.trim()).filter(Boolean);
}

// Convert math notation to safe JS: cos(x) -> Math.cos(x), 4cos -> 4*Math.cos, etc.
function toJSMath(expr) {
  const fns = 'sin|cos|tan|sqrt|abs|log|exp';
  return expr
    .replace(/\^/g, '**')
    .replace(/\bpi\b/gi, 'Math.PI')
    .replace(/\be\b(?!\w)/g, 'Math.E')
    // digit immediately followed by trig: 4cos -> 4*Math.cos
    .replace(new RegExp('(\\d)(' + fns + ')\\b', 'g'), '$1*Math.$2')
    // standalone trig not already prefixed: cos -> Math.cos (lookbehind for non-word OR start)
    .replace(new RegExp('(?<![\\w.])(' + fns + ')\\b', 'g'), 'Math.$1')
    // digit immediately before x: 3x -> 3*x
    .replace(/(\d)x\b/g, '$1*x');
}

// Extract f(x)=... / g(x)=... / y=... expressions from user's message
function extractUserFunctions(userMsg) {
  const results = [];
  // Match: f(x)=expr, g(x)=expr, h(x)=expr, y=expr
  const re = /[fghFGHy]\s*(?:\([^)]*\))?\s*=\s*([^,\n;and&]+)/g;
  let m;
  while ((m = re.exec(userMsg)) !== null) {
    const expr = m[1].trim().replace(/\s+/g, '');
    if (expr && expr.includes('x')) results.push(expr);
  }
  return results.length >= 1 ? results : null;
}

const GRAPH_KEYWORDS = /\b(graph|plot|draw|show|sketch|visuali[sz]e)\b/i;

app.post('/api/homework', authMiddleware, async (req, res) => {
  const { messages, subjectContext } = req.body;
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: 'Missing messages' });

  // ─── Tier limit check (must happen BEFORE SSE headers are flushed) ───────
  if (req.user.status !== 'admin') {
    const users = loadUsers();
    const user = users.find(u => u.id === req.user.id);
    if (user) {
      const limits = tierLimits(user);
      if (limits.hw > 0) {
        const usage = getMonthUsage(user, 'hw');
        if (usage.count >= limits.hw) {
          return res.status(429).json({
            error: 'limit_reached', tier: user.tier || 'free',
            used: usage.count, limit: limits.hw,
          });
        }
        usage.count++;
        saveUsers(users);
      }
    }
  }

  const aiKey = process.env.OPENAI_API_KEY || process.env.AI_API_KEY;
  const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434';

  const ctxSnippet = subjectContext ? subjectContext.substring(0, 600) : '';
  const systemContent = SOCRATIC_SYSTEM + (ctxSnippet ? ` Context: ${ctxSnippet}` : '');
  const chatMessages = [{ role: 'system', content: systemContent }];
  messages.slice(-6).forEach(m => chatMessages.push({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text }));

  // Set up SSE streaming response — flush headers immediately so browser sees 200
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no'); // disable nginx buffering
  res.flushHeaders(); // critical: send HTTP 200 + headers NOW before LLM starts

  // Pre-extract graph functions from user's last message (reliable — don't depend on AI formatting)
  const lastUserMsg = messages.slice().reverse().find(m => m.role === 'user')?.text || '';
  const isGraphRequest = GRAPH_KEYWORDS.test(lastUserMsg);
  const userFunctions = isGraphRequest ? extractUserFunctions(lastUserMsg) : null;

  let fullResponseText = '';
  const sendToken = (token) => { fullResponseText += token; res.write(`data: ${JSON.stringify({ token })}\n\n`); };
  const sendDone = (model, graphFuncs) => {
    const payload = { done: true, model };
    // Prefer user-extracted functions (reliable) over AI-formatted GRAPH: prefix
    const finalFuncs = userFunctions || graphFuncs;
    if (finalFuncs?.length) payload.graph = finalFuncs.map(toJSMath);
    res.write(`data: ${JSON.stringify(payload)}\n\n`);
    res.end();
  };
  const sendError = (msg) => { res.write(`data: ${JSON.stringify({ error: msg })}\n\n`); res.end(); };

  // Try OpenAI streaming
  if (aiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${aiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'gpt-4o-mini', messages: chatMessages, max_tokens: 250, temperature: 0.7, stream: true })
      });
      if (response.ok) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const lines = decoder.decode(value).split('\n').filter(l => l.startsWith('data: '));
          for (const line of lines) {
            const data = line.slice(6);
            if (data === '[DONE]') continue;
            try { const token = JSON.parse(data).choices?.[0]?.delta?.content; if (token) sendToken(token); } catch {}
          }
        }
        return sendDone('gpt-4o-mini', extractGraphFunctions(fullResponseText));
      }
    } catch (e) { /* fall through */ }
  }

  // Try Ollama with streaming
  // gemma2:2b is fastest on M4 Apple Silicon — use as primary for all subjects
  const ollamaModels = ['gemma2:2b', 'llama3.2:3b', 'llama3.1:8b', 'deepseek-r1:7b'];

  for (const model of ollamaModels) {
    try {
      const response = await fetch(`${ollamaUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          messages: chatMessages,
          stream: true,
          options: {
            num_predict: 120,  // cap response — tutors should be brief
            num_ctx: 768,      // smaller KV cache = faster prefill
            temperature: 0.7
          }
        }),
        signal: AbortSignal.timeout(model === 'deepseek-r1:7b' ? 120000 : 45000)
      });
      if (!response.ok) { console.log(`[homework] ${model} returned ${response.status}`); continue; }
      console.log(`[homework] streaming with ${model}`);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let inThinkBlock = false;
      let thinkBuf = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const lines = decoder.decode(value, { stream: true }).split('\n').filter(Boolean);
        for (const line of lines) {
          try {
            const chunk = JSON.parse(line);
            let token = chunk.message?.content || '';
            if (!token) continue;

            // Strip deepseek <think>...</think> blocks from stream
            if (inThinkBlock) {
              thinkBuf += token;
              const endIdx = thinkBuf.indexOf('</think>');
              if (endIdx !== -1) { inThinkBlock = false; token = thinkBuf.slice(endIdx + 8); thinkBuf = ''; }
              else continue;
            }
            if (token.includes('<think>')) {
              const startIdx = token.indexOf('<think>');
              const before = token.slice(0, startIdx);
              if (before) sendToken(before);
              inThinkBlock = true; thinkBuf = token.slice(startIdx + 7);
              const endIdx = thinkBuf.indexOf('</think>');
              if (endIdx !== -1) { inThinkBlock = false; token = thinkBuf.slice(endIdx + 8); thinkBuf = ''; }
              else continue;
            }
            if (token) sendToken(token);
          } catch {}
        }
      }
      const graphFuncs = extractGraphFunctions(fullResponseText);
      return sendDone(model, graphFuncs);
    } catch (e) { /* try next */ }
  }

  // Stub fallback
  const stubs = [
    "What do you already know about this topic? What have you tried so far?",
    "Let's break this down — what's the first piece of information you're given?",
    "Think about what concept this relates to. Does it remind you of anything you've studied?",
    "You're on the right track! What does the problem tell you about the relationship between those two things?"
  ];
  sendToken(stubs[Math.floor(Math.random() * stubs.length)] + '\n\n*(AI backend not yet configured)*');
  sendDone('stub', null);
});

// ─── Support Tickets ────────────────────────────────

const BOT_MENTION_SUPPORT = '<@1458619930487296121>'; // Mojo Jojo
// #sl-support webhook — for support tickets only
const SUPPORT_WEBHOOK_URL = 'https://discord.com/api/webhooks/1485466632057913394/jikHEJUEi-TncJ1pJyb8ivwRQPxizPj9f9I9cqGCDZN3MjuT2fkyadGPZPRqPAXV-3-P';
// #sl-requests webhook — for course requests only
const COURSE_REQUEST_WEBHOOK_URL = 'https://discord.com/api/webhooks/1486021025186713851/ruYPakF5zcPctEIA2SlrcxL8K2Yxnr-AG9K5aAPaJWv9uDYwZVJ8kvcJU56fydeqALGc';

async function postToDiscord(message, webhookUrl = SUPPORT_WEBHOOK_URL) {
  try {
    const resp = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: message, username: 'StudyLab Support' })
    });
    return resp.ok;
  } catch { return false; }
}

/* ── Short Answer AI Grading ──────────────────────────────────── */
app.post('/api/grade-short-answer', authMiddleware, async (req, res) => {
  const { question, rubric, sampleAnswer, studentAnswer, subjectName } = req.body;
  if (!question || !studentAnswer) return res.status(400).json({ error: 'Missing question or studentAnswer' });

  const aiKey = process.env.OPENAI_API_KEY || process.env.AI_API_KEY;
  if (!aiKey) return res.status(503).json({ error: 'AI grading unavailable' });

  const rubricText = Array.isArray(rubric) && rubric.length
    ? rubric.map((r, i) => `${i + 1}. ${r}`).join('\n')
    : 'Grade holistically based on accuracy and completeness.';

  const prompt = `You are grading a short-answer question for a ${subjectName || 'study'} course.

QUESTION: ${question}

RUBRIC (key points expected):
${rubricText}

${sampleAnswer ? `SAMPLE ANSWER: ${sampleAnswer}\n` : ''}
STUDENT ANSWER: ${studentAnswer}

Grade the student's answer on a 0–2 scale:
- 2 = Fully correct: covers all key rubric points accurately
- 1 = Partially correct: covers at least half the rubric points OR main idea is correct but missing important details
- 0 = Incorrect or insufficient: misses the main concept or is too vague

Respond in this exact JSON format (no markdown, no explanation outside the JSON):
{"score": <0|1|2>, "feedback": "<2-3 sentences: what was correct, what was missing or incorrect, one improvement tip>"}`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${aiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 250,
        temperature: 0.3
      })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('[grade-short-answer] OpenAI error:', err);
      return res.status(502).json({ error: 'AI grading failed' });
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content?.trim() || '';
    let result;
    try {
      // Strip any accidental markdown fences
      const cleaned = raw.replace(/^```json\n?/, '').replace(/```$/, '').trim();
      result = JSON.parse(cleaned);
    } catch (e) {
      console.error('[grade-short-answer] Failed to parse AI response:', raw);
      return res.status(500).json({ error: 'Failed to parse AI response', raw });
    }

    const score = Math.max(0, Math.min(2, parseInt(result.score, 10)));
    return res.json({ score, feedback: result.feedback || '', maxScore: 2 });
  } catch (e) {
    console.error('[grade-short-answer] Error:', e.message);
    return res.status(500).json({ error: 'Internal error' });
  }
});

app.post('/api/support-ticket', authMiddleware, async (req, res) => {
  const { type, description, url, steps } = req.body;
  if (!type || !description) return res.status(400).json({ error: 'type and description required' });

  const u = req.user;
  const ticketId = crypto.randomBytes(3).toString('hex').toUpperCase();
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

  const sharedMsg = `${BOT_MENTION_SUPPORT} **🎫 Support Ticket #${ticketId}**\n\n` +
    `**From:** ${u.display_name} (${u.email})\n` +
    `**Type:** ${type}\n` +
    `**Description:** ${description}\n` +
    (url ? `**Page/URL:** ${url}\n` : '') +
    (steps ? `**Steps to reproduce:** ${steps}\n` : '') +
    `**Submitted:** ${timestamp}\n\n` +
    `_Review and fix if needed_`;

  // Post to shared #sl-support channel
  const ok = await postToDiscord(sharedMsg);
  if (!ok) return res.status(500).json({ error: 'Failed to send ticket' });

  // Also post full detail embed to user's personal channel
  if (u.discordChannelId) {
    postToUserChannel(u, {
      title: `🎫 Your Support Ticket #${ticketId} was submitted`,
      color: 0xf59e0b,
      fields: [
        { name: 'Type', value: type, inline: true },
        { name: 'Status', value: 'Open — under review', inline: true },
        { name: 'Description', value: description },
        ...(url ? [{ name: 'Page/URL', value: url }] : []),
        ...(steps ? [{ name: 'Steps', value: steps }] : [])
      ],
      timestamp: new Date().toISOString(),
      footer: { text: `Ticket ID: ${ticketId}` }
    }).catch(() => {});
  }

  // Log ticket locally
  const logFile = path.join(__dirname, 'support-tickets.json');
  let tickets = [];
  try { tickets = JSON.parse(fs.readFileSync(logFile, 'utf8')); } catch {}
  const ticket = { id: ticketId, userId: u.id, email: u.email, type, description, url, steps, createdAt: new Date().toISOString() };
  tickets.push(ticket);
  fs.writeFileSync(logFile, JSON.stringify(tickets, null, 2));

  // Sync to GHL (fire-and-forget)
  ghlSync.onSupportTicket(u, ticket);

  res.json({ ok: true, ticketId });
});

// ─── Subject AI Tutor ─────────────────────────────────────────────────────
const TUTOR_SYSTEM = (subjectName, unitTitle) =>
  `You are an expert tutor for ${subjectName}. The student is currently studying "${unitTitle}".

Rules:
1. Answer subject questions directly and clearly — explain concepts, use examples, clarify confusion.
2. Keep answers focused on ${subjectName} curriculum. If asked about unrelated topics, gently redirect.
3. Use plain text only — no asterisks, no markdown, no bullet dashes.
4. Be concise: 2-5 sentences unless the concept genuinely requires more.
5. If the student seems stuck or confused, break it down into a simpler first step.
6. Encourage the student — learning is hard and they're doing great by asking.`;

app.post('/api/tutor', authMiddleware, async (req, res) => {
  const { messages, subjectName, unitTitle } = req.body;
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: 'Missing messages' });

  const aiKey = process.env.OPENAI_API_KEY || process.env.AI_API_KEY;
  const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434';

  const system = TUTOR_SYSTEM(subjectName || 'this subject', unitTitle || 'the current unit');
  const chatMessages = [{ role: 'system', content: system }];
  messages.slice(-10).forEach(m => chatMessages.push({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text }));

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  const sendDone = (model) => res.write(`data: ${JSON.stringify({ done: true, model })}\n\n`);
  const sendToken = (t) => res.write(`data: ${JSON.stringify({ token: t })}\n\n`);

  // Try OpenAI first
  if (aiKey) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${aiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'gpt-4o-mini', messages: chatMessages, max_tokens: 400, temperature: 0.7, stream: true })
      });
      if (response.ok) {
        const reader = response.body.getReader();
        const dec = new TextDecoder();
        let buf = '';
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buf += dec.decode(value, { stream: true });
          const lines = buf.split('\n');
          buf = lines.pop();
          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            const d = line.slice(6).trim();
            if (d === '[DONE]') { sendDone('gpt-4o-mini'); res.end(); return; }
            try {
              const p = JSON.parse(d);
              const t = p.choices?.[0]?.delta?.content;
              if (t) sendToken(t);
            } catch {}
          }
        }
        sendDone('gpt-4o-mini'); res.end(); return;
      }
    } catch (e) { console.log('[tutor] OpenAI error:', e.message); }
  }

  // Fallback to Ollama
  const ollamaModels = ['gemma2:2b', 'llama3.2:3b', 'llama3.1:8b', 'deepseek-r1:7b'];
  for (const model of ollamaModels) {
    try {
      const response = await fetch(`${ollamaUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, messages: chatMessages, stream: true, options: { num_predict: 300 } }),
        signal: AbortSignal.timeout(45000)
      });
      if (!response.ok) continue;
      const reader = response.body.getReader();
      const dec = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const lines = dec.decode(value, { stream: true }).split('\n').filter(Boolean);
        for (const line of lines) {
          try {
            const d = JSON.parse(line);
            if (d.message?.content) sendToken(d.message.content);
            if (d.done) { sendDone(model); res.end(); return; }
          } catch {}
        }
      }
      sendDone(model); res.end(); return;
    } catch (e) { console.log(`[tutor] ${model} error:`, e.message); }
  }

  res.write(`data: ${JSON.stringify({ error: 'No AI available right now. Try again in a moment.' })}\n\n`);
  res.end();
});

// ─── Course Supplement Upload ───────────────────────
const multer = require('multer');
const { execSync } = require('child_process');
const supplementStore = path.join(__dirname, 'supplements');
if (!fs.existsSync(supplementStore)) fs.mkdirSync(supplementStore);

const upload = multer({ dest: path.join(__dirname, 'uploads-tmp'), limits: { fileSize: 20 * 1024 * 1024 } });

// Extract text from uploaded file
function extractText(filePath, mimetype) {
  if (mimetype === 'application/pdf') {
    try {
      const result = execSync(`python3 -c "
import pymupdf
doc = pymupdf.open('${filePath.replace(/'/g, "\\'")}')
for page in doc:
    print(page.get_text())
"`, { timeout: 30000, maxBuffer: 5 * 1024 * 1024 });
      return result.toString('utf8');
    } catch(e) { console.error('PDF extract error:', e.message); return ''; }
  }
  // For text files
  if (mimetype && (mimetype.startsWith('text/') || mimetype === 'application/json')) {
    return fs.readFileSync(filePath, 'utf8');
  }
  return '';
}

// Load existing supplements for a course
function loadSupplements(courseIdx) {
  const file = path.join(supplementStore, `course_${courseIdx}.json`);
  if (!fs.existsSync(file)) return { units: [] };
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}
function saveSupplements(courseIdx, data) {
  fs.writeFileSync(path.join(supplementStore, `course_${courseIdx}.json`), JSON.stringify(data, null, 2));
}

// Simple dedup: normalize text and check for substantial overlap
function normalizeText(t) { return t.toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim(); }

function isSubstantiallyNew(newText, existingTexts) {
  const normNew = normalizeText(newText);
  if (normNew.length < 20) return false; // too short to be meaningful
  for (const existing of existingTexts) {
    const normExist = normalizeText(existing);
    // Check if new text is a substring of existing or vice versa
    if (normExist.includes(normNew) || normNew.length < 50 && normExist.includes(normNew.slice(0, 40))) return false;
    // Check Jaccard similarity on word sets
    const wordsNew = new Set(normNew.split(' '));
    const wordsExist = new Set(normExist.split(' '));
    const intersection = [...wordsNew].filter(w => wordsExist.has(w)).length;
    const union = new Set([...wordsNew, ...wordsExist]).size;
    if (union > 0 && intersection / union > 0.65) return false; // >65% overlap = duplicate
  }
  return true;
}

// Parse extracted text into content sections
function parseIntoSections(rawText) {
  const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  const sections = [];
  let currentTitle = null;
  let currentContent = [];

  for (const line of lines) {
    // Detect section headers: lines that are short, capitalized, or have numbering
    const isHeader = (line.length < 80 && /^(#{1,3}\s|Chapter|Unit|Section|Part|\d+[\.\)]\s|[A-Z][A-Z\s]{5,}$|[IVXLC]+[\.\)]\s)/i.test(line))
      || (line.length < 60 && line === line.toUpperCase() && line.length > 3);
    if (isHeader && currentContent.length > 0) {
      sections.push({ title: currentTitle || 'Notes', content: currentContent.join('\n') });
      currentContent = [];
      currentTitle = line.replace(/^#+\s*/, '').replace(/^\d+[\.\)]\s*/, '');
    } else if (isHeader && currentContent.length === 0) {
      currentTitle = line.replace(/^#+\s*/, '').replace(/^\d+[\.\)]\s*/, '');
    } else {
      currentContent.push(line);
    }
  }
  if (currentContent.length > 0) {
    sections.push({ title: currentTitle || 'Additional Notes', content: currentContent.join('\n') });
  }
  return sections;
}

// Convert plain text sections into HTML content
function sectionsToHtml(sections) {
  return sections.map(s => {
    const paragraphs = s.content.split('\n').filter(Boolean);
    const html = paragraphs.map(p => {
      // Bullet point lines
      if (/^[-•*]\s/.test(p)) return `<li>${p.replace(/^[-•*]\s*/, '')}</li>`;
      return `<p>${p}</p>`;
    }).join('\n');
    // Wrap consecutive <li> in <ul>
    const wrapped = html.replace(/((?:<li>.*?<\/li>\n?)+)/g, '<ul>\n$1</ul>');
    return `<h3>📝 ${s.title}</h3>\n${wrapped}`;
  }).join('\n\n');
}

app.post('/api/course/:courseIdx/supplement', authMiddleware, upload.single('file'), (req, res) => {
  try {
    const courseIdx = parseInt(req.params.courseIdx);
    if (isNaN(courseIdx) || courseIdx < 0) return res.status(400).json({ error: 'Invalid course index' });

    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    // Extract text from uploaded file
    const rawText = extractText(req.file.path, req.file.mimetype);
    // Clean up temp file
    try { fs.unlinkSync(req.file.path); } catch(e) {}

    if (!rawText || rawText.trim().length < 20) {
      return res.status(400).json({ error: 'Could not extract enough text from this file. Try a PDF or text file.' });
    }

    // Parse into sections
    const sections = parseIntoSections(rawText);
    if (sections.length === 0) return res.status(400).json({ error: 'No content sections found in the file.' });

    // Load existing supplements + build list of existing texts to dedup against
    const existing = loadSupplements(courseIdx);
    const existingTexts = existing.units.map(u => u.rawText || normalizeText(u.content));

    // Also load base course data for dedup (read the JS file)
    const courseFiles = ['history.js', 'precalc.js', 'christian-humanism.js', 'aplang.js', 'business-law.js', 'physics.js', 'ap-spanish.js'];
    let baseCourseTexts = [];
    if (courseFiles[courseIdx]) {
      try {
        const courseContent = fs.readFileSync(path.join(__dirname, courseFiles[courseIdx]), 'utf8');
        // Extract content strings from the JS data
        const contentMatches = courseContent.match(/content:\s*`([^`]*)`/g);
        if (contentMatches) baseCourseTexts = contentMatches.map(m => m.replace(/content:\s*`/, '').replace(/`$/, ''));
      } catch(e) {}
    }
    const allExistingTexts = [...existingTexts, ...baseCourseTexts];

    // Dedup: only keep sections that are substantially new
    const newSections = sections.filter(s => isSubstantiallyNew(s.content, allExistingTexts));

    if (newSections.length === 0) {
      return res.json({ added: 0, message: 'All content in this file is already covered in the course. Nothing new to add!' });
    }

    // Convert to HTML and store
    const htmlContent = sectionsToHtml(newSections);
    const supplementUnit = {
      title: `📎 Supplementary Notes (${new Date().toLocaleDateString()})`,
      content: htmlContent,
      rawText: newSections.map(s => s.content).join('\n'),
      addedBy: req.user.id,
      addedAt: new Date().toISOString(),
      fileName: req.file.originalname
    };

    existing.units.push(supplementUnit);
    saveSupplements(courseIdx, existing);

    res.json({
      added: newSections.length,
      total: existing.units.length,
      message: `Added ${newSections.length} new section${newSections.length > 1 ? 's' : ''} to the course!`
    });
  } catch(err) {
    console.error('Supplement upload error:', err);
    res.status(500).json({ error: 'Failed to process file' });
  }
});

// Get supplements for a course
app.get('/api/course/:courseIdx/supplements', authMiddleware, (req, res) => {
  const courseIdx = parseInt(req.params.courseIdx);
  if (isNaN(courseIdx) || courseIdx < 0) return res.status(400).json({ error: 'Invalid course index' });
  const data = loadSupplements(courseIdx);
  res.json(data);
});

// ─── Course Requests ────────────────────────────────
app.post('/api/course-request', authMiddleware, async (req, res) => {
  const { subject, description, hasAttachment } = req.body;
  if (!subject) return res.status(400).json({ error: 'subject is required' });
  if (!hasAttachment) return res.status(400).json({ error: 'attachment_required', message: 'Please attach at least one PDF (notes, syllabus, or review sheet) so we can build your course.' });

  // ─── Tier limit check ───────────────────────────────────────────────────────
  if (req.user.status !== 'admin') {
    const _reqUsers = loadUsers();
    const _reqUser = _reqUsers.find(x => x.id === req.user.id);
    if (_reqUser) {
      const limits = tierLimits(_reqUser);
      if (limits.requests === 0) {
        return res.status(403).json({
          error: 'tier_required', tier: _reqUser.tier || 'free',
          message: 'Course requests require a paid plan.',
        });
      }
      if (limits.requests > 0) {
        const usage = getMonthUsage(_reqUser, 'courseRequests');
        if (usage.count >= limits.requests) {
          return res.status(429).json({
            error: 'limit_reached', tier: _reqUser.tier || 'free',
            used: usage.count, limit: limits.requests,
          });
        }
        usage.count++;
        saveUsers(_reqUsers);
      }
    }
  }

  const u = req.user;
  const requestId = crypto.randomBytes(3).toString('hex').toUpperCase();
  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });

  // Notify shared #sl-requests
  const msg = `${BOT_MENTION_SUPPORT} **📚 Course Request #${requestId}**\n\n` +
    `**From:** ${u.display_name} (${u.email})\n` +
    `**Requested Course:** ${subject}\n` +
    (description ? `**Details:** ${description}\n` : '') +
    `**Submitted:** ${timestamp}`;
  postToDiscord(msg, COURSE_REQUEST_WEBHOOK_URL).catch(() => {});

  // Also post embed to user's personal channel
  if (u.discordChannelId) {
    postToUserChannel(u, {
      title: `📚 Course Request #${requestId} Received`,
      description: `Your request for **${subject}** has been received and is being reviewed. We'll build your course and notify you here when it's ready.`,
      color: 0x4f46e5,
      fields: [
        { name: 'Subject', value: subject, inline: true },
        { name: 'Status', value: '⏳ Pending Review', inline: true },
        ...(description ? [{ name: 'Details', value: description }] : [])
      ],
      timestamp: new Date().toISOString(),
      footer: { text: `Request ID: ${requestId}` }
    }).catch(() => {});
  }

  // Log locally
  const logFile = path.join(__dirname, 'course-requests.json');
  let requests = [];
  try { requests = JSON.parse(fs.readFileSync(logFile, 'utf8')); } catch {}
  const request = { id: requestId, userId: u.id, email: u.email, subject, description: description || '', createdAt: new Date().toISOString() };
  requests.push(request);
  fs.writeFileSync(logFile, JSON.stringify(requests, null, 2));

  // Sync to GHL (fire-and-forget)
  ghlSync.onCourseRequest(u, request);

  res.json({ ok: true, requestId });
});

// ─── Start ──────────────────────────────────────────
// ─── Dynamic course manifest ──────────────────────────────────────────────────
const COURSES_FILE = path.join(__dirname, 'courses.json');

// Public — no auth. Returns the course manifest so the frontend can load scripts dynamically.
app.get('/api/courses', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(COURSES_FILE, 'utf8'));
    res.json(data);
  } catch (e) {
    console.error('[courses] Failed to read courses.json:', e.message);
    res.status(500).json({ error: 'Could not load course manifest' });
  }
});

// ─── Course Catalog, Enrollment & Ratings ─────────────────────────────────────
const RATINGS_FILE = path.join(__dirname, 'course_ratings.json');

function loadRatings() {
  if (!fs.existsSync(RATINGS_FILE)) return [];
  try { return JSON.parse(fs.readFileSync(RATINGS_FILE, 'utf8')).ratings || []; }
  catch { return []; }
}
function saveRatings(ratings) {
  fs.writeFileSync(RATINGS_FILE, JSON.stringify({ ratings }, null, 2));
}

// GET /api/catalog — all courses with enrollment + rating stats (auth required)
app.get('/api/catalog', authMiddleware, (req, res) => {
  try {
    const courseData = JSON.parse(fs.readFileSync(COURSES_FILE, 'utf8'));
    const users = loadUsers();
    const ratings = loadRatings();

    const catalog = courseData.courses.map((course, idx) => {
      const courseRatings = ratings.filter(r => r.courseKey === course.key);
      const avgRating = courseRatings.length
        ? Math.round((courseRatings.reduce((a, r) => a + r.stars, 0) / courseRatings.length) * 10) / 10
        : null;
      const enrolledCount = users.filter(u =>
        u.courses === 'all' || (Array.isArray(u.courses) && u.courses.includes(idx))
      ).length;
      const userRating = courseRatings.find(r => r.userId === req.user.id);

      return {
        key: course.key,
        idx,
        avgRating,
        ratingCount: courseRatings.length,
        enrolledCount,
        userRating: userRating?.stars || null,
        userFeedback: userRating?.feedback || null,
      };
    });

    res.json({ catalog });
  } catch (e) {
    console.error('[catalog] error:', e.message);
    res.status(500).json({ error: 'Failed to load catalog' });
  }
});

// POST /api/courses/enroll — self-enroll in a course by key
app.post('/api/courses/enroll', authMiddleware, (req, res) => {
  const { courseKey } = req.body;
  if (!courseKey) return res.status(400).json({ error: 'courseKey required' });

  const courseData = JSON.parse(fs.readFileSync(COURSES_FILE, 'utf8'));
  const courseIdx = courseData.courses.findIndex(c => c.key === courseKey);
  if (courseIdx < 0) return res.status(404).json({ error: 'Course not found' });

  const users = loadUsers();
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.status(404).json({ error: 'User not found' });

  if (user.courses === 'all') return res.json({ ok: true, already: true });

  if (!Array.isArray(user.courses)) user.courses = [];
  if (user.courses.includes(courseIdx)) return res.json({ ok: true, already: true, courses: user.courses });

  // ─── Tier course cap ────────────────────────────────────────────────────────
  const limits = tierLimits(user);
  if (limits.maxCourses > 0 && user.courses.length >= limits.maxCourses) {
    return res.status(403).json({
      error: 'course_limit', tier: user.tier || 'free', limit: limits.maxCourses,
    });
  }

  user.courses.push(courseIdx);
  saveUsers(users);
  res.json({ ok: true, courses: user.courses });
});

// POST /api/courses/rate — upsert a rating (1–5 stars + optional feedback)
app.post('/api/courses/rate', authMiddleware, (req, res) => {
  const { courseKey, stars, feedback } = req.body;
  if (!courseKey || !stars || stars < 1 || stars > 5) {
    return res.status(400).json({ error: 'courseKey and stars (1–5) required' });
  }

  const ratings = loadRatings();
  const existing = ratings.findIndex(r => r.courseKey === courseKey && r.userId === req.user.id);
  const rating = {
    id: existing >= 0 ? ratings[existing].id : `${req.user.id}-${courseKey}-${Date.now()}`,
    courseKey,
    userId: req.user.id,
    userName: req.user.display_name || 'Anonymous',
    stars: Math.round(stars),
    feedback: (feedback || '').trim(),
    createdAt: new Date().toISOString(),
  };

  if (existing >= 0) ratings[existing] = rating;
  else ratings.push(rating);

  saveRatings(ratings);
  res.json({ ok: true, rating });
});

// ─── Notifications ────────────────────────────────────
// GET /api/notifications — returns unread notifications for the current user
app.get('/api/notifications', authMiddleware, (req, res) => {
  const notifs = loadNotifications();
  const mine = notifs.filter(n => n.userId === req.user.id && !n.read);
  res.json({ notifications: mine });
});

// POST /api/notifications/:id/read — mark a notification as read
app.post('/api/notifications/:id/read', authMiddleware, (req, res) => {
  const notifs = loadNotifications();
  const n = notifs.find(n => n.id === req.params.id && n.userId === req.user.id);
  if (!n) return res.status(404).json({ error: 'Not found' });
  n.read = true;
  n.readAt = new Date().toISOString();
  saveNotifications(notifs);
  res.json({ ok: true });
});

// ─── Admin: add/update course in manifest ─────────────────────────────────────
app.post('/api/admin/courses', authMiddleware, (req, res) => {
  const { key, file, version, dataVar, pdf, pdfLabel } = req.body;
  if (!key || !file || !dataVar) return res.status(400).json({ error: 'key, file, dataVar required' });

  const u = req.user;
  if (u.status !== 'admin') return res.status(403).json({ error: 'Admin only' });

  const data = JSON.parse(fs.readFileSync(COURSES_FILE, 'utf8'));
  const existing = data.courses.findIndex(c => c.key === key);
  const isNew = existing < 0;
  const entry = { key, file, version: version || Date.now().toString(), dataVar, pdf: pdf || null, pdfLabel: pdfLabel || null };

  if (existing >= 0) {
    data.courses[existing] = entry; // update
  } else {
    data.courses.push(entry); // append
  }

  fs.writeFileSync(COURSES_FILE, JSON.stringify(data, null, 2));

  // If it's a brand-new course, notify anyone who requested it
  if (isNew) {
    const logFile = path.join(__dirname, 'course-requests.json');
    let requests = [];
    try { requests = JSON.parse(fs.readFileSync(logFile, 'utf8')); } catch {}

    // Match requests where subject loosely matches the course key or pdfLabel
    const courseLabel = (pdfLabel || key).toLowerCase();
    const matched = requests.filter(r => {
      const s = r.subject.toLowerCase();
      return s.includes(key.toLowerCase()) || key.toLowerCase().includes(s) ||
             s.includes(courseLabel) || courseLabel.includes(s);
    });

    if (matched.length > 0) {
      const notifs = loadNotifications();
      for (const r of matched) {
        // Don't double-notify
        const already = notifs.find(n => n.userId === r.userId && n.courseKey === key && !n.read);
        if (already) continue;
        notifs.push({
          id: crypto.randomBytes(4).toString('hex'),
          userId: r.userId,
          email: r.email,
          subject: r.subject,
          courseKey: key,
          courseLabel: pdfLabel || key,
          requestId: r.id,
          createdAt: new Date().toISOString(),
          read: false
        });
      }
      saveNotifications(notifs);
      console.log(`[notifications] Notified ${matched.length} user(s) that "${key}" is ready.`);
    }
  }

  res.json({ ok: true, index: existing >= 0 ? existing : data.courses.length - 1, course: entry });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`StudyLab auth server running on http://127.0.0.1:${PORT}`);
});
