const http = require("http");
const greeter = require("./view.js")
const hostname = "localhost";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end(greeter());
})

server.listen(process.env.PORT || 5000, hostname);

module.exports = server;