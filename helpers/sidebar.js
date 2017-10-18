var StatsHelper = require('./statshelper'),
    ImagesHelper = require('./imageshelper'),
    CommentsHelper = require('./commentshelper');
    // vm: viewmodel
    // cb: Callback
    module.exports = function(vm, cb){
        vm.sidebar = {
            stats: StatsHelper(),
            popular: ImagesHelper.popular(),
            comments: CommentsHelper.newest()
        };
        // Se manda a ejecutar el cb
        // pasandole el VM como parametro
        cb(vm);
    };

