// // - Crie uma função chamada calcularDesconto que recebe o valor original de um produto e o percentual de desconto. A função deve retornar o valor com o desconto aplicado.
// function calcularDesconto(Produto, Desconto) {
//     Desconto = (Desconto * Produto)/100
//     let valorFinal = Produto - Desconto
//     console.log(`Valor do Produto é:${Produto} reais, Valor do Desconto é: ${Desconto} reais, o Valor final é:${valorFinal} reais`);
//     }

//     calcularDesconto(80,15)


// - Função de calcular área do triângulo: Crie uma função chamada calcularAreaTriangulo que recebe a base e a altura de um triângulo e retorna a sua área. A fórmula da área de um triângulo é: Área = (base * altura) / 2.

// function CalcularArea(base,altura) {
//     let area = (base*altura)/2
//     console.log(area);
    
// }
// CalcularArea(10, 5) 

// - Crie uma função chamada encontrarMaisAlto que recebe um array de objetos representando pessoas, com as propriedades nome e altura. A função deve percorrer o array e retornar o objeto da pessoa com a maior altura, utilizando um laço for.

const pessoas = [
  { nome: 'Carlos', idade: 20 },
  { nome: 'Ana', idade: 40 },
  { nome: 'Carlos', idade: 35 },
  { nome: 'Lucas', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 22 },
  { nome: 'João', idade: 27 },
  { nome: 'Fernanda', idade: 32 },
  { nome: 'Camila', idade: 19 },
  { nome: 'Ricardo', idade: 45 },
  { nome: 'Rafael', idade: 28 },
  { nome: 'Patrícia', idade: 36 },
  { nome: 'Juliana', idade: 34 },
  { nome: 'Miguel', idade: 21 },
  { nome: 'Roberta', idade: 33 },
  { nome: 'Bruna', idade: 26 },
  { nome: 'Gustavo', idade: 24 },
  { nome: 'Mariana', idade: 31 },
  { nome: 'Luana', idade: 29 },
  { nome: 'André', idade: 23 }
];

// - Crie uma função chamada verificarPessoa que recebe um array de objetos com as propriedades nome e idade, e um nome como parâmetro. A função deve retornar true se a pessoa com o nome informado estiver presente no array, e false caso contrário, usando um laço for.
function verificar(pessoa) {
    let entrada = document.getElementById("entrada").value
    for (let index = 0; index < pessoas.length; index++) {
        if (entrada == pessoas.nome) {
            mostrar.innerHTML = entrada
        }else{
            mostrar.innerHTML = `Algo deu errado`
        }
    }
}