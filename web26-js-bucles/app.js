<<<<<<< HEAD
// let i = 0;
// let conjunto = [10, 23, "Juan", false, 34];
// console.log(conjunto);
// // while (i < conjunto.length) {
// //     alert("La posición " + i + " es " + conjunto[i])
// //     i = i + 1;
// // }
// // alert("Hemos acabado");

// let numeros = [3, 4, 5, 3, 5, 75, 7, 6]
// i = 0;
// while (i < numeros.length) {
//     // numeros[i] = numeros[i] + 1;
//     numeros[i]++;
//     i++;
// }
// console.log(numeros)

let ls = document.getElementById("lista")
i = 0;
while (i < ls.children.length) {
    let hijo = ls.children[i]
    hijo.innerHTML += ".";
    i++;
=======
//capturar la lista del html
let ls = document.getElementById("lista");
//inicializar la variable de iteración
let i = 0;
//empezar el bucle. desde 0 hasta < length
while (i < ls.children.length) {
    //acceder al contendio del elemento children[]
    let hijo = ls.children[i];
    //Añadirle un punto (concatenamos con +);
    hijo.innerHTML += ".";//equivalente a hijo.innerHTML = hijo.innerHTML+"."
    i++; //incrementamos la variable
    //Finalizamos el bucle
>>>>>>> 0877f6b93c1f1b49d8d9bae1677cf82f07eae034
}

for (let i = 0; i < ls.children.length; i++) {
    ls.children[i].innerHTML += ".";
<<<<<<< HEAD

}

for (let j = 0; j < ls.children.length; j++) {
    let ls = document.getElementById("lista");
    if (j % 2 == 1 ) {
        ls.children[j].style.color = "red";
    }

}

let artistas = ["Amaral", 
                "Estopa",
                "El canto del Loco"
                "C Tangana",
                "Rosalia",
                "Vertusta Morla",
                "Tatchenko",
                "Pecker",
                "Mago de Oz",
                "Héroes del Silencio",
                "La Polla Records"];
let tr = document.createElement("tr")
let numero = document.createElement("td")
let artista = document.createElement("td")
=======
}

let p = document.getElementById("parrafo");
//p.style.color = "red";

//Utilizad un bucle for como el de arriba
//con un if (o dos ifs) dentro para pintar de rojo
//los elementos "Segundo" y "Cuarto" de nuestra lista
for (let i = 0; i < ls.children.length; i++) {
    if (i == 1 || i == 3) {
        ls.children[i].style.color = "red";
    }
}

let artistas = ["Amaral",
    "Estopa",
    "El Canto del Loco",
    "C Tangana",
    "Rosalía",
    "Vetusta Morla",
    "Tatchenko",
    "Pecker",
    "Mago de Oz",
    "Héroes del Silencio",
    "La Polla Records"];


//Ejercicio para el miércoles 2 de diciembre
//Rellenad la tabla "tabla" del HTML siguiendo el siguiente
//patrón:
// +---+-------------------+
// | 1 | Amaral            |
// |---|-------------------|
// | 2 | Estopa            |
// |---|-------------------|
// | 3 | El canto del loco |
//  ......................
let tabla = document.getElementById("tabla");
//iteramos por array artistas con un for
//para cada valor de i
for (let i = 0; i < artistas.length; i++) {
    // let fila = "<tr><td>" + i + "</td><td>" + artistas[i] + "</td></tr>";
    // creamos un tr
    let fila = document.createElement("tr");
    //c reamos un td para la celda del número
    let celda1 = document.createElement("td");
    // creamos un td para la celda del artista
    let celda2 = document.createElement("td");
    // rellenamos la celda del número con el ínidce
    celda1.innerHTML = i;
    // rellenamos la celda del artista con el artista que toca
    celda2.innerHTML = artistas[i];
    // añadimos a la fila la celda del número con appendChild
    fila.appendChild(celda1);
    // añadimos a la fila la celda del artista con appendChild
    fila.appendChild(celda2);
    // añadimos la fila a la tabla
    tabla.appendChild(fila);
}
>>>>>>> 0877f6b93c1f1b49d8d9bae1677cf82f07eae034
