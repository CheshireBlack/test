const express = require('express');
const app = express();
const puerto = 3000;

app.get('/saluda/:nombre', function (req,res) {
    let nom = req.params.nombre;
    res.send('Hola '+nombre)
})

app.get('/despide/:nombre', function (req,res) {
    let i = req.params.nombre;
    res.send('Adiós '+i)
})



app.listen(puerto, iniciaServidor());
function iniciaServidor() {
    console.log("Servidor en http://localhost:"+puerto);
}

