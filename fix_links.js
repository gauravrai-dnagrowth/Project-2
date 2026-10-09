const fs = require('fs');
let html = fs.readFileSync('services-mockups.html', 'utf8');

// The 2nd button should point to page3 (FP&A)
html = html.replace(/<a href="#" onclick="switchPage\('page2'\)" class="group\/item flex items-center">([\s\S]*?<h4[^>]*>Financial Leadership)/g, '<a href="#" onclick="switchPage(\'page3\')" class="group/item flex items-center">$1');

// The 3rd button should point to page4 (Business Growth)
html = html.replace(/<a href="#" onclick="switchPage\('page3'\)" class="group\/item flex items-center">([\s\S]*?<h4[^>]*>Business Growth)/g, '<a href="#" onclick="switchPage(\'page4\')" class="group/item flex items-center">$1');

fs.writeFileSync('services-mockups.html', html);
console.log('Fixed button mappings!');
