const fs = require('fs');

function processFile(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Match double-quoted question objects without explanation
  const regex = /\{\s*q:\s*"([^"]*(?:\\"[^"]*)*)"\s*,\s*options:\s*\[([^\]]+)\]\s*,\s*answer:\s*(\d+)\s*\}/g;
  
  let count = 0;
  content = content.replace(regex, (match, question, optionsStr, answerIdx) => {
    if (match.includes('explanation:')) return match;
    
    const options = [];
    const optRegex = /'([^']*(?:\\'[^']*)*)'/g;
    let m;
    while ((m = optRegex.exec(optionsStr)) !== null) {
      options.push(m[1].replace(/\\'/g, "'"));
    }
    
    const idx = parseInt(answerIdx);
    const correctAnswer = options[idx] || 'the selected option';
    const explanation = `The correct answer is: ${correctAnswer.replace(/"/g, '\\"')}.`;
    
    count++;
    return match.replace(/,\s*answer:\s*\d+\s*\}/, `, answer: ${answerIdx}, explanation: "${explanation}" }`);
  });
  
  fs.writeFileSync(filepath, content);
  console.log(`${filepath}: ${count} additional explanations added`);
}

processFile('/Users/arturoasselta/study-site/history.js');
