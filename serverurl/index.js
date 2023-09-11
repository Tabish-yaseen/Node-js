const http = require('http')
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === "/home") {
        res.end("Welcome home");
    }
    else if (req.url === "/about") {
        res.end("Welcome to About Us page");
    }
    else if (req.url === "/node") { // Use === for comparison
        res.end("Welcome to my Node Js project");
    }
    else {
        res.statusCode = 404;
        res.end("Not Found");
    }
})

server.listen(8000, () => {
    console.log("Server has been started");
})
