$(function(){
// --------------------------------------------

    

    $('.slider').slick({
        slidesToShow:1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });

    $('#story .con02').slick({
        slidesToShow:1,
        arrows:false,
        fade:true,
    });

 
    $('#story .list li').on('click', function(){
        var idx=$(this).index();
        // console.log(idx);
        $('#story .con02').slick('slickGoTo', idx);
        $(this).addClass('on').siblings().removeClass('on');
    });
    


    $('.m_slide').slick({
        arrows:false,
        asNavFor:'.pro',
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnFocus:false,
        pauseOnHover:false,

    });

    $('.t_slide').slick({
        arrows:false,
        asNavFor:'.pro',
    });


    $('.s_slide02').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:0,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:false,
        speed:500,
        variableWidth: true,
        cssEase:"linear",
    });

    $('.toggle i').on('click', function(){
        $('#wrap').toggleClass('oo');
        $(this).toggleClass('oo')
    });


    AOS.init({

    });


    $('.mopen').on('click', function(){
        $('#header').toggleClass('on')
        $(this).toggleClass('on')
    });

    $('.gnb>ul>li>a').on('click', function(){
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.depthNav').slideUp();
    });

    $(window).on('resize', function(){
        $('.depthNav').removeAttr('style')
    });



    // 반응형
    
    var slider = $('#sauce .s_slide01');  
    var slickOptions = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay:true,
		autoplaySpeed:2000,
		dots:false,
		arrows:false
        
	};

    slider.slick(slickOptions);

    $(window).on('load resize', function(){
        if($(window).width() > 768) {
            slider.slick('unslick');
        } else {
            slider.not('.slick-initialized').slick(slickOptions);
        }
    });
    
// --------------------------------------------
});