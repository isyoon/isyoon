var Resume = function(){
  var maps,
      that = {
    init : function(options){
      maps = options.maps;
      return that;
    },
    printMaps : function(){
      var bornLatlng = new google.maps.LatLng(maps.bornLat, maps.bornLng),
          liveLatlng = new google.maps.LatLng(maps.liveLat, maps.liveLng),
          baseOptions = {
            zoom : 10,
            mapTypeId : google.maps.MapTypeId.ROADMAP
          };
      that.makeMap({
        latlng : bornLatlng,
        mapOptions : baseOptions,
        elId : 'bornMapCanvas'
      }).makeMap({
        latlng : liveLatlng,
        mapOptions : baseOptions,
        elId : 'liveMapCanvas'
      });
      return that;
    },
    
    makeMap : function(opts){
      if(opts){
        opts.mapOptions.center = opts.latlng;
        new google.maps.Marker( {
          position : opts.latlng,
          map : (new google.maps.Map(document.getElementById(opts.elId), opts.mapOptions))
        });
      }
      return that;
    },
  }
  return that;
};
window.resume = new Resume();