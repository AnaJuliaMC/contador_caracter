const inputTexto = document.querySelector("[input-texto]");
const divContador = document.querySelector("[txt-contador]");
const btnContar = document.querySelector("[btn-contar]");

let modo = "caracteres"

inputTexto.addEventListener("input", handleImputTexto)

btnContar.addEventListener("click", handleBtnContar)

function handleImputTexto(evento){
   let tamanho = inputTexto.value.length
   console.log(tamanho) 

}

function handleBtnContar(evento){
    console.log("click contar")
    if (modo === "caracteres"){
        modo = "palavras "
        btnContar.innerHTML = "Contar Palavras"
    } else{
        modo = "caracteres"
        btnContar.innerHTML = "Contar Caracteres"
    }

}