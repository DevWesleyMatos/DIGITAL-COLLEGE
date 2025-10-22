function getData() {
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())

    // ====== TABELA ======
    /*
    .then(data => {
      let tbody = document.querySelector("tbody");
      tbody.innerHTML = data.map(produto => `
        <tr>
          <td>${produto.id}</td>
          <td>${produto.title}</td>
          <td>${produto.price}</td>
          <td><img src="${produto.image}" width="50"></td>
        </tr>
      `)
    })
    */

    // ====== CARDS ======
    .then(data => {
      let section = document.querySelector("section");

      section.innerHTML = data.map(produto => `
        <div class="card" >
          <img src="${produto.image}" class="card-img-top" alt="${produto.title}">
          <div class="card-body">
            <h5 class="card-title">${produto.title}</h5>
            <p class="card-text">$${produto.price}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${produto.category}</li>
            <li class="list-group-item">${produto.rating.rate} ★</li>
            <li class="list-group-item">${produto.rating.count} avaliações</li>
          </ul>
        </div>
      `)
    })
}

getData();
