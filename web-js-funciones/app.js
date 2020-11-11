function saludar() {
    alert("Hola clase")
}

saludar();

function saludoPersonalizado(nombre) {
    let mensaje = "Hola ";
    alert(mensaje + nombre);
}

saludoPersonalizado("Pepe");
saludoPersonalizado("Isabel");
saludoPersonalizado("Martin");
let nombre = "Javier";
saludoPersonalizado(nombre)

function cambiarParrafo(esto) {
    document.getElementById("parrafo").innerHTML = esto
}
cambiarParrafo("Hola Clase")

function cambiarElemento(idElemento, contElemento) {
    let elemento = document.getElementById(idElemento); elemento.innerHTML = contElemento
}
cambiarElemento("parrafo","Hola caracola")
cambiarElemento("parrafo2","yeja")
cambiarElemento("parrafo3","Helloooo")
cambiarElemento("parrafo4","Nos vemos")
document.getElementById("input1").value="Me aburro"