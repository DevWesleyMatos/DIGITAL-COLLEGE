//Use for e if para contar quantos usuários estão ativos.
const usuarios = [
  { nome: "João", ativo: true },
  { nome: "Maria", ativo: false },
  { nome: "Pedro", ativo: true }
];
for (let index = 0; index < usuarios.length; index++) {
    if (usuarios[index].ativo === true) {
        console.log("está ativo");
    }else{
        console.log("inativo");   
    }
}

///////////////////////////////////////////////

//Use for e if para imprimir o nome dos alunos cuja média das notas seja maior ou igual a 7.
const alunos = [
  { nome: "Lucas", notas: [7, 8, 9] },
  { nome: "Carla", notas: [5, 6, 4] }
];
for (let index = 0; index < alunos.length; index++) {
    if (alunos[index].notas[index] == 7) {
        console.log(alunos[index]);
        
    }
    
}