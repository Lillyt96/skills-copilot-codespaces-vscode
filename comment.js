// Create web server
// Create a server that returns the string "Hello, World!" when it receives a request.

// Import the HTTP module
var http = require('http');

// Configure the HTTP server to respond with "Hello, World!" to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello, World!\n");
});

// Listen on port 8000, IP defaults to