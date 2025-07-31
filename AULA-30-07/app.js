

const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@example.com",
    idade: 28,
    ativo: true
  },
  {
    id: 2,
    nome: "Maria Oliveira",
    email: "maria.oliveira@example.com",
    idade: 34,
    ativo: false
  },
  {
    id: 3,
    nome: "Carlos Santos",
    email: "carlos.santos@example.com",
    idade: 25,
    ativo: true
  },
  {
    id: 4,
    nome: "Ana Paula",
    email: "ana.paula@example.com",
    idade: 30,
    ativo: true
  },
  {
    id: 5,
    nome: "Pedro Martins",
    email: "pedro.martins@example.com",
    idade: 40,
    ativo: false
  }
];

// Verifique o status do usuario de index 3 se ele está ativo ou inativo e coloque em um console

console.log(usuarios[3].ativo)

// Mostre no console uma frase com o email do usuario com index 4
console.log(`meu email é: ${usuarios[4].email}`)

// Faça uma média de todas as idades dos usuários
let mediaIdade =
    (usuarios[0].idade + usuarios[1].idade + usuarios[2].idade + usuarios[3].idade + usuarios[4].idade  ) /5;
console.log(mediaIdade)

// Mostre em uma frase o nome do usuário com a maior idade

