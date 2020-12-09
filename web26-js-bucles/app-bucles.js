let i = 0;
<<<<<<< HEAD
let conjunto = [10, 23, "Juan", false, 34];
console.log(conjunto);
// while (i < conjunto.length) {
//     alert("La posición " + i + " es " + conjunto[i])
//     i = i + 1;
// }
// alert("Hemos acabado");

let numeros = [3, 4, 5, 3, 5, 75, 7, 6]
i = 0;
while (i < numeros.length) {
    // numeros[i] = numeros[i] + 1;
    numeros[i]++;
    i++;
}
console.log(numeros)
=======
let conjunto = [10,23,"Juan",false,34];
console.log(conjunto);
/* while (i < conjunto.length){
    alert("La posición "+i+" es "+conjunto[i]);
    i=i+1;
}
alert("Hemos acabado"); */

let numeros = [3,4,5,6,3,5,75,7,6];
//reseteamos la i
i=0;
while ( i < numeros.length ){
    //numeros[i]=numeros[i]+1;
    numeros[i]++;
    i++;  //equivale a i=i+1;
}

console.log(numeros);
>>>>>>> 0877f6b93c1f1b49d8d9bae1677cf82f07eae034
