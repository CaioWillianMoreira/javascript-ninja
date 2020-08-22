/*
  Um giro pela linguagem
  variáveis
*/

// Declarar variável
var x;

// atribuição de variável
x = 0;

// modificar o valor
x = 1;

// Numeros decimais
x = 1.0;

/*
  Tipos de dados
  - Number
  - String
  - boolean
  - null
  - undefined
  - object
  - array
*/

// String
x = "Hello World";

// Number
x = 10;

// boolean
x = true;
x = false;
x = null;
x = undefined;

// objeto
x = {};

var pessoa = {};
pessoa = {
  altura: 1.87,
  peso: 90
};

console.log(pessoa.altura + pessoa.peso);

// sobrescrever o valor de um objeto
pessoa.altura = 1.90;
console.log(pessoa.altura);

pessoa.peso = 80;

console.log(pessoa);

// array
var numeros = [];

// declaração
numeros = [1, 2, 3, 4, 5, 6];

console.log(numeros);

// Acessar indice
console.log(numeros[0]);

// Não existem arrays em javascript tudo é objeto
// exemplo

console.log(pessoa['altura']);
console.log(pessoa.altura);

