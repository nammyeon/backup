$(function(){
    $('.main_slider').slick({
        autoplay:true,
        autoplaySpeed: 2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        arrows:false,
        dots:true,
        

    });



    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>1000) {
            $('#section02 figure').addClass('on')
        }else $('#section02 figure').removeClass('on')
    });


    $('#section04 .container').slick({
        arrows:false,
        autoplay:true,
        pauseOnFocus:false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        dots:true,

    });

    $('#section04 .xi-angle-left').on('click', function(){
        $('#section04 .container').slick('slickPrev')
    });
    $('#section04 .xi-angle-right').on('click', function(){
        $('#section04 .container').slick('slickNext')
    });







    $('#popup i').on('click',function(){
        $(this).parent().hide();
    });




    $('#toTop').on('click',function(){
        $('html, body').animate({scrollTop:0},500)
    });


    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        if(sct>500) {$('#toTop').fadeIn()
    }else{
        $('#toTop').fadeOut()
    }
    });




});