const express = require('express');
const app = express();
const path = require('path')
const puerto = 3000

app.set('view engine', 'ejs');

let rutaPlantillas = path.join(__dirname, 'plantillas');
app.set('views', rutaPlantillas);

// Esta linea lo que le dice a express es que
// devuelva cualquier fichero contenido en la carpeta
// public que sea llamado en la URL
let rutaPublic = path.join(__dirname,'public')
app.use(express.static(rutaPublic));

// app.get('/', function (peticion, respuesta) {
//     respuesta.sendFile(__dirname+"/public/index.html")
// });


app.get('/app1', function (req, res) {
    let respu = "Respuesta: ";
    let dias = ['Lunes', 'Martes', 'Miercoles'];
    for (const dia of dias){
        respu=respu+" "+dia;
    }
    res.send(respu)
})


app.get('/diaSemana/:numero', function (req, res) {
    let num = req.params.numero;
    if (num == 1) {
        res.send("Lunes")
    } else {
        res.send("No es lunes")
    }
})

let usuario = {
    "user1" : "Juanito",
    "user2" : "Paco",
    "user3" : "Pepe",
}
app.get('/usuario/:usr', function (req, res) {
    let u = "user"+ req.params.usr;
    res.send(usuario[u]);
})

app.get('/usuarioPlantilla/:num', function (req, res) {
    let u = "user"+req.params.num;
    let objetoPlantilla = {"dato":usuario[u]};
    res.render("usuario", objetoPlantilla);
})

app.listen(puerto, iniciaServidor());

function iniciaServidor() {
    console.log(`Servidor a la escucha en http://localhost:${puerto}`);
};
