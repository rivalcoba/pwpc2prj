module.exports = {
    // Action Method
    index:(req, res)=>{
        // Creando el Viewmodel
        var viewModel = {
            images: [
                {
                    uniqueId: 1,
                    title: "Sample test Image 1",
                    description:'An awesome Image 1',
                    filename: 'sample.png',
                    views:0,
                    likes:0,
                    timestamp: Date.now()
                },
                {
                    uniqueId: 2,
                    title: "Sample test Image 2",
                    description:'An awesome Image 2',
                    filename: 'sample.png',
                    views:0,
                    likes:0,
                    timestamp: Date.now()
                },
                {
                    uniqueId: 3,
                    title: "Sample test Image 3",
                    description:'An awesome Image 3',
                    filename: 'sample.png',
                    views:0,
                    likes:0,
                    timestamp: Date.now()
                },
                {
                    uniqueId: 4,
                    title: "Sample test Image 4",
                    description:'An awesome Image 4',
                    filename: 'sample.png',
                    views:0,
                    likes:0,
                    timestamp: Date.now()
                }
            ]
        };
        res.render("index", viewModel);
    }
};
// TO DO: U2_8#6 continuar