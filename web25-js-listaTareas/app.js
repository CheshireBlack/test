let listaTareas = document.getElementById("listaTareas");

function anyadirTarea() {
    //tomo el valor de input
    let eTarea = document.getElementById("idTarea")

    //compruebo si tiene algo de texto
    if (eTarea.value != "") {
        //si tiene texto, añado el elemento en la lista
        anyadirElemento(eTarea.value);
        //despues de añadir borro el elemento input
        eTarea.value = "";
    }
    //si no tiene texto, no hago nada
}

//funcion añadir elemento a la lista
//cogera un pàrámetro y lo añadirá a la listaTareas
function anyadirElemento(textoTarea) {
    //cojo el elemento de la lista
    let listaTareas = document.getElementById("listaTareas")
    //le añado un elemento de la lista con el texto
    //del parametro textoTarea
    listaTareas.innerHTML += "<li>" + textoTarea + "</li>";
}

