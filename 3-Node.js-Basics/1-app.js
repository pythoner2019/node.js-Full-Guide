const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	// process.exit();
	
	res.setHeader('Content-Type', 'text/html');
	res.write(`
		<html>
			<head>
				<title>First Page</title>
			</head>
			<body>
				<h1>Hello from server</h1>
				<h3>Nice love story</h3>
			</body>
		</html>
	`);
	res.end();
})

server.listen(3000, () => {
	console.log('port listening now!');
});















