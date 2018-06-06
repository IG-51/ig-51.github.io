// добавление классов active
$(document).ready(function(){
	$( '.header__menu a' ).on( 'click', function () {
		$( '.header__menu' ).find( 'li.active' ).removeClass( 'active' );
		$( this ).parent( 'li' ).addClass( 'active' );
	});

	$( '.banner__rhombs a' ).on( 'click', function () {
		$( '.banner__rhombs' ).find( '.active' ).removeClass( 'active' );
		$( this ).children( '' ).addClass( 'active' );
	});

	$( '.team__member' ).on( 'click', function () {
		$( '.team' ).find( '.team__member.active' ).removeClass( 'active' );
		$( this ).addClass( 'active' );
	});

  // 	$( '.slider__rhombs a' ).on( 'click', function () {
  // 		$( '.slider__rhombs' ).find( '.active' ).removeClass( 'active' );
  // 		$( this ).children( '' ).addClass( 'active' );
  // 	});
  // });

  // добавление класса is-active
    $( '.hamburger' ).click(function () {
      $( this ).toggleClass('is-active');
      $( '.header__menu ul' ).fadeToggle();
    });


  // иницилизация wow.js
  wow = new WOW(
  {
    boxClass:     'wow',						// default
    animatedmateClass: 'animated',	// default
    offset:       0,								// default
    mobile:       true,							// default      
    live:         true							// default
  })
  wow.init();

    $('.slider').slick({
      dots: true,
      arrows: false,
      draggable: false,
      fade: true,
      dotsClass: 'slider__rhombs'
    });
});