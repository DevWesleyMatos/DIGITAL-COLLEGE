function fazGet(url) {
      let request = new XMLHttpRequest();
      request.open("GET", url, false);
      request.send();
      return request.responseText;
    }

    function criaLinha(usuario) {
      let linha = document.createElement("tr");

      let tdId = document.createElement("td");
      tdId.innerHTML = usuario.id;

      let tdNome = document.createElement("td");
      tdNome.innerHTML = usuario.name;

      let tdStatus = document.createElement("td")
      tdStatus.innerHTML = usuario.status

      let img = document.createElement("img")
      img.src = usuario.image
      let tdImagem= document.createElement("td")
      tdImagem.appendChild(img);

      linha.appendChild(tdId);
      linha.appendChild(tdNome);
      linha.appendChild(tdStatus);
      linha.appendChild(tdImagem)

      return linha;
    }

    function main() {
      let data = fazGet("https://rickandmortyapi.com/api/character");
      let usuarios = JSON.parse(data);

      let tabela = document.getElementById("tabela-body");

      usuarios.results.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
      });
    }

    main();