$(function(){
// -----------------------------------
    $('#top_banner i').on('click', function(){
        $('#top_banner').slideUp(200);
    });


    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        fade:true,
        speed:2000,
    });


    $('.pr_slider').slick({
        arrows:false,
        slidesToShow: 5,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },

          ]
    });


    $('#link select').on('change', function(){
        var link = $(this).val();
        if(link) window.open(link);

    });

    $('.mopen').on('click', function(){
        $('nav').toggleClass('on');
        $(this).toggleClass('on');
    });
// -----------------------------------
});