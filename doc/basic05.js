$(function(){
//---------------------------------
$('#top_banner i').on('click', function(){
    // $('#top_banner').hide();
    $('#top_banner').slideUp();
});


$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,    
    pauseOnFocus:false,
    pauseOnHover:false,
});



$('.pic').slick({
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,    
    pauseOnFocus:false,
    pauseOnHover:false,
    asNavFor:'.pic',
});






$('.pr03_slider').slick({
    arrows:false,
    slidesToShow:5,
    autoplay:true,
    autoplaySpeed:2000,   
    pauseOnFocus:false,
    pauseOnHover:false,

    // centerMode:true,
    // centerPadding:'100px',
});

$('.pr03_slider figure').eq(7).addClass('on');
$('.pr03_slider').on('afterChange', function(e,s,c){
    // console.log(c)
    // c= 0, 1, 2 ....
    $('.pr03_slider figure').eq(c+7).addClass('on').siblings().removeClass('on');
    $('#product03 .slide_bar>span').css({left:c*100})
});



$('.pr04_slider').slick({
    arrows:false,
    slidesToShow:3,
    autoplay:true,
    autoplaySpeed:2000,   
    pauseOnFocus:false,
    pauseOnHover:false,
});


$('#product04 .xi-arrow-left').on('click', function(){
    $('.pr04_slider').slick('slickPrev');
});
$('#product04 .xi-arrow-right').on('click', function(){
    $('.pr04_slider').slick('slickNext');
});



$('#link select').on('change', function (){
    var link=$(this).val();
    if(link) window.open(link);
});


//---------------------------------
});