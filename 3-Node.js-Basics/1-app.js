const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write(`
			<html>
				<head>
					<title>Enter Message</title>
				</head>
				<body>
					<form action="/message" method="POST">
						<input type="text" name="message">
						<button type="submit">
							Send Message Please...
						</button>
					</form>	
				</body>
			</html>
		`)
		return res.end();
	}

	if (url === '/message' && method === 'POST') {
		const body = [];

		req.on('data', (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});

		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1];
			console.log(message);
			fs.writeFileSync('message.txt', message);
		});
		
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	};
	
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















