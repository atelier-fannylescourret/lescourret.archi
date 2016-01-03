(function($) {
  $(document).ready(function() {
    initialize_brand();
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

  var header = null;
  var minified = false;
  var scrollTimeout;  // global for any pending scrollTimeout

  function initialize_brand() {
    header = $('header');
    minify_brand();
    if(!minified) {
      $(window).scroll(scroll_manager);
    }
  }

  function scroll_manager() {
    if (scrollTimeout) {
      // clear the timeout, if one is pending
      clearTimeout(scrollTimeout);
      scrollTimeout = null;
    }
    scrollTimeout = setTimeout(minify_brand, 50);
  }

  function minify_brand() {
    if(minified) { return; }
    if ( $(window).scrollTop() >= 144 ) {  // Floor detection.
      header.addClass('minified');
      minified = true;
      $(window).unbind('scroll', scroll_manager);
    }
  }

})(jQuery);
