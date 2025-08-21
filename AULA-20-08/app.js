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
    console.log()
}

///////////////////////////////////////////////
