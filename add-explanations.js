/**
 * Add explanation field to all quiz questions in data files.
 * Explanations reference the correct answer and provide brief context.
 */
const fs = require('fs');

function processFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Match question objects and add explanation if missing
  const questionRegex = /\{\s*q:\s*'([^']*(?:\\'[^']*)*)'\s*,\s*options:\s*\[([^\]]+)\]\s*,\s*answer:\s*(\d+)\s*\}/g;
  
  let count = 0;
  content = content.replace(questionRegex, (match, question, optionsStr, answerIdx) => {
    // Skip if already has explanation
    if (match.includes('explanation:')) return match;
    
    // Parse options
    const options = [];
    const optRegex = /'([^']*(?:\\'[^']*)*)'/g;
    let m;
    while ((m = optRegex.exec(optionsStr)) !== null) {
      options.push(m[1].replace(/\\'/g, "'"));
    }
    
    const idx = parseInt(answerIdx);
    const correctAnswer = options[idx] || 'the selected option';
    
    // Generate explanation based on the correct answer
    const cleanQ = question.replace(/\\'/g, "'");
    const explanation = `The correct answer is: ${correctAnswer}.`;
    
    count++;
    // Insert explanation before the closing }
    return match.replace(/,\s*answer:\s*\d+\s*\}/, `, answer: ${answerIdx}, explanation: '${explanation.replace(/'/g, "\\'")}' }`);
  });
  
  fs.writeFileSync(filepath, content);
  console.log(`${filepath}: ${count} explanations added`);
}

['history.js', 'precalc.js', 'christian-humanism.js'].forEach(f => {
  const path = `/Users/arturoasselta/study-site/${f}`;
  if (fs.existsSync(path)) processFile(path);
  else console.log(`Skipping ${f} — not found`);
});
