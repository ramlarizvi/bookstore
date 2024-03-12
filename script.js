searchForm= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active')
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active')
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

let swiperHome = new Swiper('.home__swiper' ,{
    loop: true,
    spaceBetween:-24,
    grabCursor: true,
    slidesPerView:'auto',
    centeredSlides:'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -62,
        }
    }
})