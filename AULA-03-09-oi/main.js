function getData() {
  fetch('https://rickandmortyapi.com/api/character')
  .then(response =>response.json())
  .then( data => {
    let tbody = document.querySelector("tbody")
    for (let index = 0; index < data.results.length; index++) {
      let tr = document.querySelector("tr")
     tr.innerHTML+=`
     <td scope="row">${data.results[index].id}</td>
      <td>${data.results[index].name}</td>
      <td>${data.results[index].gender}</td>
      <td>${data.results[index].status}</td>
      <td><img src="${data.results[index].imagem}"></td>
     `
tbody.appendChild(tr)
    }
  })
}
getData()