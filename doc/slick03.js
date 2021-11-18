$ (function(){
   //-------------------
   const mainSlider=$('.main_slider').slick({
       arrows:false,
       autoplay:true,
       pauseOnHover:false,
       pauseOnFocus:false,
       vertical:true, //아래위로 슬라이드
    //    fade:true, //페이드되며 슬라이드
     
   });

   let idx=1;
   mainSlider.on('afterChange', function(e,s,c){
        // console.log(c);
        $('.num').css({backgroundPositionY:-500*c-6000*idx});
        idx++; //idx=idx+1 과 같은 의미
   });
   

   //-------------------
})