let numeros =[1, 2, 3, 4, 5]

let numerosmult = numeros.map(function (numero) {
    return numero*2
})

console.log(numerosmult);


let nomes = ["Wesley", "Ane", "Rafa"]

let EucomNomes = nomes.map(function(nome) {
    return `Eu sou o ${nome}`
})
console.log(EucomNomes);

let nomesMaiusculo = nomes.map(function(maiusculo) {
     let txtmaiusculo = maiusculo.toUpperCase()
     return txtmaiusculo
})
console.log(nomesMaiusculo);

let quantidadeNomes = EucomNomes.map(function(qtd) {
    return qtd.length
})
console.log(quantidadeNomes);

const produtos = [
  { nome: "Camiseta", preco: 30 },
  { nome: "Calça", preco: 70 },
  { nome: "Tênis", preco: 150 }
];
let precoProdutos = produtos.map(function(valor) {
    valor = `R$ ${valor.preco},00`
return valor
}) 
console.log(precoProdutos);


let nomesProdutos = produtos.filter(function(produto) {
    if (produto.preco >= 70) {
        console.log(produto.nome)
    }else{
        console.log("Deu errado");
    }
})
console.log(nomesProdutos);
