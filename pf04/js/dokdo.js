$(function(){

    var main=$('.main_full').fullpage({
        responsiveWidth: 769,
        navigation: true,
        afterLoad:function(s,d,c){
            let idx=d.index;
            console.log(d.index);            
            idx==0 ? $('#header').addClass('on') : $('#header').removeClass('on');
        }
        
    });
    
    

  

    $('.notice .tab_menu li').on('click', function(){
        var idx=$(this).index();
        // console.log(idx);
        $('.tab_con').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.movie').YTPlayer({
        videoURL:'https://youtu.be/muB4_LNZ2Rk',
        containment:'self',
        autoPlay:true, 
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false,
        playOnlyIfVisible:true,
        optimizeDisplay: false,
    });


    $('.i_slide').slick({
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        asNavFor:$('.c_slide, .schedule .day'),
        
    });
    $('.c_slide').slick({
        arrows:false,
        slidesToShow: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        asNavFor:$('.i_slide, .schedule .day'),
        
    });
    $('.schedule .day').slick({
        arrows:false,
        slidesToShow: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        asNavFor:$('.c_slide, .schedule .i_slide'),
        
    });
    $('.banner').slick({
        slidesToShow: 3,
        arrows:false,
        autoplay:true,
        autoplaySpeed:0,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots:false,
        speed:6000,
        //centerMode:true,
        variableWidth: true,
        cssEase:"linear",
    });



    $('.Mbtn i').on('click', function(){
        $(this).toggleClass('on');
        $('.right_menu').toggleClass('on');

    })



    var slider = $('#header .gnb>ul');  
    var slickOptions = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay:true,
		autoplaySpeed:2000,
		dots:false,
		arrows:false,
        centerMode:true,
        
	};

    slider.slick(slickOptions);

    $(window).on('load resize', function(){
        if($(window).width() > 768) {
            slider.slick('unslick');
        } else {
            slider.not('.slick-initialized').slick(slickOptions);
        }
    });

// -------------------------------------------------


  




    
});