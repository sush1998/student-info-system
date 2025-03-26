const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        let filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (req.url === '/students') { // ✅ FIXED: Correct route
        let students = [
            { name: "John Doe", major: "Information Science", admissionYear: 2018 },
            { name: "Jane Smith", major: "Chemical Engineering", admissionYear: 2019 },
            { name: "Emma Wilson", major: "Mathematics", admissionYear: 2020 }
        ];

        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' // Fix CORS issue
        });

        res.end(JSON.stringify(students));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT} using Docker`);
});
