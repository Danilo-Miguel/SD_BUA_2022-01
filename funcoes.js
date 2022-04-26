/*Funções: Bloco ou conjunto de instruções que realiza  uma ação*/

//Criação de funções de forma literal

// function primeira_funçao(){ 
//     console.log("Primeira função")
// }

// // Função com parâmetro
// function segunda_funcao(numero){
//  console.log("Segunda função " + numero)
// }

// // ss()
// segunda_funcao(7)

// // função com retorno
// function terceira_funcao(){
//     var mensagem = "Olá mundo";
//     return mensagem; 
// }
// console.log(terceira_funcao())

// // função com parêmtros e retorno

// function quarta_funcao(nome, idade){
// return "Meu nome é " + nome  + " e minha idade " + idade;

// }
// console.log(quarta_funcao());

// // let soma = (x, y) => {
// //     let z = 2 
// //     return x + y + z;
// // }

// // console.log(myFunction())

// let segunda_smultiplicacao = x => 
//      x * 2

// let imprime = () => {
//     console.log(segunda_smultiplicacao)
// }

// imprime(2);

// funções Assincronas
// Iniciam com async
 /* o retorno das funções asincronas no java script é baseado nas promisses, 
 se a função for executada terá retorno e se não for também*/

//  function primeiraFuncao() {
//     console.log("Essa primeira função vai esperar um pouco")
// }
// async function segundaFuncao() {
//     console.log("Essa segunda função vai executar primeiro")
//     await primeiraFuncao()
  
//   console.log("Esse print aparecerá depois da exeução das duas funções!")
// }
// segundaFuncao()


function respostaApos5Segundos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Execução realizada');
      }, 5000);
    });
  }
  
  async function resposta() {
    console.log('inicio');
    var resultadoAwait = await respostaApos5Segundos();
    var resultadoPromisse = respostaApos5Segundos();
    console.log('resultado await', resultadoAwait);
    console.log('resultado promisse then', resultadoPromisse.then(function(resultado){
      console.log('resultado promisse', resultado);
    }));
    console.log('fim');
  }
  
  resposta()