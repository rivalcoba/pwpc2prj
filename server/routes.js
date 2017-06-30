// Se cargan dependencias
var express = require("express");
// Moulo Router
var router = express.Router();

// Se cargan los controladores
var homeController = require('../controllers/home');
var imageController = require('../controllers/image');

module.exports = function(app){
    // Se asocian las rutas
    // a los metodos actuadores (action methods)
    // de los controladores
    router.get('/', homeController.index);
    router.get('/home/index', homeController.index);
    router.post('/images/index/:image_id', imageController.index);
    router.post('/images/create', imageController.create);
    router.post('/images/like/:image_id', imageController.like);
    router.post('/images/comment/:image_id', imageController.comment);
    
    // Se cargar las definiciones
    // a la app
    app.use(router);
    
    return app;
};