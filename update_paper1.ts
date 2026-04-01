import fs from 'fs';

const content = fs.readFileSync('lib/questions.ts', 'utf8');
const updated = content.replace(/topic: "/g, 'paper: "Paper 1",\n    topic: "');
fs.writeFileSync('lib/questions.ts', updated);
console.log('Updated questions.ts');
