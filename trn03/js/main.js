const HD=document.querySelector('#hd');
window.addEventListener('scroll', ()=>{
    let sct=window.scrollY;
    sct>0 ? HD.classList.add('on') : HD.classList.remove('on')    
});


const SLIDEBAR = document.querySelector('.slide_bottom .bar');

const mainSlider = new Swiper('.main_slide', {
    loop:true,
    autoplay:{
      delay:2000,      
    },
    slidesPerView:2,
    spaceBetween: 100,
    pagination: {
        el: '.main_visual .page',
        type: "fraction",
    },
    navigation: {
        nextEl: '.main_visual .btn_next',
        prevEl: '.main_visual .btn_prev',
    },
    // autoplayDisableOnInteraction:false,
});

SLIDEBAR.classList.add('on');
mainSlider.on('slideChangeTransitionEnd', ()=>{
    SLIDEBAR.classList.add('on')
});

mainSlider.on('slideChangeTransitionStart', ()=>{
    SLIDEBAR.classList.remove('on')
});



const prSlider = new Swiper('.pr_slide', {
    loop:true,
    slidesPerView:4,
    spaceBetween: 30,
    pagination: {
        el: '.pr_btn .page',
        //type: "fraction",
    },
    navigation: {
        nextEl: '.pr_btn .btn_next',
        prevEl: '.pr_btn .btn_prev',
    },
});



//scroll event
const SEC = document.querySelectorAll('.action');
const WT=window.innerHeight;

window.addEventListener("scroll", ()=>{
        let sct=window.scrollY;
        SEC.forEach(e=>{
            let secTop = e.offsetTop;
            let secH=e.clientHeight;
            sct > secTop -(WT-secH)/2 - 200 ? e.classList.add('on') : e.classList.remove('on');
        });

});


const prSlider02 = new Swiper('.pr2_slide', {
    loop:true,
    slidesPerView:2,
    // autoplay:{
    //     delay:2000,      
    // },
    spaceBetween: 120,
    pagination: {
        el: '.pr_btn .page',
        //type: "fraction",
    },
    navigation: {
        nextEl: '.pr_btn .btn_next',
        prevEl: '.pr_btn .btn_prev',
    },
});

const sItm = document.querySelectorAll('.sc04 .swiper-slide');
//   = $('.swiper-slide')랑 같은 뜻
const itm = document.querySelector('.sc04 .swiper-slide-active');
itm.classList.add('on');
prSlider02.on('slideChangeTransitionEnd', () => {
    // let idx = mainSlider.realIndex;
    // console.log(idx);
    const itm = document.querySelector('.sc04 .swiper-slide-active');
    itm.classList.add('on');
});
prSlider02.on('slideChangeTransitionStart', ()=>{
    sItm.forEach(e=>e.classList.remove('on'));
});



const prSlider03 = new Swiper('.pr3_slide', {
    loop:true,
    navigation: {
        nextEl: '.pr_btn .btn_next',
        prevEl: '.pr_btn .btn_prev',
    },
});