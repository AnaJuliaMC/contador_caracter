const inputTexto = document.querySelector("[input-texto]");
const divContador = document.querySelector("[txt-contador]");
const btnContar = document.querySelector("[btn-contar]");

let modo = "caracteres"

inputTexto.addEventListener("input", handleImputTexto)

btnContar.addEventListener("click", handleBtnContar)

function handleImputTexto(evento){


   let tamanho = inputTexto.value.length
   if (modo === "caracteres"){
    if (tamanho == 1){
        divContador.innerHTML = tamanho + " caractere"
       }else{
        divContador.innerHTML = tamanho + " caracteres"}

   }else{

    let qntadepalavras = inputTexto.value.split(" ").length
    if (qntadepalavras == 1){
        divContador.innerHTML = qntadepalavras + " palavra"
       }else{
        divContador.innerHTML = qntadepalavras + " palavras"}
     
 }
}
 


function handleBtnContar(evento){
    if (modo === "caracteres"){
        modo = "palavras "
        divContador.innerHTML = "0 palavras"
        btnContar.innerHTML = "Contar Palavras"

    } else{
        modo = "caracteres"
        divContador.innerHTML = "0 caracteres"
        btnContar.innerHTML = "Contar Caracteres"
    }


}