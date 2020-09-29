/*
  1) Estrutura léxica

  É um conjunto de regras que vai definir quais são ou qual modo será utilizado para
  escrever em uma determinada linguagem.

  - Pode descrever qual o nível mais baixo da linguagem
  - Pode especificar detalhes de como nomear variáveis ou funções, tipos de caracteres
  - Como utilizar ou criar comentários
  - Como separar uma instrução de outra
  - Define a base ou estrutura de como utilizar a linguagem
*/

/*
  Case sensitive
  - JavaScript pode diferenciar maiúsculas de letras minúsculas
*/

// a variável animal é diferente de Animal

var animal = 'cachorro';
var Animal = 'macaco';

console.log(animal !== Animal);

/*
  2) Comentários
*/

// - De linha //
// - De bloco /**/

// A variável animal é igula a cachorro
var ANIMAL = 'cachorro';

/*
    Uma linha
... outra linha
... outra linha
... outra linha
*/

/*
  3) Literais

  - São valores que aparecem diretamente no programa
  - São valores que não mudam
  - São valores que fazem parte do core do javaScript
  - São valores existentes dentro da linguagem javaScript
*/

12         // literal
'cachorro' // literal
true       // literal
false      // literal
null       // literal
{a: 1}     // literal
[1, 2]     // literal

/*
  4) Identificadores

  - Podem ser considerados como nomes
  - São utilizados para nomear (variáveis ou funções)
  - Podem ser iniciados com ( underscore: _ ) ou (Cifrão: $)
  - Podem iniciar com letras de (a / z) minúsculo
  - Podem iniciar com letras de (A / Z) maiúsculo
  - Podem conter dígitos de 0 a 9
  - Podem conter qualquer caractere unicode
*/

// funcionam com caracteres unicode, porém, não deve ser utilizados
var π = 3.14;
console.log(π);

/*
  4) Palavras reservadas

  - São palavras de identificadores da própria linguagem.
  - Não podem ser utilizados para nomear variáveis
  - Não podem ser utilizados para nomear funções

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar

*/
