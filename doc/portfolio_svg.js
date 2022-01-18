$(function(){
// -------------------------------------------------------

    let sc=$('.section');
    let sideBar=$('nav li');
    $('#main').fullpage({
        anchors:['intro' ,'portfolio_01', 'portfolio_02', 'portfolio_03', 'portfolio_04', 'portfolio_05', 'profile'],
        afterLoad: function(origin, destination, direction){
            let idx=destination.index
            sc.eq(idx).addClass('on').siblings().removeClass('on');
            sideBar.eq(idx).addClass('on').siblings().removeClass('on');
        },
    });

    let type=new Typed('.slogan_txt', {
        strings:['My name is Namyeon','namyeon is YOUNG'],
        typeSpeed: 100,
        backSpeed: 100,
        loop:true,
    });

// -------------------------------------------------------
})