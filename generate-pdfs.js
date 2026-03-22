#!/usr/bin/env node
/* ═══════════════════════════════════════════════════
   Generate Study Guide PDFs from HTML templates
   Uses Playwright to render → PDF
   ═══════════════════════════════════════════════════ */
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const GUIDES_DIR = path.join(__dirname, 'guides');

async function generatePDF(htmlFile, outputName) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const htmlPath = path.join(GUIDES_DIR, htmlFile);
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  const pdfPath = path.join(GUIDES_DIR, outputName);
  await page.pdf({
    path: pdfPath,
    format: 'Letter',
    margin: { top: '0.6in', bottom: '0.6in', left: '0.7in', right: '0.7in' },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#999">StudyLab — Study Guide</div>',
    footerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#999">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>'
  });
  await browser.close();
  const size = (fs.statSync(pdfPath).size / 1024).toFixed(0);
  console.log(`✅ ${outputName} (${size} KB)`);
}

(async () => {
  console.log('Generating study guide PDFs...\n');
  await generatePDF('history-guide.html', 'US-History-Study-Guide.pdf');
  await generatePDF('precalc-guide.html', 'Pre-Calculus-Study-Guide.pdf');
  console.log('\nDone!');
})();
