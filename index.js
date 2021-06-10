const http = require("http");
const url = require("url");
const _ = require("lodash");

let server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let found = _.concat([5],[10])
    console.log("found : ",found, reqUrl.pathname);
    res.end("Hello world for... "+reqUrl.pathname +", "+ found );
})

server.listen(8080, '0.0.0.0',  () => {
    console.log(`Server running...`);
})