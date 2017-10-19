// Cargando ExpressJs
const express = require('express');
// Cargano path
const path = require('path');
// Cargando configuracion
const config = require('./server/configure');
// Creando una instancia de la aplicacion
const app = express();
// Agregando al dependencia Mongoose
const mongoose = require('mongoose');
// Estableciendo variables de entorno de la app
app.set('port', process.env.PORT || 3000);
app.set('ip', process.env.IP || "0.0.0.0");
// Configurando la ruta de las vistas
app.set('views', path.join(__dirname + '/views'));
// Aplicando Configuraciones
config(app);
// Conexion con mongoose
mongoose.connect('mongodb://localhost/picito');
mongoose.connection.on('open', function(){
    console.log('> Conexion con base de datos exitosa...');
});

// Consultando variable de entorno
var IP = app.get('ip');
var PORT = app.get('port');
// Iniciando el servidor
app.listen(PORT, IP, (err)=>{
    if(err){
        console.log(`> error: ${err}`);
        throw err;
    }
    console.log(`> Servidor escuchando en http://${IP}:${PORT}`);
});

