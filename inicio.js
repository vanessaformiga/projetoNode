const http = require('http');



const hostname = '127.0.0.1';

const port = 3000;
const stats = require("./modulos.js");


http.createServer((req, res) => {

    let url = req.url;
    if (url === "/stats") {
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.write("<h1>Executando</h1>");
        res.end()
    }
}).listen(port, () =>
    console.log(`Server is running in http://localhost:${port}`)
);