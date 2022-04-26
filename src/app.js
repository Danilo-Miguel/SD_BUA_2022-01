const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


id = 2; 

let alunos = [
    {
      id: 1,
      nome: "Raphael",
      endereco: "rua sem nome e sem numero",
      cidade: "são paulo",
    },
    {
      id: 2,
      nome: "jose",
      endereco: "rua da silva",
      cidade: "Rio de janeiro",
    },
  ];

/*  const inicio = router.get('/', (req, res, next) => {
    res.status(200).send({ 
       Title: "Api Node, Aula 1 Laboratório",
       version:"0.0.1"
    });
}); 
*/
 const route = router.get('/', (req, res, next) => {
     res.status(200).json(alunos);
 }); 

//const create = router.post('/', (req, res, next) => {  
//    res.status(201).send(req.body); 
//});


const create = router.post('/', (req, res, next) => {
   const aluno = {
     id: (id += 1),
         nome: req.body.nome,
         endereco: req.body.endereco,
         cidade: req.body.cidade,
      };
alunos.push(aluno);
       res.status(201).json(aluno);
    
    });

// const put = router.put('/:id', (req, res, next) => {  
//     const id = req.params.id;
//     res.status(201).send({
//         id:id,
//         item: req.body} ); 
// });

const put = router.put('/', (req, res, next) => {  
    alunos.forEach((aluno) => {
      if (aluno.id === req.body.id) {
        (aluno.nome = req.body.nome),
          (aluno.endereco = req.body.endereco),
          (aluno.cidade = req.body.cidade);
      }
    });
    res.status(200).end();
  });

  const del  = router.delete('/', (req, res, next) => { 
    let indice = alunos.findIndex((obj) => obj.id == req.body.id);
    if (indice >= 0) {
      alunos.splice(indice, 1);
      res.status(200).json(alunos);
    } else {
      res.status(204).end();
    }
  });


app.use('/alunos', route)
app.use('/alunos', create)
app.use('/alunos', put)
app.use('/alunos', del)



module.exports = app;
