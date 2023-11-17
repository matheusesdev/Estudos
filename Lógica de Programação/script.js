


// Algoritmo
if (10 % 2 === 0) {
  return "é Par";
} else {
  return "é ímpar";
}

/* Objetivo: O algoritmo tem como objetivo verificar se o número 10 é par ou ímpar.
     
    Processamento:
    1. Utiliza o operador de módulo para verificar se o resto da divisão de 10 por 2 é igual a 0.
    2. Compara se o resto da divisão é igual a 0.
    
    Decisão (Estrutura condicional):
    1. Se o resto da divisão for igual a 0, o número é par (mensagem "é Par").
    2. Se o resto da divisão for diferente de 0, o número é ímpar (mensagem "é ímpar").

    Retorno:
    1. Retorna a mensagem "é Par" ou "é ímpar".

    Em resumo, o código é uma implementação de um agoritmo que decide se um número é par ou ímpar com base em um teste condicional simples. Essa sequência lógica de instruções representa a essência de um algoritmo, fornecendo uma solução clara e definida para um problema especifico. 
*/


//Variáveis e tipos de dados:

//Variável para armazenar um número inteiro

let numeroInteiro = 10; // Declara uma variável chamada numeroInteiro e atribui a ela o valor 10, que é um número inteiro.

//Variável para armazenal um número decimal

let numeroDecimal = 2.3; //Declara uma variável chamada numeroDecimal e atribui a ela o valor 2.3, que é um número decimal.

//Variável para armazenar uma string

let texto = "Olá, mundo!"; // Declara uma variável chamada texto e atribui a ela a string "Olá, mundo!"

// Este código ilustra o uso de variáveis para armazenar diferentes tipos de dados, como números inteiros, decimais e strings, conforme mencionado no texto.

//Estruturas de Controle: mecanismos para controlar o fluxo de execução do programa. Isso inclui estruturas condiocionais (if, else) para tomar decisões e estruturas de repetição (loops) para executar tarefas repetitivas.
// Exemplo de estrutura condicional (if, else)
let numero = 15; //Declara uma variável numero e atribui a ela o valor 15.
if (numero % 2 === 0){
  console.log(`${numero} é par.0`);
} else{
  console.log(`${numero} é impar.`)
}
// If e Else: utiliza uma estrutura condicional para verificar se o numero é par ou ímpar. Se for par, exibe uma mensagem indicando que é par; se caso contrário, exibe uma mensagem indicando que é ímpar.


//Exemplo de estrutura de repetição (for)
console.log("Contando de 1 a 5:");

for(let i = 0; i < 10; i++) {
  console.log(i);
}

//Este código ilustra o uso de estruturas de controle para tomar decisões com base em condições (if, else) e para executar tarefas repetitivas (for))
//Este código ilustra o uso de estruturas de controla para tomar decisões com base em condições (if, else) e para executar tarefas repetitivas (for))

//Funções e Procedimentos
//Função para verificar se um número é par ou ímpar

function parOuImpar (numero){
  return numero % 2 === 0 ? 'par' : 'ímpar';
}

//Função para exibir uma mensagem formatada
function exibirMensagem(numero, paridade){
  console.log('${numero} é ${paridade}.');
}

//Utilizando as funções
let numero1 = 10;
let numero2 = 7;


//Chamando as funções e exibindo mensagens

exibirMensagem (numero1, parOuImpar(numero1));
exibirMensagem (numero2, parOuImpar(numero2));


//Lógica booleana

//Exemplo de lógica booleana e estrutura de controle condicional

let temCafe = true;
let temPao = false;

//Verificando se há café e pão para o café da manhã

if (temCafe && !temPao){
  console.log("Vamos tomar café com café, mas não temos pão.");
} else if (temCafe || temPao){
  console.log ("Temos pelo menos uma coisa para o café da manhã.");
} else {
  console.log("Não temos café nem pão para o café da manhã.");
}