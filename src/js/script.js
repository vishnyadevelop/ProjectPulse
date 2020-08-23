$(document).ready(function(){
    $('.slider__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow-left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow-right.png"></img></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
        ]
    });
});