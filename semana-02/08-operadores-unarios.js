/*
Operadores Unários
*/

// operador +
// operaodr -

// Soma
console.log(3 + 3);

// Se o operador vir antes, ele tenta converter o mesmo em número.
console.log(+'3');
// entrada 3 string
// Saída 3 número

// Se o operador vir antes de uma string ele converte em NaN.
// Obs. NaN não é um número, porém é avalidado como tipo número.
console.log(+'teste');

// Se usado entre 2 strings ele concatena o valor.

// concatena
console.log('ca' + 'io');
// concatena
console.log('3' + 3);
// concatena
console.log(3 + '3');

// Operador unário (-) tenta converter o valor em número ou inverte o valor do mesmo
var x = 3;
console.log(x);
// 3
console.log(-x);
// -3 -> converte em negativo
console.log(-'3');
// converte a string em número e em negativo.

// Operador unário decremento (--)
var y = 4;
console.log(y--);
// saída 4
console.log(y);
// saída 3

// Operador unário pós incremento (++) seta o valor após.
var z = 5;
console.log(z++);
// saída 5
console.log(z);
// saída 6

// Operador unário pré incremento (++) seta o valor antes.
var k = 6;
console.log(++k);
// saída 7



