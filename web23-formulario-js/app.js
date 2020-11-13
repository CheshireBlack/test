function saludar() {
    let elementoInput
    elementoInput = document.getElementById("idInput");
    console.log(elementoInput);
    if (elementoInput.value != "") {
        alert("Hola "+elementoInput.value)
        elementoInput.value = "";
    }
    
    
}