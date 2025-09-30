// Use filter para pegar apenas os números pares.
// Depois use map para dobrar esses números.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

pegaPares = numeros.filter(function(numero) {
    return numero%2 ===0
})
console.log(pegaPares);
dobrarPares = pegaPares.map(function (numero) {
    return numero*2
})
console.log(dobrarPares);


// Filtre os nomes com até 4 letras.
// Depois transforme-os em maiúsculas.
let nomes = ["ana", "carlos", "beatriz", "joão", "rafa"];

nomes4letras = nomes.filter(function (nome) {
    return nome.length <=4
})
console.log(nomes4letras);

nomesMaiusculo = nomes4letras.map(function(maiuscula) {
    return maiuscula = maiuscula.toUpperCase()
})
console.log(nomesMaiusculo);

let NomeAdicionado = "wexxley"
nomes.push(NomeAdicionado)

console.log(nomes);
