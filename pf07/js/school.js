$(function(){
// ------------------------------------------------

    $('.top_banner i').on('click',function(){
        $('.top_banner').slideUp();
    });


    $('#header .gnb>ul>li').on('mouseover', function(){
        $('.gnb').addClass('on')
    });

    $('#header .gnb>ul>li').on('mouseout', function(){
        $('.gnb').removeClass('on')
    });


    $('.nav_top .search>i').on('click', function(){
        $('.searchForm').toggleClass('on');
        $(this).toggleClass('on');
    })

    $('.t_slide').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });

    $('.t_btn .xi-angle-left').on('click', function(){
        $('.t_slide').slick('slickPrev');
    });

    $('.t_btn .xi-angle-right').on('click', function(){
        $('.t_slide').slick('slickNext');
    });


    $('#notice .noticeTab li').on('click', function(){
        var idx = $(this).index();
        // console.log(idx);
        $('#notice .not_con').eq(idx).addClass('on').siblings().removeClass('on');
        $(this).addClass('on').siblings().removeClass('on');

    });
    

    $('.new_content').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        slidesToShow:4,
        dots:true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow:1,
            }
        }]
    });

    $('#news .tab_news ul li').on('click', function(){
        var Tnew = $(this).index();
        console.log(Tnew);
        $(this).addClass('on').siblings().removeClass('on');
        $('.new_content').eq(Tnew).addClass('on').siblings().removeClass('on');
        
    });

    $('.linkList ul').on('init reinit afterChange', function(e,s,c){
        let cnt=(c ? c+1 : 1);
        let totalCnt =  s.slideCount;
        // console.log(cnt,totalCnt);
        $('.num').html(`<span>${cnt}</span> / <strong>${totalCnt}</strong>`)
    })


    $('.linkList ul').slick({
        arrows:false,
        slidesToShow:6,
        slidesToScroll: 6,
        responsive: [{
            breakpoint:768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }],

    });



    $('#link .l_btn .xi-angle-left').on('click', function(){
        $('.linkList ul').slick('slickPrev');
    });

    $('#link .l_btn .xi-angle-right').on('click', function(){
        $('.linkList ul').slick('slickNext');
    });


    $('.movie .mv01').YTPlayer({
        videoURL:'https://youtu.be/fuj0MR-7vDA',
        containment:'self',
        autoPlay:true, 
        mute:true,
        startAt:0,
        opacity:1,
        showControls:false,
        playOnlyIfVisible:true,
        optimizeDisplay: false,
    });


    $('.side_menu .side_nav>li>a').on('click', function(){
        $(this).next().stop().toggleClass('on');
        $(this).parent().siblings().find('.side_depth').removeClass('on');
        $(this).parent().toggleClass('on').siblings().removeClass('on');
    });

    $(window).on('scroll', function(){
        var sct=$(window).scrollTop();
        if ($(window).width()>768) {
            $('.side_menu').css({top:500 + sct});

        };
    });


    $('.mopen').on('click', function(){
        $(this).toggleClass('on')
        $('#header').toggleClass('on');
    });

    // ----------mobile-----

    $('.mo_sche_btn').on('click', function(){
        if($(window).width() < 769) {
            $('.scheBottom').toggleClass('on');
            $(this).toggleClass('on');

        };
    });

    $('#notice .noticeTab li').on('click', function(){
        if($(window).width() < 769) {
            $(this).addClass('on').siblings().removeClass('on');
        }
    });


    $('.gnb>ul>li>a').on('click', function(){
        if($(window).width() < 769) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.d_nav').slideUp();
            $(this).parent().siblings().find('.d_nav>li>a').removeClass('on');
            $(this).siblings().find('.dd_nav').stop().slideUp();
            $(this).toggleClass('on');
            $(this).parent().siblings().find('a').removeClass('on');
        };
    });

    $('.d_nav>li>a').on('click', function(){
        if($(window).width() < 769) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.dd_nav').slideUp();
            $(this).toggleClass('on');
            $(this).parent().siblings().find('a').removeClass('on');
        };
    });


    $(window).on('resize', function(){
        $('.gnb').removeAttr('style');
    });


// ------------------------------------------------
});