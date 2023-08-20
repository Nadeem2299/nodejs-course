// designed to handle raw binary data

const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const buffer = new Buffer.from(dummyText, 'utf8'); // getting buffer out of a string

console.log(buffer) // prints the content in buffer content
console.log(buffer.toString()); // prints the content in string content
console.log(buffer.toJSON()); // prints the content in Json content

// the above shows the type as buffer and also data in an array of Unicode characters
// inside the array  you can find 76 as 1st item representing L.

console.log(buffer[0]);

console.log('====')
buffer.write('Node js is awesome!'); // will replace 1st 18 ccharacters of dummyText
console.log(buffer.toString());