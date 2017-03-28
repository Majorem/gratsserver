var http = require("http");

http.createServer(function (request, response){

	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('grats!\n');

}).listen(1337);

console.log('leet-server running on :1337');
