$(function(){
// ---------------------------

    $('.btn li').on('click', slidingbal);
    function slidingbal() {
        let idx=$(this).index();
        console.log(idx);
        $('.case').animate({top:-640*idx},1500, "easeOutBounce")
    }

// ---------------------------
});