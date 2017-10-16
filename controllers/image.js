module.exports = {
    // Action Methods
    index : (req, res)=>{
        // Agregando el ViewModel
        var ViewModel = {
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
        res.render("image", ViewModel);
    },
    create : (req, res)=>{
        res.end(`> Se crea nueva imagen`);
    },
    like : (req, res)=>{
        res.end(`Like de la imagen: ${req.params.image_id}`);
    },
    comment : (req, res)=>{
        res.end(`Comentario de la imagen: ${req.params.image_id}`);
    }
};

