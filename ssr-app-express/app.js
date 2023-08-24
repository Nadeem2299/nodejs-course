const express = require("express"); // custom import of express
const app = express(); // creates an express aplication.
const port = 3000; // port no.

// handling URLs - localhost:3000/ and http method: GET
app.get("/", (req, res) => {
  res.status(200).send(`<html>
  <head>
  <title>Home Page</title>
  </head>
  <body>
  <header>
  <nav>
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Contact</a></li>
  </nav>
  </header>
  <h1>Welcome to my Homepage!!</h1>
  <footer>
  <p>Copyright</p>
  </footer>
  </body>
  </html>`);
});

app.get("/about", (req, res) => {
  res.status(200).send(`<html>
  <head>
  <title>About Page</title>
  </head>
  <body>
  <header>
  <nav>
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/contact">Contact</a></li>
  </nav>
  </header>
  <h1>Welcome to my About Page!!</h1>
  <footer>
  <p>Copyright</p>
  </footer>
  </body>
  </html>`);
});

app.get("/contact", (req, res) => {
  res.status(200).send(`<html>
    <head>
    <title>Contact Page</title>
    </head>
    <body>
    <header>
    <nav>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
    </nav>
    </header>
    <h1>Welcome to my Contact Page!!</h1>
    <footer>
    <p>Copyright</p>
    </footer>
    </body>
    </html>`);
  });

  // TODO: handle 404 and send valid html response with page not found text 
  // TODO: send html files as response

app.listen(port, () => {
  // setting up the app to listen on port no. 3000
  console.log(`Example app listening on port ${port}`);
});
