let parrafo = document.getElementById("parrafoInfo")

function buttonClick(telefno, correo){
    if(telefno || correo){
        parrafo.innerHTML = 'La informacion se envio correctamete'
        return
    }
    parrafo.innerHTML = 'Escribe un correo o telefon porfavor'
}