// importação dos modulos http e express 
const app = require('../src/app')
const http = require('http');

const port = 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
console.log('A API está rodando na porta', + port)

