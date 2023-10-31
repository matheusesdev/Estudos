/*
// 1- Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -50);


// 2. Operações aritimeticas 
console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 5);

console.log(5  +4 * 12)

// 3. Special numbers.
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asdf");

console.log(typeof NaN);

//4. Strings
console.log("Hellow World!");
console.log('Mais um Hello World');
console.log('13');
//Pode usar typeof nesses casos.
console.log(typeof "Hellow World!");
console.log(typeof 'Mais um Hello World');
console.log(typeof '13'); */

// 5. Simbolos especiais em string.
console.log("Testando a \n quebra de linha")

console.log("Espaçamento de \t tab ")


// // 6. Concatenação
// console.log(" Oi, " + " tudo " + " bem ?");
// console.log (`Testando ` + `com ` + `crase!`);

// //7. Interpolação (Template Strings)   

// console.log(`soma de 2+2 é: ${2 + 2}`);

// console.log(`Podemos executar quaquer coisa aqui ${console.log("Teste")}`)

// // 8. Boolean
// console.log(true);
// console.log(5 > 3);
// console.log(2 < 9);
// console.log(2 > 9);
// console.log(typeof false);

// //9. Comparações
// console.log(5 <= 5);
// console.log(5 < 5);
// console.log(10 == 10);
// console.log(10 == 9);
// console.log(10 != 9);

// // 10. Idêntico.

// console.log(9 == "9");
// console.log(9 === "9");
// console.log(9 != "9");

//11. Operadores Lógicos
console.log (true && true); //Neste caso, estamos usando o operador lógico "E" (&&). O operador && retorna true apenas se ambos os operandos forem true. Como ambos são true, o resultado é true.

console.log (true && fase); // Novamente, usando o operador &&, mas agora um dos operandos é false, portanto o resultado é false. O operador && exige que ambos os operandos sejam true para o resultado ser true.

console.log( 5 > 2 && 2 < 10); // Aqui, estamos comparando duas expressões com o operador &&. Ambas as expressões são verdadeiras, pois 5 > 2 e 2 < 10, então o resultado é true. O operador && exige que ambas as expressões sejam verdadeiras para o resultado ser true.

console.log (5 > 2 && "Matheus" === 1); //Neste caso, a primeira expressão 5 > 2 é verdadeira, mas a segunda expressão "Matheus" === 1 é falsa. Como o operador && requer que ambas as expressões sejam verdadeiras, o resultado é false.

console.log (5 > 2 || "Matheus" === 1);  //Aqui estamos usando o operador "OU" (||). O operador || retorna true se pelo menos um dos operandos for verdadeiro. Neste caso, a primeira expressão 5 > 2 é verdadeira, então o resultado é true.

console.log(5 < 2 || 5 > 100); // Continuamos usando o operador ||. Ambas as expressões são falsas, mas o operador || requer apenas uma expressão verdadeira, então o resultado é false.

console.log (!true); //O operador de negação ! inverte o valor do operando. !true resulta em false.

console.log (!false); //Da mesma forma, !false resulta em true, pois inverte o valor de false.

console.log(!5 > 2); //Aqui, você tentou usar o operador de negação ! em uma expressão maior. No entanto, a expressão 5 > 2 é verdadeira, e ao aplicar a negação, o resultado seria false, mas há um erro de digitação na expressão. Deve ser !(5 > 2) para negar o resultado de 5 > 2, que é false.


// 12.Empty values

console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

//13.Mudanças de tipos

console.log(5 * null);

console.log("teste"  * "opa")

console.log("10" + 1 );

console.log("10" - 1);


