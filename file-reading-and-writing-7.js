// read a file
// once the file is read successfuly -- emit custom event 'FILE_READ_SUCCESS' with the content of 'sample1.txt'

// upon FILE_READ_SUCCESS write a file async'ly - filename: sample1.txt
// emit custom 'FILE_WRITEING_SUCCESS'

// upon FILE_SRITING_SUCCESS emitted, read a file 'sample1.txt'
// and display the content of sample1.txt

// read file asynchronously
// so it is non-blocking

const fs = require("fs");
const events = require("events");

const eventEmitter = new events.EventEmitter();

fs.readFile("sample.txt", (err, data) => {
  // error first callback
  if (!err) {
    eventEmitter.emit("file_reading_success", data);
  } else {
    console.log(err);
  }
});

eventEmitter.on("file_reading_success", (data) => {
  fs.writeFile("sample1.txt", data, (err) => {
    if (!err) {
      console.log("file written successfully");
      eventEmitter.emit("file_writing_success");
    } else {
      console.log(err);
    }
  });
});

eventEmitter.on("file_writing_success", () => {
  fs.readFile("sample1.txt", (err, data) => {
    // error first callback
    if (!err) {
      console.log(data.toString());
    } else {
      console.log(err);
    }
  });
});
