# StudyLab Feature Plan — Opus Spec

## Current State
- **3 subjects**: US History (15 units, 144 Qs), Pre-Calc (11 units, 58 Qs), Christian Humanism (loaded)
- **Quiz system**: Multiple choice, score ring, retake — BUT no explanations in data
- **Auth**: Local Express server (port 8089), admin panel w/ bell, approval workflow
- **Stack**: Static HTML + JS data files, nginx (8088), Cloudflare tunnel
- **State**: `localStorage` only — answers, submitted, scores
- **index.html**: 1080 lines (CSS + HTML + JS all inline)

## Architecture Decision
Keep everything in `index.html` + data files. No frameworks, no build step. Features are JS functions + CSS.
Server endpoints only for features that NEED persistence across devices (user prefs, notes).

---

## Feature Implementation Order (by dependency + impact)

### Phase 1: Data Enhancement (no UI changes needed)
**File: history.js, precalc.js, christian-humanism.js**

#### 1. Wrong Answer Explanations
- Add `explanation: "..."` field to every question object in all 3 data files
- The renderQuiz already renders `q.explanation` — it's wired up, just missing data
- ~202 questions total need explanations
- Format: 1-2 sentences explaining why correct answer is right

### Phase 2: Core Learning Features (index.html JS/CSS)

#### 2. Flashcard Mode (new tab)
- Add 3rd tab alongside Study/Quiz: "🃏 Flashcards"
- Data: Extract key terms from each unit's content (bold items = terms)
- Also add optional `flashcards: [{ front, back }]` array to unit data
- UI: Card with front (term/question), click to flip (definition/answer)
- Navigation: ← → arrows, shuffle button, progress counter
- CSS: `.flashcard`, `.flashcard.flipped` with 3D transform

#### 3. Progress Dashboard (new view)
- Add "📊 Dashboard" button in header nav (visible when logged in)
- New `state.view = 'dashboard'` + `renderDashboard()` function
- Shows per-subject: completion %, average quiz score, units mastered (≥80%)
- Overall stats: total units done, total Qs answered, overall accuracy
- Visual: horizontal bars per unit (color-coded by score), streak counter
- Data source: existing `state.scores` + `state.submitted`

#### 4. Spaced Repetition System
- New localStorage key: `studylab_srs` — stores question schedule
- When user gets a question wrong: schedule it for review in 1 day
- When reviewed correctly: push to 3 days, then 7, then 14 (Leitner boxes)
- New "🔁 Review Due" indicator on home cards + header
- New view: `state.view = 'review'` — pulls due questions across all subjects
- Shows questions in isolation (no unit grouping), tracks streaks

#### 5. Study Timer (Pomodoro)
- Floating widget (bottom-right corner), togglable
- 25-min study / 5-min break cycle, customizable
- Audio chime on timer end (use Web Audio API beep, no external files)
- Tracks total study time in localStorage: `studylab_timer_log`
- Shows in dashboard: "Total study time: X hrs Y mins"

### Phase 3: Quality of Life

#### 6. Bookmarks & Highlights
- When on Study tab: toolbar at top "🔖 Bookmark this unit" toggle
- Bookmarked units appear in sidebar with star icon
- Stored in localStorage: `studylab_bookmarks` (array of `si-ui` keys)
- New "⭐ Bookmarks" filter in sidebar header
- Highlight: select text → popup "Highlight" button → yellow bg saved
- Store in localStorage: `studylab_highlights` (keyed by si-ui, array of text ranges)

#### 7. PDF Study Guide Downloads
- Already partially done (SUBJECT_PDFS exists for history/precalc)
- Need to add `christian-humanism` PDF
- Add `SUBJECT_KEYS` entry for `christian-humanism`
- Fix: Currently only renders PDF button if SUBJECT_PDFS has entry — just add data

#### 8. Search
- New search input in header (expandable on click)
- Searches all units across all subjects: title + content text
- Results: list of matching units with highlighted snippets
- Click result → navigates to that unit
- Implementation: simple `indexOf` / regex on stripped HTML text — no server needed

#### 9. Mobile Polish
- Audit all CSS at `@media(max-width:768px)`
- Fix: flashcard flip touch events, timer widget positioning
- Add swipe navigation between units (touch events on main content)
- Sidebar: already responsive (hamburger menu exists)

### Phase 4: Social & Advanced

#### 10. Leaderboard
- Server endpoint: `GET /api/leaderboard` — returns top scores per subject
- Client posts scores: `POST /api/scores` with subject, unit, score
- Server stores in `scores.json`, aggregates per user
- UI: "🏆 Leaderboard" tab on dashboard — ranked list with avatars
- Only shows approved users' display names

#### 11. Unit Notes (per user)
- Server endpoint: `GET/POST /api/notes/:subjectKey/:unitIndex`
- Textarea below study content: "📝 Your Notes"
- Auto-saves on blur (debounced)
- Stored server-side in `notes.json` keyed by userId + subject + unit

#### 12. AI Tutor Chat
- "🤖 Ask Tutor" button at bottom of study content
- Opens chat overlay (bottom-right, like Intercom)
- Sends question + current unit context to a local API endpoint
- Server proxies to an LLM (can use local ollama or OpenAI)
- Responses streamed into chat bubble
- **Deferred**: depends on LLM setup — stub the UI, wire later

#### 13. Question Bank Shuffling
- On retake: shuffle question order + shuffle option order
- For each question, also shuffle which options map to which letter
- Keep `answer` index pointing to correct option
- Implementation: Fisher-Yates shuffle on questions array copy + options array copy

---

## File Modification Map

| File | Changes |
|------|---------|
| `history.js` | Add `explanation` to all 144 questions |
| `precalc.js` | Add `explanation` to all 58 questions, add `flashcards` arrays |
| `christian-humanism.js` | Add `explanation` to all questions, add `flashcards` arrays |
| `index.html` (CSS) | Add flashcard, dashboard, timer, search, bookmark, leaderboard, notes, AI chat styles |
| `index.html` (HTML) | Add timer widget, search input, AI chat overlay |
| `index.html` (JS) | Add ~600 lines: renderFlashcards, renderDashboard, SRS engine, timer, search, bookmarks, leaderboard fetch, notes, shuffle |
| `server.js` | Add endpoints: `/api/leaderboard`, `/api/scores`, `/api/notes/:s/:u` |

## Execution Strategy for Sonnet
1. Start with Phase 1 (explanations) — biggest user-facing improvement, data-only
2. Phase 2 features can be built independently (flashcards, dashboard, SRS, timer)
3. Phase 3 is polish — do after core features work
4. Phase 4 needs server changes — do last
5. Test after each feature: JS syntax check + curl login test
6. Git commit after each phase

## Estimated Size
- Phase 1: ~200 lines of explanation text added to data files
- Phase 2: ~500 lines JS + ~150 lines CSS
- Phase 3: ~300 lines JS + ~80 lines CSS  
- Phase 4: ~200 lines JS + ~100 lines server.js + ~50 lines CSS
- **Total: ~1,500 lines of new code**
