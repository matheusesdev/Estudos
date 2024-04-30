// O que são funções? São basicamente estrutura de código menores, podemos dividir nosso código em várias funções;
// O ideal é que a cada uma tenha apenas um único objetivo;
// Isso nos faz poupar código, pois podemos reaproveitá-las;
// A linguagem tem várias funções já criadas, e nós podemos criar as nossas;
// A estrutura da função é um pouco mais complexa;
// Para criar uma função, usamos a palavra reservada function, isso inicia uma função;
//Precisamos depois nomeá-la;
// Os parâmetros, que são uma espécie de configuração, ficam entre () depois do nome;
// O corpo da função fica entre {};
//Geralmente uma função retorna um valor;

//1 - Criando uma função:

function minhaFuncao() {
  console.log("Minha primeira função");
}
minhaFuncao();

const minhaFuncao2 = function () {
  console.log("Função em variável");
};
minhaFuncao2();

function funcaoComParametro(txt) {
  console.log(`Imprimindo${txt}`);
}
funcaoComParametro("Imprimindo alguma coisa");
funcaoComParametro("Imprimindo outra coisa");

//2 - Return
//Retorno das funções
//O retorno serve para processarmos um valor dentro da função, e retornar para o programa;
// A palavra reservada para este recurso é return;
// Se nao retornarmos nada, a função tem utilidade, mas não externaliza o que acontece nela;
// Se retornarmos, podemos armazenar o valor em uma variável;
// A função para de ser executada após o return;

function soma(a, b) {
  return a + b;
}
console.log(soma(2, 3));

const a = 20;
const b = 30;
const c = 3112;

function soma(a, b, c) {
  return a + b + c;
}
console.log(soma(a, b, c));

const a1 = 20;
const b1 = 30;
const c1 = 40;

function soma1(a1, b1, c1) {
  return a1 + b1 + c1;
}

const resultado = soma1(a1, b1, c1);
console.log(resultado);
console.log(soma1(a1, c1));

//3 - Escopo das funções
// As funções tem um escopo separado do escoipo do programa, que é global;
//Este escopo faz com que variáveis de fora não funcionem detro
//Podemos então declarar novas variáveis, sem interferir nas já declaradas;
//Podemos usar variáveis globais dentro de funções, mas não o contrário;

y = 10;

function testandoScopo() {
  let y = 20;
  console.log("Y dentro da função", y);
}
testandoScopo();

console.log("Y fora da função", y);
testandoScopo();

// 4 - Escopo aninhado
//Escopo aninhado (Nested Scopes)
// As formas de criar variáveis, let e const, nos dão a possibilida de criar escopos aninhados;
// Que consiste em ter em qualquer bloco a declaração de variávis separadas dos outros escopos;
// Um bloco é caracterizado por um código entre {};

let m = 10;

function escopoAninhado() {
  let m = 20;

  if (true) {
    let m = 30;
    if (true) {
      let m = 40;
      console.log(m);
    }
    console.log(m);
  }
  console.log(m);
}
escopoAninhado();
console.log(m);

// 5 - Arrow Function
// Arrow function é uma outra forma que temos de criar funções;
// É uma sintaxe resumida, que tem algumas diferenças das funções normais;
//É principalmente utilizado em frameworks ou bibliotecas;
// Ela precisa estar dentro de uma variável
// Criando Arrow Function

const testArrow = () => {
  console.log("Está é uma arrow function");
};
testArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) console.log("Par");
  return;
};
console.log("Impar");

parOuImpar(3);
parOuImpar(4);

// Mais sobre Arrow Function
// A arrow function pode ter uma sintaxe mais resumida;
// Muito útil para funções pequenas;
// Onde omitimos as {} e também a instrução return
