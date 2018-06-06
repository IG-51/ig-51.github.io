$(document).ready(function(){
  $('.testimonials__slider').slick({
    slidesToShow: 2,
    prevArrow: $('.testimonials__content_prev'),
    nextArrow: $('.testimonials__content_next'),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});