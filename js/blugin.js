$(document).ready(function(){
    $(".width .dropdown-menu").css("width",$(window).width() - 45
    $(".main,.main .content").css("height",$(window).height());
    
    $(window).on({
        load:function(){
            $("body").css("overflow","auto")
            $("#preloader").fadeOut(500)
        }
    })

})
