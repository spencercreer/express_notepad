// Require HTTP module and fs
const http = require('http');
const fs = require('fs');

// Setup server
const PORT = 8080;
const server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log('Server listening on: http://localhost:' + PORT);
})

// Handle requests with url path switch statement
function handleRequest(req, res) {
    let path = req.url;

    switch (path) {
        case '/':
            return displayRoot(res);
        
        case '/notes':
            return displayNotes(res);
        
        default:
            return display404(path, res);
    }

};

function displayRoot(res) {
  fs.readFile(__dirname + '/public/index.html', (err, data) => {
    if(err) throw err;
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client index.html
    res.end(data);
  });
};

function displayNotes(res) {
  fs.readFile(__dirname + '/public/notes.html', (err, data) => {
    if(err) throw err;
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client notes.html
    res.end(data);
  });
};

// Any path that is not specifically defined, 404 error
const display404 = (url, res) => {
    const errHTML = `
    <html>
      <body>
        <h1>404 Not Found </h1>
        <p>The page you were looking for: ${url} can not be found</p>
      </body>
    </html>`;
  
    res.writeHead(404, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client errHTML
    res.end(errHTML);
  };
