const fs = require('fs');
let html = fs.readFileSync('services-mockups.html', 'utf8');

const resourcesMenuStr = `<div class="group cursor-pointer h-[100px] flex items-center">
                        <span class="hover:text-fpa-cyan flex items-center transition-colors">RESOURCES <svg class="ml-1.5 h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg></span>
                        <div class="absolute top-[100px] left-0 w-full bg-white shadow-mega border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div class="max-w-[1400px] mx-auto px-8 py-20">
                                <div class="grid grid-cols-3 gap-10">
                                    <a href="#" class="group/item flex items-center p-4 -m-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 hover:shadow-sm hover:border hover:border-gray-100 border border-transparent transition-all duration-300">
                                        <div class="text-[26px] mr-5 flex-shrink-0 flex items-center"><i class="fa-solid fa-circle-question text-fpa-purple"></i></div>
                                        <div>
                                            <h4 class="font-bold text-black text-[14px] mb-1 uppercase tracking-wide group-hover/item:text-fpa-purple transition-colors">FAQ</h4>
                                            <p class="text-[13px] text-black/80 normal-case font-normal leading-snug">Curious About Growth? We're Here To Help.</p>
                                        </div>
                                    </a>
                                    <a href="#" onclick="switchPage('page2')" class="group/item flex items-center p-4 -m-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 hover:shadow-sm hover:border hover:border-gray-100 border border-transparent transition-all duration-300">
                                        <div class="text-[26px] mr-5 flex-shrink-0 flex items-center"><i class="fa-solid fa-photo-film text-fpa-purple"></i></div>
                                        <div>
                                            <h4 class="font-bold text-black text-[14px] mb-1 uppercase tracking-wide group-hover/item:text-fpa-purple transition-colors">RESOURCE CENTER</h4>
                                            <p class="text-[13px] text-black/80 normal-case font-normal leading-snug">Unlock Financial Clarity: Explore Our Free Content Library.</p>
                                        </div>
                                    </a>
                                    <a href="#" class="group/item flex items-center p-4 -m-4 rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-purple-50 hover:shadow-sm hover:border hover:border-gray-100 border border-transparent transition-all duration-300">
                                        <div class="text-[26px] mr-5 flex-shrink-0 flex items-center"><i class="fa-regular fa-calendar-check text-fpa-purple"></i></div>
                                        <div>
                                            <h4 class="font-bold text-black text-[14px] mb-1 uppercase tracking-wide group-hover/item:text-fpa-purple transition-colors">OUR CALENDAR</h4>
                                            <p class="text-[13px] text-black/80 normal-case font-normal leading-snug">Ready To Grow? Schedule Free Consultation Today!</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>`;

// Replace the simple RESOURCES link with the new mega menu
const oldResourcesLink = /<div class="relative group cursor-pointer h-\[100px\] flex items-center">\s*<span class="hover:text-fpa-cyan flex items-center transition-colors">RESOURCES <svg[^>]+><path[^>]+><\/path><\/svg><\/span>\s*<\/div>/;
html = html.replace(oldResourcesLink, resourcesMenuStr);

// Rename page2 heading to "Resource Center", remove subtitle and mb-6
html = html.replace(
    '<h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">Financial Advisory for Key Decisions</h1>', 
    '<h1 class="text-4xl md:text-6xl font-bold tracking-tight">Resource Center</h1>'
);

html = html.replace(
    '<h1 class="text-4xl md:text-6xl font-bold tracking-tight">Financial Advisory for Key Decisions</h1>', 
    '<h1 class="text-4xl md:text-6xl font-bold tracking-tight">Resource Center</h1>'
);

// Remove the page2 subtitle completely
html = html.replace(
    /<p class="text-lg md:text-2xl font-normal mb-10 text-gray-200">Make Confident Decisions With Financial Clarity\.<\/p>/g,
    ''
);

fs.writeFileSync('services-mockups.html', html);
console.log('Resource Center page created and linked!');
