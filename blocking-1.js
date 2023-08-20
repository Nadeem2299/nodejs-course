// blocking means sync
// read file synchronously
// so it is blocking I/O

// importing file system module
const fs = require('fs');  // require means import

const data = fs.readFileSync('sample.txt'); // synchronously reading the file

console.log(data.toString());

// will be printed at last as program runs line by line -- only after file read completed
console.log('2. Program Ended')