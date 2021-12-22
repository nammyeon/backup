$(function(){

    $('.header .menu_btn i').on('click', function(){
        $('.header').toggleClass('on');
        $(this).toggleClass('on');
    });

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
    });

    $('.d_slide').slick({
        arrows:false,
        slidesToShow:2,
    });

    $('.text_slide').slick({
        arrows:false,
        slidesToShow:1,
        fade:true,
        asNavFor:$('.people_slide'),
    });

    $('.people_slide').slick({
        arrows:false,
        slidesToShow:1,
        fade:true,
        asNavFor:$('.text_slide'),
    });

    $('.Dbtn li').on('click',function(){
        var idx=$(this).index();
        $('.people_slide').slick('slickGoTo', idx);
    });

});