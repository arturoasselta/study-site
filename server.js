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

const app = express();
const PORT = 8089;
const USERS_FILE = path.join(__dirname, 'users.json');
const SESSIONS_FILE = path.join(__dirname, 'sessions.json');

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

  res.json({
    token,
    user: { id: user.id, email: user.email, name: user.display_name, status: user.status }
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

  res.json({
    token,
    user: { id: user.id, email: user.email, name: user.display_name, status: user.status }
  });
});

// Get current user
app.get('/api/me', authMiddleware, (req, res) => {
  res.json({
    user: { id: req.user.id, email: req.user.email, name: req.user.display_name, status: req.user.status }
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

// ─── Admin Routes ───────────────────────────────────

// List all users (admin only)
app.get('/api/admin/users', authMiddleware, (req, res) => {
  if (req.user.status !== 'admin') return res.status(403).json({ error: 'Admin only' });
  const users = loadUsers().map(u => ({
    id: u.id, email: u.email, display_name: u.display_name,
    status: u.status, created_at: u.created_at
  }));
  res.json(users);
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

// ─── Homework Helper AI ─────────────────────────────

const SOCRATIC_SYSTEM = `You are a helpful homework tutor. Follow these rules:

1. For CONCEPTUAL questions (solve this, find x, explain why): Use Socratic method — ask guiding questions, give hints, never give the direct answer.
2. For VISUAL/GRAPH requests (show me a graph, what does it look like, draw this): Describe the graph clearly (key features: amplitude, period, shifts, intercepts), then provide a Desmos link. Format: [View on Desmos](https://www.desmos.com/calculator). After describing, ask one guiding question about what they notice.
3. For "I am not sure" or "I don't know": Give a clear hint or explain the first step — don't ask another question.
4. Always use plain text — no asterisks for emphasis, no markdown.
5. Be brief: 2-4 sentences max per response.`;

app.post('/api/homework', authMiddleware, async (req, res) => {
  const { messages, subjectContext } = req.body;
  if (!messages || !Array.isArray(messages)) return res.status(400).json({ error: 'Missing messages' });

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

  const sendToken = (token) => res.write(`data: ${JSON.stringify({ token })}\n\n`);
  const sendDone = (model) => { res.write(`data: ${JSON.stringify({ done: true, model })}\n\n`); res.end(); };
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
        return sendDone('gpt-4o-mini');
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
      return sendDone(model);
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
  sendDone('stub');
});

// ─── Start ──────────────────────────────────────────
app.listen(PORT, '127.0.0.1', () => {
  console.log(`StudyLab auth server running on http://127.0.0.1:${PORT}`);
});
