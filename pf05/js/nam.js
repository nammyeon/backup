$(function(){

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        // console.log(sct);
        if(sct>100) {
            $('#header').addClass('on')
        }else $('#header').removeClass('on')
    });


    $('#main_visual').slick({
        arrows:false,
        fade:true,
        // autoplay:true,
        pauseOnFocus:false,
        pauseOnHover:false,
    });

    $('.f_slide').slick({
        arrows:false,
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnFocus:false,
        pauseOnHover:false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
              }
            },
          ]
    });


    $('#favorite .btn .xi-angle-left-thin').on('click', function(){
        $('.f_slide').slick('slickPrev');
    });
    $('#favorite .btn .xi-angle-right-thin').on('click', function(){
        $('.f_slide').slick('slickNext');
    });

    $('.f_slide .case').eq(4).addClass('on');
    $('.f_slide').on('afterChange', function(e,s,c){
        $('.f_slide .case').eq(c+3).addClass('on').siblings().removeClass('on');
    });


  


    $('.popup').slick({
        arrows: false,
        draggable: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                draggable: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });

    $('.p_slide i').on('click', function(){
        $('.p_slide').removeClass('on');
    });

    $('.plus i').on('click', function(){
        let idx=$(this).index();
        // console.log(idx);
        $('.popup').slick('slickGoTo',idx);
        $('.p_slide').addClass('on').siblings().removeClass('on');
    });

    $('.pitm_slide').slick({
        arrows:false,
        pauseOnFocus:false,
        pauseOnHover:false,
        autoplay:true,
        autoplaySpeed:1500,
        fade:true,
    });


    $('#life figure').on('click', function(){
        $(this).toggleClass('on').siblings().removeClass('on');
    });


    $('#custom figure').mousemove(function(e){
        // console.log(e.clientX);
        // console.log(e.clientY);
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        $('.cursor').css({
            left: mouseX + "px",
            top : mouseY + "px",
        });
    });


    $('#header .rightNav i').on('click', function(){
        $('.searCase').addClass('on');
    });

    $('.searCase>i').on('click', function(){
        $('.searCase').removeClass('on');
    });
    // ----------mobile

    $('.Mopen').on('click', function(){
        $('#header').toggleClass('oo');
        $(this).toggleClass('oo');
    });


    $('.gnb>ul>li>a').on('click', function(){
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.d_nav').slideUp();
    });
    $('.d_nav>li>a').on('click', function(){
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.dd_nav').slideUp();
    });


    $(window).on('resize', function(){
        $('.d_nav').removeAttr('style');
        $('.dd_nav').removeAttr('style');
    });

  


    

    
    

})