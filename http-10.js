// let's try powering up a server thru NodeJS

const http = require("http");
http
  .createServer((req, res) => {
    console.log("req received");
    // console.log(req); // we can find req obj
    console.log(req.url);
    console.log(req.method);
    // let's process the response
    switch (req.url) {
      case "/":
        res.end("<h1>welcome to my homepage</h1>"); // we can have only 1 response
        break;
      case "/about":
        res.end("<h1>welcome to my about page</h1>"); // we can have only 1 response
        break;
      case "/contact":
        res.end("<h1>welcome to my contact page</h1>"); // we can have only 1 response
        break;
      default:
        res.end("<h1>404 page Not found</h1>");
        break;
    }
  })
  .listen(3000, () => {
    console.log("server is running on prot number 3000. Open localhost 3000");
  });
