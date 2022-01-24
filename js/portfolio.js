$(function(){
// -------------------------------------------------------

    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        responsiveWidth:769,
        anchors:['intro' ,'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'etc', 'profile'],
        afterLoad: function(origin, destination, direction){
            let idx=destination.index
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });

    $('.cover_btn').on('click', function(){
        $(this).toggleClass('on');
        $('#cover').stop().slideToggle(); //fadeToggle
    });
    
    // let cloneMenu = $('nav>ul').clone();
    // console.log(cloneMenu);
    // $('#cover').append(cloneMenu);

    $('#cover .cl').on('click', function(){
        $('#cover').slideUp(); 
        $('.cover_btn').removeClass('on');
        $('.cNav li a').removeClass('on');
        $('.cNav .d_nav').slideUp();
    });
    
    $('#cover').on('scroll wheel touchmove', function(){
        return false;
    });


    // $('.etc .slide_wrap').slick({
    //     arrows:false,
    //     slidesToShow:2,
    // });


    $('#cover .dNav_btn').on('click', function(){
        $('.cNav .d_nav').slideToggle();
        $(this).toggleClass('on');
        $(this).parent().siblings().find('a').removeClass('on');
    });



    // mobile
        
    var slider = $('.etc_wrap');  
    var slickOptions = {
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplaySpeed:2000,
		dots:true,
		arrows:false,
        
	};

    slider.slick(slickOptions);

    $(window).on('load resize', function(){
        if($(window).width() > 768) {
            slider.slick('unslick');
        } else {
            slider.not('.slick-initialized').slick(slickOptions);
        }
    });

    $('.s_btn i.xi-angle-left').on('click', function(){
        $('.etc_wrap').slick('slickPrev');
    });
    $('.s_btn i.xi-angle-right').on('click', function(){
        $('.etc_wrap').slick('slickNext');
    });

    $(window).on('resize', function(){
        $('#cover').removeAttr('style');
    });


// -------------------------------------------------------
})