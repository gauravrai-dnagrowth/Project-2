const fs = require('fs');
let html = fs.readFileSync('services-mockups.html', 'utf8');

// The 2nd button should point to page3 (FP&A)
html = html.replace(/onclick="switchPage\('page2'\)"([\s\S]*?<h4[^>]*>Financial Leadership)/g, 'onclick="switchPage(\'page3\')"$1');

// The 3rd button should point to page4 (Business Growth)
html = html.replace(/onclick="switchPage\('page3'\)"([\s\S]*?<h4[^>]*>Business Growth)/g, 'onclick="switchPage(\'page4\')"$1');

fs.writeFileSync('services-mockups.html', html);
console.log('Fixed button mappings correctly!');
