const fs = require('fs');

let c = fs.readFileSync('services-mockups.html', 'utf8');

// 1. Change all w-1/4 to w-1/3
c = c.replace(/lg:w-1\/4/g, 'lg:w-1/3');

// 2. Remove Structure Box
// Find the exact text 'Structure</h3>'
const structureIndex = c.indexOf('Structure</h3>');
if (structureIndex !== -1) {
    // Find the start of its container
    let startIdx = c.lastIndexOf('<div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">', structureIndex);
    
    // Find the start of the NEXT container (which is Project)
    let endIdx = c.indexOf('<div class="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">', structureIndex);
    
    if (startIdx !== -1 && endIdx !== -1) {
        // Cut out the block between startIdx and endIdx
        c = c.slice(0, startIdx) + c.slice(endIdx);
    }
}

// 3. Update the 4 to 3 in Advise
// First change Project 3 -> 2 if it isn't already (though it seems it was 2)
c = c.replace(/>3<\/div>\s*<h3[^>]*>Project<\/h3>/, '>2</div>\n                        <h3 class="font-bold text-xl mb-4 mt-4 text-fpa-purple">Project</h3>');

// Then change Advise 4 -> 3
c = c.replace(/>4<\/div>\s*<h3[^>]*>Advise<\/h3>/, '>3</div>\n                        <h3 class="font-bold text-xl mb-4 mt-4 text-fpa-purple">Advise</h3>');

fs.writeFileSync('services-mockups.html', c);
console.log("SUCCESS!");
