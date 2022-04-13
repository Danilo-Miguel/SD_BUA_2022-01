// O  JavaScript é case-sensitive 
//Comentário de uma linha
/*Comentário de varias linhas
Comentário de varias linhas
Comentário de varias linhas
Comentário de varias linhas
*/ 

// Tipos de declarações de variáveis 
 //"var" Permite declarar uma variável que pode ser inicializada ou não
 var x  = 10
 var a;
 y = 15
 console.log('O valor de x é ' + x);
 console.log('O valor de y é ' + y);
 console.log('O valor de a é ' + a);
//  console.log('O valor de b é ' + b);



 //"let" Permite declarar uma variável local 
 let z = 13
 console.log('O valor de z é ' + z);

 // "const" Permite declarar uma variável de valor constante, imutável

 const nome =  "Danilo"

 console.log('Meu nome é ' + nome);


 // Escopo da variável

 if (true) {
     var primeiro_numero  = 200;
 }
 console.log('o valor do primeiro numero é', primeiro_numero);


//  if (true) {
//     let segundo_numero  = 400;
// }
// console.log('o valor do segundo numero é', segundo_numero);

if (true) {
    const terceiro_numero  = 400;
    terceiro_numero = 300;
    console.log('o valor do terceiro numero é', terceiro_numero);
}
