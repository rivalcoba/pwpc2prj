module.exports = {
    // Action Methods
    index : (req, res)=>{
        res.end(`Index de Imagen, se muestra imagen: ${req.params.image_id}`);
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

