(function($) {
    $(document).ready(function() {
        $('body').scrollspy({
            offset: 0,
            method: 'position',
            target: 'header'
        });
/*        $('h1').sticky();
        $('hr.bar').sticky();
        $('hr.bar').on('sticky-start', header_vanish);
        $('hr.bar').on('sticky-end', header_highlight);*/
    });
    $(window).on('activate.bs.scrollspy', function (e, args) {

    }); 

    function header_highlight() {
        $('h1').removeClass('discreet');
    }
    function header_vanish() {
        $('h1').addClass('discreet');
    }
})(jQuery);

