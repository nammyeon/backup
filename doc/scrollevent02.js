$(function(){

    // let con02Top = $('.con02').offset().top;
    // $(window).on('scroll', function(){
    //     let sct=$(window).scrollTop();
    //     console.log(sct,con02Top);
    //     if(sct > con02Top) {
    //         $('.con02').addClass('on')
    //     }else{
    //         $('.con02').removeClass('on')
    //     }
    // });


    
    $(window).on('scroll', function(){
        let sct=$(window).scrollTop();
        $('.ani').each(function(index,item){
            let secTop = $(this).offset().top;
            sct > secTop - 300 ? $(this).addClass('on') : $(this).removeClass('on');
            
        })
    })
});