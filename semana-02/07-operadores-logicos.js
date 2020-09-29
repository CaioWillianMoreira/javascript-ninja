/*
  Operadores lógicos
*/

// Operador && / AND

var x = 3;
var y = 7;

console.log(x == 3);
// true
console.log(y == 5);
// false
console.log(y === '7'); // operador estrito
// false
console.log(y === 7);
// true
console.log(x === 3 && y === 7);
// true
console.log(x === 3 && y === 4);
// false

// Operador lógico || OR

console.log(x === 3 || y === 3);

// Operador lógico ! (NOT)

console.log(! x === 3);

// Operador diferente !==

// verificar valor
console.log(x != 3);
// verificar valor e tipo
console.log(x !== '3'); // operador estrito


