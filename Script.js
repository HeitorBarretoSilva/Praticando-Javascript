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

let produtos = [
    { id: 1, nome: "teclado", preco: 50 },
    { id: 2, nome: "mouse", preco: 30}
]

let item = produtos.find(p => p.id === 1)

console.log(item);

