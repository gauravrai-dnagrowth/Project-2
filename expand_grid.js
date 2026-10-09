const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldHTML = `<div class="flex justify-center">
                <div id="pillars-grid" style="display:grid;grid-template-columns:repeat(3,220px);gap:20px;justify-content:center;">`;

const newHTML = `<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div id="pillars-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">`;

html = html.replace(oldHTML, newHTML);

fs.writeFileSync('index.html', html);
console.log('Grid updated');
