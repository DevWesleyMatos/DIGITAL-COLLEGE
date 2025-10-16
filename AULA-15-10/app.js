function getData() {
    fetch("https://68f01b0b0b966ad50031ef77.mockapi.io/api/PRODUCT")
    .then(response =>response.json())
    .then( data => {
        let section = document.querySelector("#pasteis")
        for (let index = 0; index < data.length; index++) {
            let div = document.createElement("div")
        div.innerHTML =`
        <div class="card">
             <img src="${data[index].imagem}" class="card-img-top" alt="...">
             <div class="card-body">
                    <h5 class="card-title">${data[index].nome}</h5>
                    <p class="card-text">${data[index].descricao}</p>
                    <a href="#" class="btn btn-primary">comprar ${data[index].valor}</a>
             </div>
        </div>
        `
        section.appendChild(div)
       }
    })
}

            
        

getData()