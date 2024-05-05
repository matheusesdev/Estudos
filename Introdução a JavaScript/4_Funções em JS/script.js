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
// 6 - Mais sobre arrow fuctions;

const raizQuadrada = (x) => {
  return x * x;
};

console.log(raizQuadrada(3));

// Nesse caso estamos emitindo o bloco e tendo o mesmo resultado da arrow funcion acima.
const raizQuadrada2 = (x) => x * x;
console.log(raizQuadrada2(2));
console.log(raizQuadrada2(22));

const helloWord = () => console.log("Hellow Word");

helloWord();

// Argumentos opcionais
// Os argumentos/parâmetros nas funções são obrigatórios, precisamos passar todos;
// Porém existem casos de funções que pode funcionar sem algum dos argumentos;
// Para resolver isso podemos fazer uma checagem do parâmetro com um if;

//  7 - Parâmetro opcional
const multiplication = function (m, n) {
  if (n === undefined) return m * 2;
  else return m * n;
};
console.log(multiplication(5));
console.log(multiplication(22));

const greeting = (name) => {
  if (!name) {
    console.log("Olá!");
    return;
  }
  console.log(`Olá ${name}`);
};
greeting("Matheus");
greeting();

// Argumento com valor Default;
// Valor default é quando o argumento tem um valor prévio;
// Se for passado com um novo valor, o default é substituido;
// Se não, o default é utilizado na função;
// 8 - Valor default;

// Na primeira linha, o valor de greet já estava estabelecido

const customGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}!`;
};
// O primeiro console.log utilizou o valor de greet que já existia
// No segundo console.log o "Bom dia" assumiu o valor de greet que existia
console.log(customGreeting("Matheus"));
console.log(customGreeting("Matheus", "Bom dia"));

const repeatText = (text, repeat = 2) => {
  for (let index = 0; index < repeat; index++) {
    console.log(text);
  }
};
repeatText();
repeatText("Olá");
repeatText("Repete 5 vezes", 5);

// Closures
// Closure é um conjunto de funções, onde temos um reaproveitamento do escopo interno de uma função;
// Pois este escopo não pode ser acessado de fora da função, já que éum bloco;
// Então há funções internas que aproveitam o escopo, e são chamadas de closure;
// É um conceito abstrado sem muito contexto de aplicação, e pode ficar difícil de aprender.
//  9 - Closure

// O código define e invoca uma função chamada someFunction. Dentro dessa função, há várias coisas acontecendo;
// Primeiro, uma variável txt é declarada e inicializada com a string "Alguma coisa". Essa variável é local para a função someFunction e não pode ser acessada fora dela.
// Em seguida, uma função interna chamada display é declarada. Essa função, quando chamada, imprime o valor da variável txt no console. Como display é uma função interna de someFunction, ela tem acesso ao escopo de someFunction e, portanto, pode acessar a variável txt.
// Depois que a função display é declarada, ela é imediatamente chamada. Isso resulta na string "Alguma coisa" sendo impressa no console.
// Finalmente, após a definição de someFunction, a função é chamada. Isso inicia todo o processo descrito acima.
// Basicamente, uma CLOSURE ocorre quando uma função tem acesso ao escopo pai, mesmo depois que o escopo pai foi fechado;
// No código apresentado a função display tem acesso à variável txt do escopo da função someFuction, mesmo quando é chamada fora do escopo direto de um txt. Isso é possível por causa do conceito de closure

function someFunction() {
  let txt = "Alguma coisa";
  function display() {
    console.log(txt);
  }
  display();
}
someFunction();

function mesmaCoisa() {
  let number = 20;
  function display2() {
    console.log(number);
  }
  display2();
}
mesmaCoisa();
bb
// 10 - Mais sobre CLOSURES
// As Closures também podem servir para salvar os resultados já executados;
// Criando uma espécie de incrementação;
// Assim temos uma variável que executa uma função e modifica seu valor;

REVER O CONCEITO DE CLOSURE
const multiplicationClosure = (n) => {
  return (m) => {
    return m * n;
  };
};

const c5 = multiplicationClosure(22);
const c3 = multiplicationClosure(221);

console.log(c3(221));
console.log(c5(22));
