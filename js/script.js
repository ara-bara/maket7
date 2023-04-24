/*burger menu*/
let menu__button = document.querySelector('.menu__button');
let menu__burger = document.querySelector('.menu__burger');
menu__button.addEventListener('click', function(){
    menu__button.classList.toggle('active');
    menu__burger.classList.toggle('active');
})

/*slider*/
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:false,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true
    });
});

