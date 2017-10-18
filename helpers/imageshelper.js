module.exports = {
    popular: function(){
        var images = [
            {
                uniqueId: 1,
                title: "Sample Image 1",
                description: "Awesome Description",
                filename: "sample.png",
                views: 0,
                likes: 0,
                timestamp: Date.now()
            },
            {
                uniqueId: 2,
                title: "Sample Image 2",
                description: "Awesome Description 2",
                filename: "sample.png",
                views: 2,
                likes: 2,
                timestamp: Date.now()
            },
            {
                uniqueId: 3,
                title: "Sample Image 3",
                description: "Awesome Description 3",
                filename: "sample.png",
                views: 3,
                likes: 3,
                timestamp: Date.now()
            },
            {
                uniqueId: 4,
                title: "Sample Image 4",
                description: "Awesome Description 4",
                filename: "sample.png",
                views: 4,
                likes: 4,
                timestamp: Date.now()
            },
        ];
        return images;
    }
};