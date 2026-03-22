/* ═══════════════════════════════════════════════════
   StudyLab — Local Express + SQLite Backend
   Auth (bcrypt + JWT) · Per-user progress
   ═══════════════════════════════════════════════════ */
const express = require('express');
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = 8089;

// Load persistent JWT secret from file (so tokens survive restarts)
const fs = require('fs');
const secretFile = path.join(__dirname, '.jwt-secret');
let JWT_SECRET;
try { JWT_SECRET = fs.readFileSync(secretFile, 'utf8').trim(); }
catch { JWT_SECRET = crypto.randomBytes(32).toString('hex'); fs.writeFileSync(secretFile, JWT_SECRET, { mode: 0o600 }); }
const JWT_EXPIRES = '7d';

// ── Database Setup ──────────────────────────────────
const db = new Database(path.join(__dirname, 'studylab.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    subject TEXT NOT NULL,
    unit_index INTEGER NOT NULL,
    score INTEGER DEFAULT 0,
    total INTEGER DEFAULT 0,
    completed INTEGER DEFAULT 0,
    updated_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user_id, subject, unit_index)
  );

  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    subject TEXT NOT NULL,
    enrolled_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user_id, subject)
  );
`);

// Prepared statements
const stmts = {
  findUserByEmail: db.prepare('SELECT * FROM users WHERE email = ?'),
  createUser: db.prepare('INSERT INTO users (email, name, password_hash) VALUES (?, ?, ?)'),
  getUserById: db.prepare('SELECT id, email, name, created_at FROM users WHERE id = ?'),

  getProgress: db.prepare('SELECT subject, unit_index, score, total, completed, updated_at FROM progress WHERE user_id = ?'),
  upsertProgress: db.prepare(`
    INSERT INTO progress (user_id, subject, unit_index, score, total, completed, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
    ON CONFLICT(user_id, subject, unit_index)
    DO UPDATE SET score=excluded.score, total=excluded.total, completed=excluded.completed, updated_at=datetime('now')
  `),

  getCourses: db.prepare('SELECT subject, enrolled_at FROM courses WHERE user_id = ?'),
  enrollCourse: db.prepare('INSERT OR IGNORE INTO courses (user_id, subject) VALUES (?, ?)'),
  unenrollCourse: db.prepare('DELETE FROM courses WHERE user_id = ? AND subject = ?'),
};

// ── Middleware ───────────────────────────────────────
app.use(express.json());

// Auth middleware
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(header.slice(7), JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

// ── Auth Routes ─────────────────────────────────────
app.post('/api/signup', (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json({ error: 'Email, name, and password are required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  const existing = stmts.findUserByEmail.get(email.toLowerCase().trim());
  if (existing) {
    return res.status(409).json({ error: 'Email already registered' });
  }

  const hash = bcrypt.hashSync(password, 10);
  const result = stmts.createUser.run(email.toLowerCase().trim(), name.trim(), hash);
  const userId = result.lastInsertRowid;

  // Auto-enroll in all available courses
  stmts.enrollCourse.run(userId, 'history');
  stmts.enrollCourse.run(userId, 'precalc');

  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES });
  res.json({ token, user: { id: userId, email: email.toLowerCase().trim(), name: name.trim() } });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const user = stmts.findUserByEmail.get(email.toLowerCase().trim());
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES });
  res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
});

app.get('/api/me', auth, (req, res) => {
  const user = stmts.getUserById.get(req.userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json({ user });
});

// ── Progress Routes ─────────────────────────────────
app.get('/api/progress', auth, (req, res) => {
  const rows = stmts.getProgress.all(req.userId);
  // Return as nested object: { history: { 0: {score,total,completed}, ... }, precalc: { ... } }
  const progress = {};
  for (const row of rows) {
    if (!progress[row.subject]) progress[row.subject] = {};
    progress[row.subject][row.unit_index] = {
      score: row.score,
      total: row.total,
      completed: !!row.completed,
      updated_at: row.updated_at
    };
  }
  res.json({ progress });
});

app.post('/api/progress', auth, (req, res) => {
  const { subject, unitIndex, score, total, completed } = req.body;
  if (subject === undefined || unitIndex === undefined) {
    return res.status(400).json({ error: 'subject and unitIndex are required' });
  }
  stmts.upsertProgress.run(
    req.userId,
    subject,
    unitIndex,
    score || 0,
    total || 0,
    completed ? 1 : 0
  );
  res.json({ ok: true });
});

// ── Course Routes ───────────────────────────────────
app.get('/api/courses', auth, (req, res) => {
  const courses = stmts.getCourses.all(req.userId);
  res.json({ courses: courses.map(c => c.subject) });
});

app.post('/api/courses/enroll', auth, (req, res) => {
  const { subject } = req.body;
  if (!subject) return res.status(400).json({ error: 'subject is required' });
  stmts.enrollCourse.run(req.userId, subject);
  res.json({ ok: true });
});

// ── Start ───────────────────────────────────────────
app.listen(PORT, '127.0.0.1', () => {
  console.log(`StudyLab API running on http://127.0.0.1:${PORT}`);
});
