// Cargando dependencias
var path = require('path'),
    exphdn = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    moment = require('moment'),
    multer = require('multer');
 var routes = require('./routes');

module.exports = function(app){
    // Agregando Middlewares Generales
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({'extended':true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser('algun-valor-secreto-aqui'));
    
    // Configuracion de archivos estaticos
    app.use('/public', express.static(path.join(__dirname, '../public')));

    // Si la aplicacion esta en modo
    // de desarrollo se usa errorhandler
    if('development' === app.get('env')){
        app.use(errorHandler());
    }
    
    // Se regresa la app configurada
    return app;
};