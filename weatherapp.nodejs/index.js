const http = require("http");
const fs = required("fs");

const homeFile = fs.readFilesync("home.html", "utf-8");

const server = http.createServer((req, res)) => {

};