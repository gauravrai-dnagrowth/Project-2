const fs = require('fs');
let html = fs.readFileSync('services-mockups.html', 'utf8');

// The three a tags start at line 208, 215, 222
// We will just do a hard replace of the specific blocks

// Financial Leadership should be page3
html = html.replace(/<a href="#" onclick="switchPage\('page4'\)"([\s\S]{1,300}Financial Leadership)/, '<a href="#" onclick="switchPage(\'page3\')"$1');
html = html.replace(/<a href="#" onclick="switchPage\('page2'\)"([\s\S]{1,300}Financial Leadership)/, '<a href="#" onclick="switchPage(\'page3\')"$1');

// Business Growth should be page4
html = html.replace(/<a href="#" onclick="switchPage\('page3'\)"([\s\S]{1,300}Business Growth)/, '<a href="#" onclick="switchPage(\'page4\')"$1');

fs.writeFileSync('services-mockups.html', html);
console.log('Fixed button mappings cleanly!');
