const express = require('express');
const path = require('path')
const app = express();
const port = 3002;

let rutaPublic = path.join(__dirname, 'public');
app.use(express.static(rutaPublic));

app.listen(port, serverStart());

function serverStart() {
    console.log("Servidor iniciado en htt//localhost:"+port)
}