const http = require("http");
const fs = require('fs'); 
http
  .createServer((req, res) => {
    console.log("req received");
    // console.log(req); // we can find req obj
    console.log(req.url);
    console.log(req.method);

    switch (req.url) {
      case "/":
        fs.readFile("./index.html", function (error, htmlContent) {
          if (!error) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(htmlContent);
          } else {
            res.end("some error occured:" + error);
          }
          res.end();
        });
        break;
      
      case "/about":
        fs.readFile("./about.html", function (error, htmlContent) {
          if (!error) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(htmlContent);
          } else {
            res.end("some error occured:" + error);
          }
          res.end();
        });
        break;
      
      case "/contact":
        fs.readFile("./contact.html", function (error, htmlContent) {
          if (!error) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(htmlContent);
          } else {
            res.end("some error occured:" + error);
          }
          res.end();
        });
        break;
      
      default:
        res.write(`<html>
        <head>
        <title>404 Page</title>
        </head>
        <body>
        <h1>Page not Found</h1>
        <body>
        </html>`);
        res.end();
        break;
    }
  })
  .listen(3000, () => {
    console.log("server is running on port number 3000. Open localhost 3000");
  });
