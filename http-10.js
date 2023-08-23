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
        res.end(`<html>
        <head>
        <title>Homepage</title>
        </head>
        <body>
        <h1>welcome to homepage</h1>
        <body>
        </html>`); // we can have only 1 response
        break;
      case "/about":
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<html>
        <head>
        <title>About page</title>
        </head>
        <body>
        <h1>welcome to About page</h1>
        <body>
        </html>`);
        res.end(); // we can have only 1 response
        break;
      case "/contact":
        res.end(`<html>
        <head>
        <title>Contact page</title>
        </head>
        <body>
        <h1>welcome to Contact page</h1>
        <body>
        </html>`); // we can have only 1 response
        break;
      case "/test":
        // importing file system module
        const fs = require('fs'); 
        const test = fs.readFileSync('index.html');
        res.end(test); // we can have only 1 response
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
    console.log("server is running on prot number 3000. Open localhost 3000");
  });
