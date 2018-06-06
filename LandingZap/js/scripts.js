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


  // модальное
  $('a.go').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modalForm') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
		});
  });
  
	$('#modalClose, #overlay').click( function(){
		$('#modalForm')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});
});