let incognita = "3"; //Número a adivinar
let respuesta; //Número introducido por el usuario

respuesta = prompt("Escribe un número del 1 al 10");

if (respuesta === null) {
    alert("Fin del juego, le has dado a 'Cancelar'");
} else if (respuesta == incognita) {
    alert("Enhorabuena, has ganado");
} else if (respuesta == "4" || respuesta == "2") {
    alert("Uy!. Dale a F5 y prueba otra vez");
} else {
    alert("Lo siento, no ha podido ser. Dale a F5 para jugar otra vez")
}