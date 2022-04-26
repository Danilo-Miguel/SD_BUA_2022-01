// /* O  JavaScript é case-sensitive ou seja, cuidado com os nomes das variaveis, 
//  a variavel deve se chamada assim como foi declarada*/

// /* Comentários em javascript. O que é comentário? É uma informação ou descrição
// que pode ser adicionado a um bloco de código. O compilador não executa o comentário
// ele o ignora. É possível criar comentários de uma ou multiplas linhas */


// // Esse é um comentário de uma linha, utliza-se duas barras no ínicio.
// /* Esse é um comentário de multiplas linhas, o comentário de multiplas linhas é iniciado
// por barras asterisco e finalizado por asterisco barra */

//                     //Tipo de dados básicos do JavaScript
// // Boolean, recebe os valores true ou false
// var validade = true 
// var autorizacao = false
// console.log("O tipo da variavel validade é " + typeof validade)
// console.log("O tipo da variavel autorizacao é", typeof autorizacao)


// // Undefined, Variável declarada mas não inicializada.
// var indefinida 
// console.log("O tipo da variavel indefinida é " + typeof indefinida)

// // Null, Variável declarada com valor nullo
// var nulo = null;
// console.log("O tipo da variavel validade é nulo é ", + typeof nulo)
// var valor  =  null == undefined 
// console.log("Qual é o valor de  variável valor?", valor)

// //Number, variáveis númericas
// // Números inteiros
// var numero_inteiro = 200;

// //Ponto Flutuante
// var ponto_flutuante = 2.5;

// //String, dados textuais
// var dado_textual = "Essa é uma String"


// // let numero_inteiro  = 200
// // console.log("O tipo da variavel numero_inteiro é" + typeof numero_inteiro)

// // let numero_fracionado  = 5.7
// // console.log("O tipo da variavel numero_fracionado é" + typeof numero_fracionado)




//                    // Tipos de declarações de variáveis 
//  //"var" Permite declarar uma variável que pode ser inicializada ou não
//  var x  = 20;
//  var a;
//  y = 15;
//  console.log("o tipo da variavel y", typeof y)
//  console.log('O valor de x é ', x);
//  console.log('O valor de y é ' + y + typeof y);   
//  console.log('O valor de a é ' + a);  Erro, valor não definido
//  console.log("O valor de b é " + b);  Erro, variável não definida



//  /*"let" Permite declarar uma variável local, introduzida pela ECMAScript 6
//  (Versão de padronização do JavaScript criada em 2015)*/


// //  console.log('O valor de z é ' + z);

// //  // Escopo de variável
// if (true){
//     // console.log('O valor de z é ' + z);
//     let z = 13

//     console.log('O valor de x é ' + x);
//     }
    

 // "const" Permite declarar uma variável de valor constante, imutável

//  const nome =  "Danilo"

//  console.log('Meu nome é ' + nome);


//  Escopo da variável

//  var primeiro_nome = "Danilo"
//  let segundo_nome = "Souza"
//  const terceiro_nome = "Miguel" 

// if (true){
// console.log("Meu nome é " + primeiro_nome + " " +   segundo_nome + " " + terceiro_nome)     
// console.log('Meu primeiro nome é ' + primeiro_nome);
// console.log('Meu segundo nome é ' + segundo_nome);
// console.log('Meu terceiro nome é ' + terceiro_nome)
// }

// O escopo do var é global 
//  if (true) {
//     var primeiro_nome = "Danilo"
// }
// console.log('Meu primeiro nome é ' + primeiro_nome)

// o escopo do let é local
//  if (true) {
//     let segundo_nome = "Souza"
// }
// console.log('Meu segundo nome é ' + segundo_nome);

// o escopo do const é local
if (true) {
const terceiro_nome = "Miguel" 
}
console.log('Meu terceiro nome é' + terceiro_nome)

let terceiro_nome
