const pasteis = JSON.parse(localStorage.getItem("Pasteis")) || [
  {
    id: 1,
    nome: "Pastel de Palmito",
    preco: 7.50,
    ingredientes: "Palmito, Cebola, Azeitona, Temperos",
    tamanho: "Médio"
  },
  {
    id: 2,
    nome: "Pastel de Pizza",
    preco: 8.00,
    ingredientes: "Presunto, Mussarela, Tomate, Orégano",
    tamanho: "Grande"
  },
  {
    id: 3,
    nome: "Pastel de Carne Seca com Catupiry",
    preco: 9.00,
    ingredientes: "Carne seca, Catupiry, Cebola",
    tamanho: "Grande"
  },
  {
    id: 4,
    nome: "Pastel de Bacalhau",
    preco: 10.00,
    ingredientes: "Bacalhau, Batata, Cebola, Azeitona",
    tamanho: "Grande"
  },
  {
    id: 5,
    nome: "Pastel de Banana com Canela",
    preco: 6.50,
    ingredientes: "Banana, Canela, Açúcar",
    tamanho: "Médio"
  },
  {
    id: 6,
    nome: "Pastel de Doce de Leite",
    preco: 7.00,
    ingredientes: "Doce de leite, Chocolate branco",
    tamanho: "Pequeno"
  },
  {
    id: 7,
    nome: "Pastel de Queijo com Orégano",
    preco: 6.50,
    ingredientes: "Mussarela, Orégano",
    tamanho: "Médio"
  },
  {
    id: 8,
    nome: "Pastel de Frango com Requeijão",
    preco: 8.50,
    ingredientes: "Frango desfiado, Requeijão, Cebola",
    tamanho: "Médio"
  },
  {
    id: 9,
    nome: "Pastel de Camarão",
    preco: 11.00,
    ingredientes: "Camarão, Requeijão, Cebola, Salsinha",
    tamanho: "Grande"
  },
  {
    id: 10,
    nome: "Pastel de Chocolate com Morango",
    preco: 9.50,
    ingredientes: "Chocolate ao leite, Morango, Granulado",
    tamanho: "Médio"
  }
];

function saveLocalStorage() {
  localStorage.setItem("Pasteis", JSON.stringify(pasteis))
}
saveLocalStorage()

let body = document.querySelector("body")
let tbody = document.querySelector("tbody")

function products() {
    
    let tbody = document.querySelector("tbody")
    for (let index = 0; index < pasteis.length; index++) {
        let tr = document.createElement("tr")
        tr.innerHTML = `
        <td> ${pasteis[index].id}</td>
        <td> ${pasteis[index].nome}</td>
        <td> ${pasteis[index].preco}</td>
        <td> ${pasteis[index].ingredientes}</td>
        <td>
          <button class="btn btn-warning" onclick="edit(${pasteis[index].id})">Editar</button>
          <button class=" btn btn-danger" onclick="deletarPasteis(${pasteis[index].id})">Excluir</button>
        </td>
        `
        tbody.appendChild(tr)
    }
  }

products()

function renderModal() {
  let div = document.createElement("div")
  div.classList.add("modal-overlay")
  div.innerHTML= `
  
  <div id="createModal" class="modal-content" >
    <form>

     <div class="form-group">
        <input type="text" class="form-control" placeholder="Digite Nome" aria-label="Username" aria-describedby="basic-addon1" id="inputNome">
     </div>     
     
     <div class="form-group">
        <input type="text" class="form-control" placeholder="Digite Preço" aria-label="Username" aria-describedby="basic-addon1" id="inputPreco">
         </div>

     <div class="form-group">
        <input type="text" class="form-control" placeholder="Digites Ingredientes" aria-label="Username" aria-describedby="basic-addon1" id="inputIngrediente">
     </div>
    
      <div id="div-buttons">
        <button type="button" onclick="fechar()" class="btn btn-secondary">Fechar</button>
        <button type="button" onclick="adicionar()" class="btn btn-primary">Adicionar</button>

      </div>

     </div>
    </form>

  </div>

  `
  body.appendChild(div)
}

function fechar() {
  let createModal = document.querySelector(".modal-overlay")
  body.removeChild(createModal)
}
function adicionar() {
  let nome = document.querySelector("#inputNome").value
  let preco = document.querySelector("#inputPreco").value
  let ingrediente = document.querySelector("#inputIngrediente").value
  let tbody =document.querySelector("tbody")

  if(nome==="" || preco==="" || ingrediente===""){
    createModal.innerHTML+=`
    <p style="color:red"> Digite valores validos</p>`
    return
  }

  pasteis.push({
    id:pasteis.length+1,
    nome:nome,
    preco:preco,
    ingredientes:ingrediente

  })
  fechar()
  tbody.innerHTML =""
  products()

}

function edit(id) {
<<<<<<< HEAD:AULA-24-09/JS/list.js
  let pastel = pasteis.find((pastel) => pastel.id === id);
  console.log(pastel); 

  renderModal(); // abre o modal

  document.querySelector("#inputId").value = pastel.id;
  document.querySelector("#inputNome").value = pastel.nome;
  document.querySelector("#inputPreco").value = pastel.preco;
  document.querySelector("#inputIngrediente").value = pastel.ingredientes;

  
  let btn = document.querySelector("#div-buttons button.btn-primary");
  btn.innerHTML = "Salvar Alterações";
  btn.setAttribute("onclick", `salvarAlteracoes(${id})`);
}

function salvarAlteracoes(id) {
  let idEditado = document.querySelector("#inputId").value;
  let nomeEditado = document.querySelector("#inputNome").value;
  let precoEditado = document.querySelector("#inputPreco").value;
  let ingredienteEditado = document.querySelector("#inputIngrediente").value;

  let index = pasteis.find(p => p.id == id);

  pasteis[index].id = idEditado;
  pasteis[index].nome = nomeEditado;
  pasteis[index].preco = precoEditado;
  pasteis[index].ingredientes = ingredienteEditado;


  fechar();
  document.querySelector("tbody").innerHTML = "";
  products();
}

=======
  let pastel = pasteis.find((pastel) => pastel.id === id)
  let div = document.createElement("div")
  div.classList.add("modal-overlay")
  div.innerHTML= `
  
  <div id="createModal" class="modal-content" >
    <form>

     <div class="form-group">
        <input type="text" class="form-control" placeholder="Digite Nome" aria-label="Username" aria-describedby="basic-addon1" id="editNome" value="${pastel.nome}">
     </div>     
     
     <div class="form-group">
        <input type="text" class="form-control" placeholder="Digite Preço" aria-label="Username" aria-describedby="basic-addon1" id="editPreco" value="${pastel.preco}">
         </div>

     <div class="form-group">
        <input type="text" class="form-control" placeholder="Digites Ingredientes" aria-label="Username" aria-describedby="basic-addon1" id="editIngrediente" value="${pastel.ingredientes}">
     </div>
    
      <div id="div-buttons">
        <button type="button" onclick="fechar()" class="btn btn-secondary">Fechar</button>
        <button type="button" onclick="salvarEdit(${id})" class="btn btn-primary">Salvar</button>

      </div>

     </div>
    </form>

  </div>

  `
  body.appendChild(div)
  
}

  function salvarEdit(id) {
  let index = pasteis.findIndex((pastel) => pastel.id === id)
  let nome = document.querySelector("#editNome").value
  let preco = document.querySelector("#editPreco").value
  let ingrediente = document.querySelector("#editIngrediente").value

  pasteis[index] = {
    id:pasteis[index].id,
    nome:nome,
    preco:preco,
    ingredientes:ingrediente
  }

  fechar()
  tbody.innerHTML =""
  products()
 }


>>>>>>> c706d8065b17bb4ee2254e6b1583c56599faf576:AULA-24-09(Loja_Pastel)/JS/list.js
function deletarPasteis(id) {
  let tbody =document.querySelector("tbody")
  let pastel = pasteis.findIndex((pastel) => pastel.id === id)
  pasteis.splice(pastel, 1)
  tbody.innerHTML = ""
  products()

}

