function anyadirTarea() {
    //tomo el valor del input
    let eTarea = document.getElementById("idTarea");
    // compruebo si tiene algo de texto
    if (eTarea.value != "") {
        //si tiene texto, añado la tarea en la lista
        anyadirElemento(eTarea.value);
        //despues de añadir borro el elento input
        eTarea.value = "";
    }
    //si no tiene texto, no hago nada
}
//funcion añadir elemento a la lista. 
//cogera un parámetro y lo añadirá a la lista listaTareas
function anyadirElemento(textoTarea) {
    //cojo el elemento de la lista
    let listaTareas = document.getElementById("listaTareas");
    //le añado un elemento de lista con el texto
    // del parámetro textoTarea
<<<<<<< HEAD
    liTarea = document.createElement("li");
    liTarea.innerHTML = textoTarea;
    listaTareas.appendChild(liTarea)
=======

    //Creamos un elemento <li>
    liTarea = document.createElement("li");

    //Relleno el elemento
    liTarea.innerHTML = textoTarea;

    //Añado el elemento a la listaTareas
    listaTareas.appendChild(liTarea);
>>>>>>> 0877f6b93c1f1b49d8d9bae1677cf82f07eae034

    //Esto es equivalente
    //listaTareas.innerHTML = listaTareas.innerHTML + "<li>" + textoTarea + "</li>";
}

function borrarTarea() {
    //usar prompt para pedir al usuario un número de tarea.
    let numTarea = prompt("Escribe el número de la tarea que quieres borrar");
    
    // capturo la lista de tareas.
    let lTareas = document.getElementById("listaTareas");
    //comprobar que el número de tarea es válido
    if ( numTarea >= 1 && numTarea <= lTareas.children.length ) {
        //borrar de la lista de tareas el elemento número
        //n-1, donde n es el valor que me ha pasado el
        // usuario.
<<<<<<< HEAD
        numTarea = numTarea - 1; //numTarea--; numTarea-=1;

        //capturo el elemento que quiero borrar.
        let eTareaBorrar = lTareas.children[numTarea];
        //borro ese elemento de la lista.
        lTareas.removeChild(eTareaBorrar);
=======
        let indice = numTarea - 1; 

        //capturo el elemento que quiero borrar.
        let eTareaBorrar = lTareas.children[indice];
        //borro ese elemento de la lista.
        lTareas.removeChild(eTareaBorrar);

        //lTareas.removeChild(lTareas.children[numTarea-1]);
>>>>>>> 0877f6b93c1f1b49d8d9bae1677cf82f07eae034
    }else{
        alert("Número no válido.");
    }
}