var Resume = function(){
  var maps,
      that = {
    init : function(options){
      maps = options.maps;
      that.drawSkills(options.skills);
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
   
    drawSkills : function(skills){
      var params = {
        cht   : 'bhs',
        chs   : '320x250',
        chbh  : 'a,8',
        chdlp : 'bv',
        chco  : '4D89F9',
        chdl  : 'Years',
        chxt  : 'y,x',
        chxr  : '1,0,8',
        chds  : '0,8',
        chm   : ',,0,-1,10,0',
        chtt  : 'Yoon`s skills',
        chxl  : '0:',
        chd   : 't:'
      };
      var years = [];
      $.each(skills,function(idx,item){
        params.chxl += ('|'+item[0]);
        years.push(item[1]);
      });
      params.chd += years.reverse().join(',');
      $('#skillsChart').attr('src','http://chart.apis.google.com/chart?'+$.param(params));
    }
  }
  return that;
};
window.resume = new Resume();