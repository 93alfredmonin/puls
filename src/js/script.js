$(document).ready(function () {
    $('.corusel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.png" alt=""></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                dots:true,
                arrows: false
            }
        }
    ]
    });
});