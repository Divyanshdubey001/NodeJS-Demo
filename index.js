const http = require("http");
const fs = require("fs");
const port = 3000;
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
