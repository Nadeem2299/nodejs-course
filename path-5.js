const path = require('path');
const fileName = __filename;
console.log(fileName)

const baseName = path.basename(fileName);
console.log(baseName); // file with extention

const extn = path.extname(fileName);
console.log(extn) // prints only the extention with dot

