const express = require("express");
const server = express();
const path = require("path");
const port = 8081;

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
// server.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

server.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

server.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

//css file
server.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "stylesheet" , "styles.css"));
});

// Start the server
server.listen(port, function (error) {
  if (error) {
    console.error("Something went wrong", error);
  } else {
    console.log("Server running as port " + port);
  }
});

// server.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "about.html"));
// });

// server.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "contact.html"));
// });

// //css file
// server.get("/css", (req, res) => {
//   res.sendFile(path.join(__dirname, "stylesheet" , "styles.css"));
// });

// // Start the server
// server.listen(port, function (error) {
//   if (error) {
//     console.error("Something went wrong", error);
//   } else {
//     console.log("Server running as port " + port);
//   }
// });

     console.log("Server running as port dgfdgd ");


const http = require("http");
const fs = require("fs");
// const port = 3000;
http
  .createServer((req, res) => {
    console.log(req.url);
    if ((req.url = "/")) {
      fs.readFile("about.html", "utf-8", (err, data) => {
        if (err) {
          console.error(err);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
          console.log(data);
        }
      });
    } else if ((req.url = "/index")) {
      fs.readFile("index.html", "utf-8", (err, data) => {
        console.log(req.url);
        if (err) {
          console.error(err);
          console.log(data);
        }
      });
    } else if (req.url == "/contact") {
      fs.readFile("contact.html", "utf-8", (err, data) => {
        console.log(req.url);
        if (err) {
          console.error(err);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
          console.log(data);
        }
      });
    } else if (req.url == "/css") {
      server.get("/css", (req, res) => {
        res.sendFile(path.join(__dirname, "stylesheet", "styles.css"));
        console.log(req.url);
        if (err) {
          console.error(err);
        } else {
          res.writeHead(200, { "Content-Type": "styles.css" });
          res.write(data);
          res.end();
          console.log(data);
        }
      });
    } else if (req.url == "/img") {
      fs.readFile("img1.jpeg", (err, data) => {
        console.log(req.url);
        if (err) {
          console.error(err);
        } else {
          res.writeHead(200, { "Content-Type": "img.jpeg" });
          res.write(data);
          res.end();
          console.log(data);
        }
      });
    }
  })
  .listen(port, function (error) {
    if (error) {
      console.log("Something went wrong", error);
    } else {
      console.log("Server running as port " + port);
    }
  });
