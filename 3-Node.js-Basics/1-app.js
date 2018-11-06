const http = require('http');
const routes = require('./routes');



const server = http.createServer(routes.handler);

server.listen(3000, () => {
	console.log('port listening now!');
});


console.log(routes.someText);













