const fs = require('fs');

const requestHandler = (req, res) => {
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

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
    
            fs.writeFile('message.txt', message, (error) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
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
}


module.exports = {
    handler: requestHandler,
    someText: 'Hello from node'
};



// module.exports = requestHandler;
// module.exports.handler = requestHandler;
// exports.handler = requestHandler;