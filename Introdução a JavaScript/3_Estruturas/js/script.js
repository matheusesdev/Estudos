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

// 6 -Funções do objeto Console
//O console também é um objeto, assim como Math, tem várias funções
// A sua principal função é exibir uma mensagem de alguma categoria na aba de console.
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


//10 - Estruturas de Repetição:
// O que são estruturas de repetição? São um bloco de código que se repetem até uma condição ser satisfeita;
// Isso evita a repetição desnecessária do nosso código;
// Algumas das estruturas são? for, white e do while;
// As suas sintaxes são diuferentes, mas as duas chegam no mesmo resultado;
// Temos que nos atentar ao loop infinito;
// O loop infinito é um loop que não tem fim, e isso pode travar o nosso programa;

//Estrutura de repetiçãa: while
// O while faz uma ação até que uma condição seja atingida;
// A condição é validada antes da execução do bloco de código;
//No bloco definimos o fim do loop, com a alteração da variável de controle;
//Temos que definir também um incrementador, que é quem faz a condição ser atingida;

let p  = 0;
while(p < 5){
    console.log(p);
    p++;
}

let o = 0;
while (p < 4) {
  console.log(`Repetindo ${o}`)
  o = o + 1;
}

//Estrutura de repetição: do while;
 /* O do while também é uma estrutura de repetição;
A sintaxe é semelhante ao while;
Este recurso não é tão utilizado */

let F = 10;
 do{
  console.log(`Valor de F: ${F}`)
  F --;
 } while (F < 10);

 //Estrutura de repetição: for
 /*
O for é a estrutura de repetição mais utilizada;
Ela condensa toda lógica em uma linha, ao primeiro olhar parece ser mais complexa mas simplifica as coisas;
Na própria declaração, colocamos: incrementador, condição final e progressão
 */
for (let i = 0; i < 10; i++) {
  const i = array[i];
  
}

let r =  10;

for(r; r > 0 ; r = r - 1 ){
  console.log('O R está diminuindo')
}

//Identação é a forma de organizar o código, para que ele fique mais legível;
for (let u = 0; u < 10; u++){
  if(u * 2 > 10){
    console.log("O número é maior que 10")
  } else if( u / 2 === 0 ){
    console.log("Deu 0")
  }
}


// 11 - Break : forçando a saída de um loop

/*
Com a instrução de break podemos ejetar um loop, ffazendo com que as repetições cessem, mesmo que a condição não tenha sido atingida;
Isso ppode poupar memória, pois o código será executado menos vezes;
Não é tão comum, mas é um recurso válido da linguagem;
*/

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// 12 - Continue: pulando a execução de um loop
/*
Ela pode pular uma ou mais execuções do loop;
É um recurso utilizado de forma semelhante ao break;
*/

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

//13 - Switch: Estrutura de controle

/*
O switch pode ser utilizado para organização de um excesso de if/else;
Cada if seria um case;
Para cada case, temos que adicionar um break;
E temos o default, que é como o else
*/

const job = 'Programador'

switch(job){
  case 'Programador':
    console.log("Você é um DEV")
    break;  
    case 'Analista':
      console.log("Você é um analista")
      break;
      default:
        console.log("Você não é nada")
}

//Switch 'Errado'

const l = 100;
switch (l) {
  case 100:
    console.log("É 100");
  case 200:
    console.log("É 200");
  default:
    console.log("Não é nada");
}

//Essa é uma maneira errada de criar um switch.

//Conveção de nome de variáveis

/*
Nos casos abaixo temos a pior forma até a melhor forma de nomear uma variável:
1 - let programadorcadastrado; (ruim)
2 - let programador_cadastrado;
3 - let programadorCadastrado; (mais utilizado / é a forma recomendada de nomear uma variável );
4 - let ProgramadorCadastrado; 
*/