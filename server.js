// importação dos modulos http e express 
const http = require('http');
const express = require('express');

const app = express();
const port = 3000;
app.set('port',port)

const server = http.createServer(app);
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({ 
       Title: "Api Node, Aula 1 Laboratório",
       version:"0.0.1"
    });
}); 
app.use('/', route)
server.listen(port);
console.log('A API está rodando na porta', + port)

