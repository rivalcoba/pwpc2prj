module.exports = {
    newest : function(){
        var comments = [
            {
                image_id: 1,
                email: "test@test.com",
                name: "Test Tester",
                gravatar: "http://lorempixel.com/75/75/animals/1",
                comment: "Este es un comentario",
                timestamp: Date.now(),
                image : {
                    uniqueId: 1,
                    title: "Sample Image 1",
                    description: "Awesome Description",
                    filename: "sample.png",
                    views: 1,
                    likes: 1,
                    timestamp: Date.now()
                }
            },
            {
                image_id: 2,
                email: "test2@test.com",
                name: "Test Tester2",
                gravatar: "http://lorempixel.com/75/75/animals/2",
                comment: "Este es un comentario 2",
                timestamp: Date.now(),
                image : {
                    uniqueId: 2,
                    title: "Sample Image 2",
                    description: "Awesome Description 2",
                    filename: "sample.png",
                    views: 2,
                    likes: 2,
                    timestamp: Date.now()
                }
            }
        ];
        return comments;
    }
};