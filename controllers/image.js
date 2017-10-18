// Dependencias
var fs = require('fs'),
    path = require('path');
// Importando el Helper sidebar
var sidebar = require("../helpers/sidebar");

module.exports = {
    // Action Methods
    index : (req, res)=>{
        // Agregando el ViewModel
        var viewModel = {
            image: {
                uniqueId: 1,
                title: "Sample Image 1",
                description: "Awesome Image",
                filename: "sample.png",
                views: 0,
                likes: 0,
                timestamp: Date.now() 
            },
            comments: [
                {
                    image_id: 1,
                    email: "test@testing.com",
                    name: "Test Tester",
                    gravatar: "http://lorempixel.com/75/75/animals/1",
                    comment: "This is my awesome opinion",
                    timestamp: Date.now()
                },
                {
                    image_id: 2,
                    email: "test2@testing.com",
                    name: "Test2 Tester2",
                    gravatar: "http://lorempixel.com/75/75/animals/2",
                    comment: "This is my awesome opinion 2",
                    timestamp: Date.now()
                }
            ]
        };
        // Ejecutando Helper Sidebar
        sidebar(viewModel,(viewModel)=>{
            res.render('image', viewModel);
        });
    },
    create : (req, res)=>{
        // Se implementa un CB
        var saveImage = ()=>{
            // Generando una lista de
            // caracteres validos
            var dictionary = "abcdefghijklmnopqertuvwxyz123456789";
            var imgUrl = "";
            // Creando un nombre de 6 caracteres
            // tomados al azar
            for(var i = 0; i < 6; i++){
                imgUrl += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
            }
            // Cargando el archivo a los estaticos
            var temPath = req.files[0].path;
            // Extrayendo la extension del archivo cargado
            var ext = 
                path.extname(req.files[0].originalname).toLowerCase();
            // Generando la ruta final de carga
            var targetPath = 
                path.resolve('./public/upload/' + imgUrl + ext);
            console.log(`> Path de archivo cargado: ${targetPath}`);
            // Almacenando el archivo si este cumple con una
            // politica de extensiones permitidas
            if(ext === '.png' ||
            ext === '.jpg' ||
            ext === '.jpeg' ||
            ext ==='.gif'){
                // Cambiando la ruta del archivo
                fs.rename(temPath, targetPath, (err)=>{
                    if(err) throw err;
                    // Redirecciona la app a...
                    res.redirect('/images/index/' + imgUrl);
                });
            }else{
                fs.unlink(temPath, (err)=>{
                    if(err) throw err;
                    console.log(`> Se borra archivo: ${temPath}`);
                    res.status(500).json(
                        {
                            error: 'Solo archivos de imagenes permitidos'
                        }
                    );
                });
            }
        };
        saveImage();
        //res.end(`> Se crea nueva imagen`);
    },
    like : (req, res)=>{
        res.end(`Like de la imagen: ${req.params.image_id}`);
    },
    comment : (req, res)=>{
        res.end(`Comentario de la imagen: ${req.params.image_id}`);
    }
};

