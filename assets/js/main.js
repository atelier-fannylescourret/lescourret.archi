(function($) {
  $(document).ready(function() {
//    initialize_brand();
//    initialize_scrollspy();
//    initialize_carousel();
//    initialize_map();
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

  var map_address = [43.49647, -1.46465]
  var map_tiles = {
      mapnik_bw: 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
      mapquest_eu: 'http://otile2.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
      maptoolkit: 'https://tile1.maptoolkit.net/terrain/{z}/{x}/{y}.png',
      michelin_simplified: 'http://map1.viamichelin.com/map/mapdirect?map=light&z={z}&x={x}&y={y}&format=png&version=201503191157&layer=background',
      opencyclemap: 'http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png',
      watercolor: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png',
      waze: 'https://worldtiles1.waze.com/tiles/{z}/{x}/{y}.png'
  };
  var map = null;
  var map_layers = {};

  function initialize_map() {
    map = L.map('map', {
      maxZoom: 15,
      minZoom: 15,
      dragging: false,
      touchZoom: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      tap: false,
      bounceAtZoomLimits: false,
      keyboard: false,
      zoomControl: false
    }).setView(map_address, 15);
    map_layers['background'] = L.tileLayer(
      map_tiles.mapquest_eu, {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
    });
    map.addLayer(map_layers['background']);
    L.marker(map_address).addTo(map)
  }

})(jQuery);
