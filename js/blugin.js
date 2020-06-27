$(document).ready(function(){
    $(".width .dropdown-menu").css("width",$(window).width() - 45)
    $(".main,.main .content").css("height",$(window).height());
    
    $(".popular .content").on({
        mouseenter:function(){
            $(this).css("marginBottom","30px"),
            $(".full").css("marginTop","30px")
        },
        mouseleave:function(){
            $(this).css("marginBottom","0px"),
            $(".full").css("marginTop","0px")
        }
    })
})