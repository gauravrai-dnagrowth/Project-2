const fs = require('fs');
let html = fs.readFileSync('services-mockups.html', 'utf8');

const regexPage1 = /(<a href="#" onclick="switchPage\(')page\d('\)" class="group\/item flex items-center p-4 -m-4 rounded-xl[^>]+>[\s\S]{1,150}Fractional CFO)/g;
html = html.replace(regexPage1, '$1page1$2');

const regexPage3 = /(<a href="#" onclick="switchPage\(')page\d('\)" class="group\/item flex items-center p-4 -m-4 rounded-xl[^>]+>[\s\S]{1,150}Financial Leadership)/g;
html = html.replace(regexPage3, '$1page3$2');

const regexPage4 = /(<a href="#" onclick="switchPage\(')page\d('\)" class="group\/item flex items-center p-4 -m-4 rounded-xl[^>]+>[\s\S]{1,150}Business Growth)/g;
html = html.replace(regexPage4, '$1page4$2');

fs.writeFileSync('services-mockups.html', html);
console.log('Fixed button mappings perfectly!');
