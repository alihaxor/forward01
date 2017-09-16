const http = require('http');

// event emmiters
// stream
// clusters
// If you're not using stream than you're not doing it right.
const server = http.createServer();
server.on('request', (req, res) => {
    res.write("Hello Node");

    setTimeout(() => {
        res.write("Still on. ....");
        res.end();
    }, 3000);
});
server.listen(8080);
