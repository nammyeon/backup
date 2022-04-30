$(function(){
    // ---------------------------

    $(".menuBtn").on("click", function(){
        $(".gnb").toggleClass("on");

    })
    $("#header .menu > li > i").on("click", function(){
        if ($(".gnb").hasClass("on")){
            $(this).parent().find(".depth").stop().slideToggle();
            $(this).parent().siblings().find(".depth").slideUp();
        }else {
            $(this).parent().find(".depth").stop().slideUp();
            $(this).parent().siblings().find(".depth").slideUp();
        }

    })


    // ----------------------------
})