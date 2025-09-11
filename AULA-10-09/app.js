// let array = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13]

// let array2 =array.map((numero) => numero * 3 )

// console.log(array2);

// let valores = array2.map((valor) => valor = `R$: ${valor},`)

// console.log(valores);

// let divisivelpor2 = array.map((x) => {
//     let divisor 
//     divisor = x % 2
//     if (divisor === 0) {
//         console.log(`${x} é par`);
//     }else{
//         console.log(`${x} é impar`)
//     }
// })

// console.log(divisivelpor2);

// let string = ["1", "2", "3", "4"]

// let converter = string.map((numero) =>{
//     let conversor = (Number(numero))
//     return conversor;
    
// })
// console.log(converter);


// Dado o array [1, 2, 3, 4, 5, 6], use filter para retornar apenas os números pares.
// 👉 Resultado esperado: [2, 4, 6]

// let numeros = [1, 2, 3, 4, 5, 6]

// let pares = numeros.filter((par) => par % 2 ===0)
// console.log(pares);


// Dado o array ["banana", "maçã", "abacaxi", "uva"], use filter para retornar apenas as frutas que têm mais de 4 letras.
// 👉 Resultado esperado: ["banana", "maçã", "abacaxi"]

// let array = ["banana", "maçã", "abacaxi", "uva"]

// let letras = array.filter((letra) => letra.length>4)

// console.log(letras);


// Dado o array [10, 20, 30, 40, 50], use filter para retornar apenas os números maiores que 25.
// 👉 Resultado esperado: [30, 40, 50]

// let numeros = [10, 20, 30, 40, 50]

// let maior = numeros.filter((numero) => numero >= 25 )

// console.log(maior);


// Dado o array ["azul", "amarelo", "verde", "roxo", "vermelho"], use filter para retornar apenas as cores que começam com a letra "v".
// 👉 Esperado: ["verde", "vermelho"]

// let palavras = ["azul", "amarelo", "verde", "roxo", "vermelho"]

// let array = palavras.filter((letra) => letra[0] === "v")

// console.log(array);


// Dado o array [5, -3, 0, 8, -1, 4], use filter para retornar apenas os números positivos.
// 👉 Esperado: [5, 8, 4]

// let numeros = [5, -3, 0, 8, -1, 4]

// let positivos = numeros.filter((numero) => numero > 0)

// console.log(positivos);


// Dado o array [100, 200, 300, 400], use filter para manter apenas os números divisíveis por 200.
// 👉 Esperado: [200, 400]

// let numeros = [100, 200, 300, 400]

// let divisor =numeros.filter((divisivel) => divisivel % 200 === 0)

// console.log(divisor);
