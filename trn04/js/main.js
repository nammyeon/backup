$(function(){
// ------------------------------------

$('#popUp').draggable();

$('#popUp a').on('click', function(){
    $(this).parent().fadeOut();
    return false;
});

$('.Search').on('click', function(){
    $('.searchForm').stop().slideToggle();
})

$(window).on('scroll', ()=>{
    let sct=$(window).scrollTop();
    sct > 0 ? $('#header').addClass('on') : $('#header').removeClass('on');
    sct > 300 ? $('#toTop').fadeIn() : $('#toTop').fadeOut();
    sct > sTop ? $('#Solution').addClass('on') : $('#Solution').removeClass('on');
});

$('.main_slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    fade:true,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots:true,
});

$('.main_slider figure').eq(0).addClass('on');
$('.main_slider').on('afterChange', function(e,s,c){
    $('.main_slider figure').eq(c).addClass('on').siblings().removeClass('on');
})

$('.Sp_slider').slick({
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    centerMode:true,
    slidesToShow:3,
    pauseOnHover:false,
    pauseOnFocus:false,
    centerPadding:"2rem",
});

$('.Sp_slider figure').eq(5).addClass('on');
$('.Sp_slider').on('afterChange', function(e,s,c){
    $('.Sp_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
});


$('.familyLink .link>a').on('click', function(){
    // e.preventDefault();
    $(this).prev().stop().slideToggle();
    $(this).find('i').toggleClass('on');
    return false;
});

$('#toTop').on('click', e=> {
    e.preventDefault();
    $('html,body').animate({scrollTop:0},700, function(){
        console.log("dddd")
    });
});


let sTop = $('#Solution').offset().top - 200;
// console.log(sTop);
// ------------------------------------
});