const express = require("express");
const server = express();
const path = require("path");
const port = 8081;

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

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