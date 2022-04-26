/* Array. São colexões indexadas o que representa que um array 
é ordenada através de valores indexados
*/

// Criação de arrays
var primeiro_array = new Array();
var segundo_array = Array('Olá', 1, 5, true)
var terceiro_array = []

// verificando o tamanho do array
console.log(segundo_array.length)
// Populando uma array
primeiro_array[0] = "Danilo"; // Depois de criado
//  var segundo_array = Array('Olá', 1, 5); // Quando é criado
console.log(primeiro_array[0])

//Imprimindo elementos de um array
console.log("Qual o valor deste indice do array?" + segundo_array[1])

// Iterando nos elementos do array
for (var i = 0; i < segundo_array.length; i++) {
    console.log(segundo_array[i]);
  }

///
// Unindo dois arrays
//  var quarto_array = new Array(10,20,30);
//  var array_uniao = quarto_array.concat(segundo_array);
//  console.log(array_uniao);

// Inserindo um elemento ao fim do array
// segundo_array.push('9')
// console.log(segundo_array)

// Remove o ultimo elemento de um array
// segundo_array.pop()
// console.log(segundo_array)
