/*
  "Funções" são blocos de código javascript
  nomeados que podem ser invocados com o operador ()
*/

// declaração

function nome() {}

console.log(nome());

var x = 1;

function soma () {
  return x = x + 1;
}

console.log(soma());

/*
  Funções criam escopo
  Toda variável criada dentro de uma função, só existe naquela função.
*/
function qualquer() {
  var fernando = 'fernando';
}
//console.log(fernando); -- erro

// para o valor ser retornado
function qualquer2() {
  var fernando = 'fernando';
  return fernando;
}
console.log(qualquer2());

// É possível retornar valores de funções
var y = 4;

function cinco() {
  return 5;
}

console.log(y + cinco());

// Funções podem receber argumentos ou parãmetros
function somar (x , y) { // parâmetro
  return x + y;
}

console.log(somar(2, 4)); // argumentos
