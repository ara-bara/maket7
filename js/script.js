/*slider*/
$(document).ready(function(){
    $('.slick-slider__list').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 4000
    });
});

//share
$(document).ready(function(){
    $('.share-item__slider-list').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 4000
    });
});


//new features
$(document).ready(function(){
    $('.features-item__slider-list').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 4000
    });
});
//burger menu
/*
$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').toggleClass('show');
    });
});*/

let likeCounter1 = 13; // Початкове значення лічильника
let likeCounterElem1 = document.getElementById("like-counter1");

let likeCounter2 = 23; // Початкове значення лічильника
let likeCounterElem2 = document.getElementById("like-counter2");

let likeCounter3 = 65; // Початкове значення лічильника
let likeCounterElem3 = document.getElementById("like-counter3");

let likeCounter4 = 2; // Початкове значення лічильника
let likeCounterElem4 = document.getElementById("like-counter4");

function like(likeId){
    let like = document.getElementById(likeId);
    if(like.classList.contains('fa-regular')){
        like.classList.remove('fa-regular');
        like.classList.add('fa-solid');
        if(likeId === "like1") {
            likeCounter1++;
            likeCounterElem1.innerHTML = likeCounter1;
        } else if (likeId === "like2") {
            likeCounter2++;
            likeCounterElem2.innerHTML = likeCounter2;
        } else if (likeId === "like3") {
            likeCounter3++;
            likeCounterElem3.innerHTML = likeCounter3;
        } else if (likeId === "like4") {
            likeCounter4++;
            likeCounterElem4.innerHTML = likeCounter4;
        }
    } else {
        like.classList.remove('fa-solid');
        like.classList.add('fa-regular');
        if(likeId === "like1") {
            likeCounter1--;
            likeCounterElem1.innerHTML = likeCounter1;
        } else if (likeId === "like2") {
            likeCounter2--;
            likeCounterElem2.innerHTML = likeCounter2;
        } else if (likeId === "like3") {
            likeCounter3--;
            likeCounterElem3.innerHTML = likeCounter3;
        } else if (likeId === "like4") {
            likeCounter4--;
            likeCounterElem4.innerHTML = likeCounter4;
        }
    }
}
/*
$(document).ready(function(){
    $('.photos__list').slick({
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4
    });
});



$(document).ready(function(){
    if ($(window).width() <= 1800) {
        $('.photos__list').slick({
            arrows: false,
            speed: 300,
            variableWidth: true
        });
    }
});
*/
