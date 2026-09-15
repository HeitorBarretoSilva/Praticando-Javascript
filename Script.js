// let nome = "Diogo";
// let idade = 30;

// CONCATENAÇÃO

// console.log("nome: " + nome + ", idade: " + idade);

// INTERPOLAÇÃO

// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);

// let soma = "5" + 3; // da 53. não realmente soma apenas junta os numeros
// let sub = "5" - 3; // da 2. Diminui o numero

// console.log(soma);
// console.log(sub);

// CONVERTENDO OPERAÇÕES
// let numero = "53" //string

// let convertido = Number(numero) //converte o valor para number

// console.log(numero);
// console.log(convertido);
// console.log(typeof numero);
// console.log(typeof convertido);

// OPERADORES RELACIONAIS

// VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
// "10" == 10 -> true
// VALIDA IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 10 -> false 

// ESTRUTURA DE REPETIÇÃO

// let frutas = ["Maça", "Banana", "Acerola", "Uva"];

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
    
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`))

// FUNÇÕES NATIVAS JS

// FUNÇÃO MAP()
// Percorre uma lista e cria uma nova lista com base em uma condição

// let numeros = [1, 2, 3, 4]

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2
// })

// console.log(numerosDobrados);

// OU ASSIM:
// Arrow function com retorno implícito

// let numerosDobradosArrow = numeros.map(num => num * 2);

// console.log(numerosDobradosArrow)

// FILTER
// Filtra os elementos com base em uma condição

// let numeros = [5, 10, 15, 20];

// let maioresQueDez = numeros.filter(num => num > 10);

// console.log(maioresQueDez)

// REDUCE
//  Reduz os valores de um array para um único valor

// let numeros = [1, 2, 3, 4]

// acumulador inicia em 0 por causa do numero final no .reduce
// variavel auxiliar e a função que pega os numeros do let numeros
// acumulador comeã e soma com o auxiliar até o último valor do array

// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0)

// console.log(soma)

// FIND
// Retorna o primeiro elemento que atende a condição

// let produtos = [
//     { id: 1, nome: "teclado", preco: 50 },
//     { id: 2, nome: "mouse", preco: 30},
//     { id: 2, nome: "carderno", preco: 30}
// ]

// let item = produtos.find(p => p.id === 2)

// console.log(item);

// // DIFERENÇA ENTRE FILTER E FIND
// // find -> retorna somente o primeiro elemento que ele encotra com acondição
// // filter -> retorna todos que encotra com a condição

// let itemFiltrado = produtos.filter(p => p.id === 2)

// console.log(itemFiltrado);

// SPLIT
// Divide a string em partes, transformando em um array

// let frase = "JS é top";

// let palavras = frase.split(" ");
// console.log(palavras);

// TRIM
// Trim remove espaços mp omocop e fomaç de string
// let nome = "        paulo"
// let nomeLimpo = nome.trim();

// console.log(nome);
// console.log(nomeLimpo);

// INCLUDES
// Verifica se existe um valor dentro de uma lista e retorna um booleano (true ou false)

// let frutas = ["maçã", "banana"];

// let frutasInclude = frutas.includes("maçã");

// console.log(frutasInclude); // true


// toLowerCase() -> transforma o texto em minúsculo
// toUpperCase() -> transforma o texto em maiúsculo
// let nome = "HEITOR";
// let cargo = "estudante";

// console.log(nome.toLowerCase());
// console.log(cargo.toUpperCase());

// FOREACH
// let nomes = ["Guilherme", "joão", "Maria"]

// nomes.forEach(nome => console.log(nome));


// SOME
// Verifica se pelo menos um item atende a condição
// Retorna booleano

// let numeros = [1, 3, 5, 8];

// let temPar = numeros.some(num => num % 2 === 0);
// console.log(temPar); // true

// EVERY
// Verifica se TODOS os elementos atendem a condição

// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares); // false

// SORT
// Ordena os elementos do array

let numeros = [3, 10, 5, 2, 4]

let letras = ["c", "a", "x", "h"]

// para letras

letras.sort();
console.log(letras);

// para numeros

numeros.sort((a, b) => a - b);
console.log(numeros);

