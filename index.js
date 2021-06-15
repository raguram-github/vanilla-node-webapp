const http = require("http");
const url = require("url");
const _ = require("lodash");
const fs = require('fs')

let server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    let found = _.concat([5],[10])
    console.log("found : ",found, reqUrl.pathname);
    let indexHtml = fs.readFileSync('./index2.html', 'utf8')
    res.end(indexHtml);
})

server.listen(8080, '0.0.0.0',  () => {
    console.log(`Server running..`);
})