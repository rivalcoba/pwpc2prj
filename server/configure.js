// Cargando dependencias
var path = require('path'),
    exphdb = require('express-handlebars'),
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
    // Configurando Handlebars
    // 1 Dando de alta el template engine
    // estableciendo el nombre y el
    // middleware
    app.engine('.hbs',exphdb.create({
        defaultLayout : 'main', // Plantilla por defecto
        extname : '.hbs', // Extencion de vistas
        layoutsDir : path.join(app.get('views'),'layouts'),
        partialsDir : [path.join(app.get('views'),'partials')],
        helpers : {
            timeago : function(timestamp){
                return moment(timestamp).startOf('minute').fromNow();
            }
        }
    }).engine);

    // Se establece a hbs como
    // el Template engine de trabajo
    app.set('view engine', '.hbs');

    // Agregando Middlewares Generales
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({'extended':true}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser('algun-valor-secreto-aqui'));

    // Se aplican la configuracion de rutas
    app = routes(app);

    // Configuracion de archivos estaticos
    // Es buena practica que los estaticos
    // esten al final
    app.use('/public', express.static(path.join(__dirname, '../public')));

    // Si la aplicacion esta en modo
    // de desarrollo se usa errorhandler
    if('development' === app.get('env')){
        app.use(errorHandler());
    }
    
    // Se regresa la app configurada
    return app;
};