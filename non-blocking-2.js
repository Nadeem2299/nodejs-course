// read file asynchronously
// so it is non-blocking

const fs = require("fs");

fs.readFile("sample.txt", (err, data) => { // error first callback
  if (!err) {
    console.log(data.toString());
  } else {
    console.log(err);
  }
});

console.log('1. program ended')