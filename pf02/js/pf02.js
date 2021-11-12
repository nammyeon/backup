$(function(){
// --------------------------------
    $(window).on('scroll',function(){
        var sct=$(window).scrollTop();
        console.log(sct);
        if(sct>0) {
            $('#header').addClass('on')
        }else $('#header').removeClass('on')
    });


    $('#header .toggle i').on('click', function(){
      $('#wrap').toggleClass('oo');
      $(this).toggleClass('oo')

    })
    
    
    
    $('.main_slider').slick({
      arrows:false,
      autoplay:true,
      pauseOnHover:false,
      pauseOnFocus:false,
      dots:true,
      
    });
    
    
    $('#model .container').slick({
      arrows:false,
      autoplay:true,
      autoplaySpeed: 2000,
      pauseOnHover:false,
      pauseOnFocus:false,
      slidesToShow:4,
      dots:true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    });
    
    $('#model .model_btn .xi-angle-left').on('click', function(){
      $('#model .container').slick('slickPrev')
    });
    
    $('#model .model_btn .xi-angle-right').on('click', function(){
      $('#model .container').slick('slickNext')
    });
    
    
    
    $('.mopen').on('click', function(){
      $('.top_nav').toggleClass('on');
      $(this).toggleClass('on');
    });




    $('#popup i').on('click', function(){
      $('#popup').hide();
    })
    
    // --------------------------------
  });