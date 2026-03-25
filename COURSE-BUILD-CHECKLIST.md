# Course Build Checklist — Procadamia

**Follow this EXACTLY for every new course request. No shortcuts.**

## 1. Parse the Request
- [ ] Extract: student name, email, user ID, subject name
- [ ] Download all attached PDFs/materials (use bot token in Authorization header for Discord CDN)
- [ ] If Discord CDN URLs are expired, re-fetch the message via Discord API to get fresh URLs

## 2. Analyze Source Materials
- [ ] Extract text from all PDFs (`pdftotext` for text PDFs, `tesseract` or `pdftoppm` → image analysis for scanned PDFs)
- [ ] Identify all topics, chapters, key concepts, definitions, case studies
- [ ] Organize into logical units (aim for 4-8 units per course)

## 3. Find REAL YouTube Videos
- [ ] Search YouTube for relevant educational videos per unit topic
- [ ] Scrape actual video IDs from YouTube search results page (use `curl` + `perl` regex on `"videoId":"..."`)
- [ ] **VERIFY EVERY VIDEO ID** using noembed.com oEmbed API:
  ```bash
  curl -s "https://noembed.com/embed?url=https://www.youtube.com/watch?v=VIDEO_ID" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('title','NOT FOUND'))"
  ```
- [ ] **If title = "NOT FOUND" → DO NOT USE.** Find another video.
- [ ] Pick the best matching educational video for each unit
- [ ] Document the video title next to the ID in a comment

## 4. Build the Course Data File
- [ ] Create `subject-name.js` following the pattern in existing course files (e.g., `aplang.js`, `business-law.js`)
- [ ] Include for each unit:
  - `title` — clear unit title
  - `video` — **verified** YouTube video ID
  - `content` — comprehensive HTML content covering all key concepts
  - `quiz` — 5+ questions per unit, mix of types, with correct answers
- [ ] Export as `window.SUBJECT_NAME_DATA = { ... }`

## 5. Build the PDF Study Guide + Cheat Sheet

### 5a. Study Guide
- [ ] Create `guides/subject-name-guide.html` following the template pattern (see `history-guide.html`)
- [ ] Include: table of contents, all units, key terms, case studies, exam tips
- [ ] Add entry to `generate-pdfs.js` under the Study Guides section:
  ```js
  await generatePDF('subject-name-guide.html', 'Subject-Name-Study-Guide.pdf');
  ```

### 5b. Cheat Sheet (REQUIRED for every new course)
- [ ] Create `guides/subject-name-cheat-sheet.html` — compact 1-2 page quick-reference
- [ ] Use the existing cheat sheet templates as reference (e.g., `history-cheat-sheet.html`, `physics-cheat-sheet.html`)
- [ ] Include (subject-appropriate mix of):
  - Key terms/definitions table
  - Important dates, people, or case names
  - Formulas or frameworks (for math/science/law)
  - Exam tips and common pitfalls
- [ ] CSS: compact font (8.5-9pt), 2-column grid layout, tight margins (0.45in), print-optimized
- [ ] Add entry to `generate-pdfs.js` under the Cheat Sheets section:
  ```js
  await generatePDF('subject-name-cheat-sheet.html', 'Subject-Name-Cheat-Sheet.pdf');
  ```
- [ ] Run `node generate-pdfs.js` and verify BOTH PDFs generate without errors
- [ ] Verify PDF sizes are reasonable (study guide: 100KB–1MB; cheat sheet: 100–350KB)

## 6. Register in index.html
- [ ] Add `<script src="subject-name.js?v=YYYYMMDD"></script>` tag
- [ ] Add to `SUBJECTS` array: `SUBJECT_NAME_DATA`
- [ ] Add to `SUBJECT_KEYS` array: `'subject-name'`
- [ ] Add `pdf`, `pdfLabel`, `cheatSheet`, and `cheatSheetLabel` fields to `courses.json` entry:
  ```json
  "pdf": "guides/Subject-Name-Study-Guide.pdf",
  "pdfLabel": "Subject Name Study Guide",
  "cheatSheet": "guides/Subject-Name-Cheat-Sheet.pdf",
  "cheatSheetLabel": "Subject Name Cheat Sheet"
  ```
- [ ] Verify the array index matches what you'll assign to the user

## 7. Assign to User
- [ ] Find user in `users.json` by email or ID
- [ ] Add the course index to their `courses` array
- [ ] If user doesn't exist, note this and inform Arty

## 8. Deploy & Verify
- [ ] Restart the server: `pm2 restart studylab-auth`
- [ ] Verify locally via nginx:
  ```bash
  curl -sI -H "Host: www.procadamia.com" "http://localhost:8088/subject-name.js" | head -5
  curl -sI -H "Host: www.procadamia.com" "http://localhost:8088/guides/Subject-Name-Study-Guide.pdf" | head -5
  ```
- [ ] Verify through Cloudflare:
  ```bash
  curl -sI "https://www.procadamia.com/subject-name.js" | head -5
  curl -sI "https://www.procadamia.com/guides/Subject-Name-Study-Guide.pdf" | head -5
  ```
- [ ] Confirm `content-type: application/pdf` for the PDF (NOT `text/html`)
- [ ] Confirm `content-type: application/javascript` for the JS file

## 9. Send Completion Email
- [ ] Send email to student via GHL Conversations API:
  ```js
  const ghl = require('.../procadamia/ghl-api.js');
  await ghl.apiCall('POST', '/conversations/messages', {
    type: 'Email',
    contactId: '<GHL_CONTACT_ID>',
    subject: '📚 Your [Subject] Course is Ready!',
    html: '<professional HTML with course summary, unit list, and link to procadamia.com>'
  });
  ```
- [ ] Move GHL Course Requests opp to "Published" stage:
  ```js
  await ghl.moveOpportunity(oppId, ghl.STAGES.courseRequests.published);
  ```
- [ ] Verify email shows as queued (status 201) in API response

## 10. Commit & Report
- [ ] `git add` all new/modified files
- [ ] Commit with descriptive message: `[Course] Add Subject Name course for Student Name`
- [ ] Post completion to #sl-requests with:
  - Course name and unit count
  - Student assignment confirmation
  - PDF download verification
  - Video verification (all real)
  - ✅ Email notification sent

## Known Pitfalls
- **NEVER fabricate YouTube video IDs.** Always verify via oEmbed before using.
- **Cloudflare caches aggressively.** If a PDF path was previously 404/fallback, use a versioned filename (e.g., `-v2.pdf`).
- **Discord CDN URLs expire.** Always use bot token in Authorization header, or re-fetch the message for fresh URLs.
- **Scanned PDFs** need OCR (`tesseract` or image analysis), not `pdftotext`.
- **The `try_files` fallback** in nginx serves `index.html` for missing files — this gets cached by CF as `text/html`.
