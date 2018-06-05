$(document).ready(function () {

  $('#fullpage').fullpage({
    scrollBar: true
  });

  $(document).on('click', '#moveDown', function(){
    $.fn.fullpage.moveSectionDown();
  });

  var wow = new WOW(
    {
      offset: 1,
    }
  );
  wow.init();

});