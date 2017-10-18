$(function(){
    var isHide = true;
    // Oculta y muestra el formulario
    $('#post-comment').hide();
    $('#btn-comment').on('click',function(event){
        event.preventDefault();
        if(isHide){
            $('#post-comment').show();
            isHide = false;
        }else{
            $('#post-comment').hide();
            isHide = true;
        }
    });

    // Peticion de AJAX
    $("#btn-like").on('click',function(event){
        event.preventDefault();
        var imgId = $(this).data('id');
        $.post(`/images/like/${imgId}`).done(function(data){
            $('.likes-count').text(data.likes);
        });
    });
});

