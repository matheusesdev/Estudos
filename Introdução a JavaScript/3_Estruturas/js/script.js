//1. Variáveis
let nome = "Matheus";

console.log(nome);

nome = "Matheus Santos";

console.log(nome);

const idade = 26; //Const é uma constante que não pode ter seu valor alterado posteriormente.

console.log(idade);

// idade = 27; //Esse valor não será alterado pois já foi informado na constante com o valor 26.

console.log(typeof nome, typeof idade);
//Typeof em JavaScript é usado para retornar uma string que indica o tipo de um operando. O operando pode ser qualquer objeto, função ou variável. Este operador é muito útil quando queremos saber o tipo de variável ou valor, especialmente em casos onde o tipo de dados pode ser desconhecido ou pode mudar.a

//2. Mais sobre variáveis.

//let 2teste = "inválido";
//let @teste = "inválido";

let a = 10,
  b = 20,
  c = 30;

console.log(a, b, c);

const nomecompleto = "Matheus Santos";
const nomeCompleto = "Maria";
console.log(nomecompleto);
console.log(nomeCompleto);

//JavaScript é case sensitive, nos dois casos a const possuem o mesmo nome mas são diferentes. Imprimindo no console dois nomes diferentes.

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

//Simbolos permitidos para a criação de uma variável _ (underline) e $ (cifrão)

//3. Nomes Reservadas
//Algumas palavras tem o nome reservado, não podemos criar variáveis com ela.
// Exemplo: break, case, catch, class, const, continue, debugger, default, delete, do, else, export, extends, finally, for, function, if, import,in, instanceof, new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield.
// Além disso, existem algumas palavras que são reservadas para o uso futuro. Elas podem se tornar palavras-chave em futuras versões do ECMAScript: enum, implements, interface, let, package, private, protected, public, static, await.
// É possível unir ela mais outra palavra, para criar uma variável, exemplo: let breakTest = 1;

//4. Estruturas de uma Função
//Uma função é um bloco de código que pode ser reaproveitado ao longo do nosso programa;
// Invocamos/chamamos ela por ser nome, e também o uso de parênteses : function();
// Também podemos inserir parâmetros, que deixam a execução da função única, exemplo soma(a,b);
// Utilizamos algumas funções até então, como log de um console.

// Prompt
// const age = prompt("Digite a sua idade:");
// console.log(`Você tem ${age} anos`);

//Alert
// const z = 20;
// alert(`o número ${z}`);

// 5 - Objeto Math.x
//Math é um objeto que possui diversas funções para fins matemáticos;
// Por exemplo: max encontra o maior número e floor arredonda para baixo o número.
// console.log(Math.floor(4, 55));
// console.log(Math.max(29, 330, 1202, 230));
// console.log(Math.ceil(2.23));

// //6 -Funções do objeto Console
// // O console também é um objeto, assim como Math, tem várias funções
// // A sua principal função é exibir uma mensagem de alguma categoria na aba de console.
// console.log("Teste");
// console.error("Error");
// console.warn("Aviso!");
// console.info("Informação");
// console.debug("Depuração");

// 7 - O que são estruturas de controle?
// Os programas são executados de cima para baixo.
// Com estas estruturas podemos alterar o fluxo de execução
// O caminho dependerá das condições e comparações
// As principais são if e else.

// 7 - Estrutura Condicional : if
// O IF é muito utilizado na programação em geral;
// Temos um bloco de código sendo executado, se uma condição for verdadeira;
// A condição é validade por um boolean gerado após a execução do trecho de código no IF;

const m = 4;
if (m > 5) {
  console.log("M é maior que 5");
} else {
  console.log("M é menor que 5");
}

const user = "Matheus";
if (user === "Matheus") {
  console.log("é idêntico");
} else {
  console.log("Não é Matheus");
}

// 8 - Estrutura Condicional = Else
// O else executa quando o if não atende sua condição;
// Ou seja, não temos um bloco de validação, apenas do que será executado;
// A ideia é: Execute algo se x> 5, SE NÃO, execute isso:

const loggedIn = false;
if (loggedIn) {
  console.log("Está autorizado");
} else {
  console.log("Não está autorizado");
}

const q = 10;
const w = 15;

if (q > 2 && w >= 15) {
  console.log("Numeros mais altos");
} else {
  console.log("Os numeros nao sao mais altos");
}

// 9 -Estrutura condicional = Else if
// O else if é uma estrutura intermediária do if e do else
// É possível adicionar novas condições, como if;
// Assim temos a possibilidade de criar várias validações, para resolver nosso problema.
if (1 > 2) {
  console.log("Teste");
} else if (2 > 3) {
  console.log("Teste 2");
} else if (5 > 1) {
  console.log("Agora sim!");
}

const userName = "Matheus";
const userAge = 20;

if (userName === "José") {
  console.log("Olá José");
} else if (userName === "Matheus" && userAge === 20) {
  console.log("Olá Matheus");
} else {
  console.log("Nenhuma condição foi aceita!");
}
