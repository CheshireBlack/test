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
}

for (let i = 0; i < ls.children.length; i++) {
    ls.children[i].innerHTML += ".";

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
