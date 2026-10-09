const fs = require('fs');
let html = fs.readFileSync('services-mockups.html', 'utf8');

const lines = html.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('switchPage(')) {
        if (lines[i+3] && lines[i+3].includes('Financial Leadership')) {
            lines[i] = lines[i].replace(/switchPage\('page\d'\)/, "switchPage('page3')");
        }
        if (lines[i+3] && lines[i+3].includes('Business Growth')) {
            lines[i] = lines[i].replace(/switchPage\('page\d'\)/, "switchPage('page4')");
        }
    }
}

fs.writeFileSync('services-mockups.html', lines.join('\n'));
console.log('Fixed for real.');
