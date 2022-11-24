let parrafo = document.getElementById("parrafoInfo")

function buttonClick(telefno, correo){
    if(telefno || correo){
        parrafo.innerHTML = 'La informacion se envio correctamete'
        parrafo.style.color = "#05b3a5"
        return
    }
    parrafo.innerHTML = 'Escribe un correo o telefon porfavor'
    parrafo.style.color = "rgb(240, 52, 52)"
}