let iconDark = document.querySelector("#iconDark")
function darkmode() {
    let bodyDark = document.querySelector("#conteudo")
    bodyDark.classList.add("bodyDark")
}
iconDark.addEventListener("click", darkmode)