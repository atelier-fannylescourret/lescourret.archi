(function($) {
  $(document).ready(function() {
//    initialize_brand();
//    initialize_scrollspy();
//    initialize_carousel();
  });

  function initialize_scrollspy() {
    console.log("Initializing menu's scroll spy.");
    $('body').scrollspy({
      offset: 0,
      method: 'offset',
      target: 'header'
    });
    $(window).on('activate.bs.scrollspy', function (e, args) {
      console.log(args);
    });
  }

  function initialize_carousel() {
    $('#actualite article > ul').each( function(index) {
      $(this).slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true  
      });
    });
  }

  function initialize_brand() {
    minify_brand();
  }

  var scrolling = false;

  function minify_brand() {
    console.log('minifying');
    header = $('header');
    if(header.hasClass('minified')) { return; }
    if ( $(window).scrollTop() >= 200 - 54 ) {  // Floor detection.
      header.addClass('minified');
      was_minified = true;
      $(window).unbind('scroll', minify_brand);
      scrolling = false;
    } else {
      $(window).scroll(function() {
        if(scrolling) return;
        console.log('scrolling');
        scrolling = true;
        minify_brand();
      });
    }
  }

})(jQuery);
