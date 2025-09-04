// const produtos = [
//     { nome: "Camiseta", preco: 25.00 },
//     { nome: "Calça", preco: 35.00 },
//     { nome: "Boné", preco: 15.00 },
//     { nome: "Jaqueta", preco: 50.00 }
// ];
// for (let index = 0; index < produtos.length; index++) {
//     if (produtos[index].preco >= 30.00) {
//         console.log(produtos[index]);
//     }
// }
// Objeto simples:
// Dado o objeto const pessoa = { nome: "Ana", idade: 17, cidade: "São Paulo" }, use if para verificar se a idade é maior ou igual a 18 e imprimir "Maior de idade" ou "Menor de idade".

// const pessoa =[  
//   { nome: "João", idade: 16 },
//   { nome: "Maria", idade: 22 },
//   { nome: "Pedro", idade: 19 }
// ]
// for (let index = 0; index < pessoa.length; index++) {
//     if (pessoa[index].idade >=18 ) {
//         console.log(`${pessoa[index].nome} é de maior`);
//     }else{
//         console.log(`${pessoa[index].nome} é de menor`);
//     }
// }


// Filtrar números múltiplos de 3:
// Dado const numeros = [3, 7, 9, 12, 14, 18], use for e if para imprimir apenas os números múltiplos de 3.
// const numeros = [3, 7, 9, 12, 14, 18]
// for (let index = 0; index < numeros.length; index++) {
//     if (numeros[index]%3 === 0) {
//         console.log(`${numeros[index]} é divisivel por 3`)
//     }
    
// }


// Contar elementos:
// Dado const letras = ["a", "b", "c", "a", "d", "a"], use for e if para contar quantas vezes a letra "a" aparece no array.
// const letras = ["a", "b", "c", "a", "d", "a"]
// let soma = 0
// for (let index = 0; index < letras.length; index++) {
//    if (letras[index] === "a") {
//     soma++
//     console.log(soma)
//    }
// }

// const funcionarios = [
//   { nome: "Ana", cargo: "Gerente" },
//   { nome: "Carlos", cargo: "Analista" },
//   { nome: "Mariana", cargo: "Assistente" }
// ];


// Use for e if para verificar se existe algum funcionário com cargo "Analista" e imprimir "Existe Analista" ou "Não existe Analista".
// const funcionarios = [
//   { nome: "Ana", cargo: "Gerente" },
//   { nome: "Carlos", cargo: "Analista" },
//   { nome: "Mariana", cargo: "Assistente" }
// ];
// for (let index = 0; index < funcionarios.length; index++) {
//     if (funcionarios[index].cargo ==="Gerente") {
//         console.log(`${funcionarios[index].nome} é ${funcionarios[index].cargo} `);
//     }if (funcionarios[index].cargos ==="Analista") {
//         console.log(`${funcionarios[index].nome} é ${funcionarios[index].cargo} `);
//     }if (funcionarios[index].cargos ==="Assistente") {
//         console.log(`${funcionarios[index].nome} é ${funcionarios[index].cargo} `);
//     }
// }



// Array de strings com tamanho específico:
// Dado const palavras = ["sol", "lua", "estrela", "mar"], use for e if para criar um novo array apenas com palavras que tenham exatamente 3 letras.
// const palavras = ["sol", "lua", "estrela", "mar"]   
// let novo = []
// for (let index = 0; index < palavras.length; index++) {
//     if (palavras[index].length === 3) {
//         novo.push(palavras[index])
//     }
// }
// console.log(novo)


// // Crie uma função chamada filtrarMaioridade que recebe um array de objetos representando pessoas, cada uma com as propriedades nome e idade. Mostre as pessoas que são maiores de idade.
// const pessoas = [
//   { nome: 'Carlos', idade: 20 },
//   { nome: 'Ana', idade: 17 },
//   { nome: 'Bruna', idade: 22 },
//   { nome: 'Lucas', idade: 16 }
// ];

// function maiorPessoa() {
//     for (let index = 0; index < pessoas.length; index++) {
//         if (pessoas[index].idade >= 18) {
//             console.log(`Nome é: ${pessoas[index].nome} e sua idade é: ${pessoas[index].idade}`);
//         }  
//     }
// }
// console.log(maiorPessoa());

// const carros = [
//   { marca: "Ford", ano: 2010 },
//   { marca: "Chevrolet", ano: 2020 },
//   { marca: "Fiat", ano: 2005 },
//   { marca: "Volkswagen", ano: 2018 },
//   { marca: "Toyota", ano: 2015 },
//   { marca: "Honda", ano: 2012 },
//   { marca: "Nissan", ano: 2019 },
//   { marca: "Hyundai", ano: 2016 },
//   { marca: "Kia", ano: 2021 },
//   { marca: "Jeep", ano: 2008 }
// ];
// // Use for e if para imprimir apenas os carros fabricados a partir de 2010.
// for (let index = 0; index < carros.length; index++) {
//     if (carros[index].ano >=2010) {
//         console.log(`${carros[index].marca}`)
//     }
// }

// - Crie uma função chamada buscarPessoaPorNome que recebe um array de objetos com as propriedades nome e idade, e um nome como parâmetro. A função deve retornar o objeto correspondente ao nome, ou uma mensagem dizendo que a pessoa não foi encontrada.



