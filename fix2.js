const fs = require('fs');

let c = fs.readFileSync('services-mockups.html', 'utf8');

// 1. Change grid-cols-4 to grid-cols-3 in the methodology section
c = c.replace('<div class="grid grid-cols-1 md:grid-cols-4 gap-6">', '<div class="grid grid-cols-1 md:grid-cols-3 gap-6">');

// 2. Remove Structure Block exactly
const structRegex = /<div class="card-gradient-hover text-black p-8 rounded-xl shadow-lg relative hover:-translate-y-2 transition-transform">\s*<div class="absolute -top-6 left-1\/2 transform -translate-x-1\/2 w-12 h-12 rounded-full bg-fpa-purple text-white font-bold flex items-center justify-center text-xl border-4 border-white">2<\/div>\s*<h3 class="font-bold text-xl mb-4 mt-4 text-fpa-purple">Structure<\/h3>\s*<p class="text-sm font-normal text-black leading-relaxed">Clean up the chart of accounts, establish KPIs, and implement modern reporting cadences.<\/p>\s*<\/div>/;

c = c.replace(structRegex, '');

fs.writeFileSync('services-mockups.html', c);
console.log("ALL DONE!");
