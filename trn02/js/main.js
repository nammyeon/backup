$(function(){
// ----------------------------------------

    $('#main').fullpage({
        anchors:['c01', 'c02', 'c03', 'c04', 'c05', 'footer'],
		//navigation: true,
        afterLoad: function(origin, destination, direction){
            // console.log(origin.index)
            let txt = $('.navbar>li').eq(destination.index).find('a').text();
            $('.section').eq(destination.index).addClass('on').siblings().removeClass('on');
            $('.navbar>li').eq(destination.index).addClass('on').siblings().removeClass('on');
            
            // console.log(txt);
            $('.now').text(txt);
            
            destination.index===0 ? $('.header').fadeIn() : $('.header').fadeOut();
            destination.index===0 ? $('.wheel').fadeIn() : $('.wheel').fadeOut();
        },
    });

    $('.b_slider').slick({
        arrows:false,
        asNavFor:'.b_slider',
        autoplay:true,
    });

    $('.brand_name li').on('click', function(){
        $(this).addClass('on').siblings().removeClass('on');
        let idx=$(this).index();
        // console.log(idx);
        $('.b_slider').slick('slickGoTo', idx);
    });

    $('.b_slider').on('afterChange', function(e,s,c){
        // console.log(c);
        $('.brand_name li').eq(c).addClass('on').siblings().removeClass('on');
    });
    
    
    $('.all_open').on('click',function(){
        $(this).toggleClass('on');
        $('.all_menu').slideToggle();
        if($('.all_open').hasClass('on')) {
            $.fn.fullpage.setAllowScrolling(false);
        } else {
            $.fn.fullpage.setAllowScrolling(true);
        }
    });

    $('.all_menu').on('click', function(){
        $('.all_menu').slideUp();
        $.fn.fullpage.setAllowScrolling(true);
        $('.all_open').removeClass('on');
    })




// ----------------------------------------
});