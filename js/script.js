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

let count = 0;
function like(likeId) {
    let like = document.getElementById(likeId);
    if (like.classList.contains('fa-regular')) {
        like.classList.remove('fa-regular');
        like.classList.add('fa-solid');
        count++;
    } else {
        like.classList.remove('fa-solid');
        like.classList.add('fa-regular');
        count--;
    }
    count = count < 0 ? 0 : count; // перевірка на від'ємність
    document.getElementById('count').innerHTML = count;
}
