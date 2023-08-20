const fs = require("fs");

const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// writing a file asyncronously

fs.writeFile("example.txt", content, (err) => {
  if (!err) {
    console.log("file written successfully");
  } else {
    console.log(err);
  }
});

console.log("===Program ended===");
