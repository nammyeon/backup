$(function(){

    $('.header .menu_btn i').on('click', function(){
        $('.header').toggleClass('on');
        $(this).toggleClass('on');
    });

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnFocus:false,
        pauseOnHover:false,
    });

    $('.main_visual figure').eq(1).addClass('on');
    $('.main_slider').on('afterChange', function(e,s,c){
        $('.main_visual figure').eq(c+1).addClass('on').siblings().removeClass('on');
    });

    $('.d_slide').slick({
        arrows:false,
        slidesToShow:2,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnFocus:false,
        pauseOnHover:false,
        responsive: [{
            breakpoint:768,
            settings:{
                slidesToShow:1,
            }
        }]
    });

    $('.diabtn .xi-angle-left-thin').on('click', function(){
        $('.d_slide').slick('slickPrev');
    });
    $('.diabtn .xi-angle-right-thin').on('click', function(){
        $('.d_slide').slick('slickNext');
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

    $('.people_slide').on('afterChange', function(e,s,c){
        $('.people_slide figure').eq(c).addClass('on').siblings().removeClass('on');
    });


    $('.doctor .xi-angle-left-thin').on('click', function(){
        $('.people_slide').slick('slickPrev');
    });
    $('.doctor .xi-angle-right-thin').on('click', function(){
        $('.people_slide').slick('slickNext');
    });

    $('.Dbtn li').on('click',function(){
        $(this).addClass('on').siblings().removeClass('on');
        var idx=$(this).index();
        $('.people_slide').slick('slickGoTo', idx);
    });



    $('.header .gnb>ul>li>a').on('click',function(){
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.d_nav').slideUp();
    });


    $(window).on('resize', function(){
        $('.d_nav').removeAttr('style');
    });


    const SEC = document.querySelectorAll('.action');
    const WT=window.innerHeight;
    
    window.addEventListener("scroll", ()=>{
            let sct=window.scrollY;
            SEC.forEach(e=>{
                let secTop = e.offsetTop;
                let secH=e.clientHeight;
                sct > secTop -(WT-secH)/2 - 400 ? e.classList.add('oo') : e.classList.remove('oo');
            });
    
    });


    // sub_info-----------------------

    $('.hos .sub_slide figure').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnFocus:false,
        pauseOnHover:false,
        dots:true,
    });


});