(function($) {
    $(document).ready(function() {
      $('body').scrollspy({
        offset: 0,
        method: 'offset',
        target: 'header'
      });
/*      $('h1').sticky();
      $('hr.bar').sticky();
      $('hr.bar').on('sticky-start', header_vanish);
      $('hr.bar').on('sticky-end', header_highlight);*/
      init();
    });
    $(window).on('activate.bs.scrollspy', function (e, args) {

    }); 

    function header_highlight() {
        $('h1').removeClass('discreet');
    }
    function header_vanish() {
        $('h1').addClass('discreet');
    }



    var minified = false;
    var header = $('header');
    var didScroll = false;
    var changeHeaderOn = 200 - 54;

    function init() {
      scrollPage();
        $(window).scroll(function( event ) {
            console.log('scrolling');
            if( !didScroll ) {
                didScroll = true;
		scrollPage();
            };
        });
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            header.addClass('minified');
        }
        else {
            header.removeClass('minified');
        }
        didScroll = false;
    }

    function scrollY() {
        return $(window).scrollTop();
    }
})(jQuery);

