var Resume = function(){
  var maps,
      that = {
    init : function(options){
      maps = options.maps;
      google.setOnLoadCallback(that.drawSkills);
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
   
    drawSkills : function(){
      var data = new google.visualization.DataTable();
        data.addColumn('string', 'Year');
        data.addColumn('number', 'Skill');
        data.addRows(4);
        data.setValue(0, 0, 'JS');
        data.setValue(0, 1, 8);
        data.setValue(2, 0, 'HTML/CSS');
        data.setValue(1, 1, 8);
        data.setValue(1, 0, 'JAVA');
        data.setValue(2, 1, 5);
        data.setValue(3, 0, 'SQL');
        data.setValue(3, 1, 5);

        var chart = new google.visualization.BarChart(document.getElementById('skillsChart'));
        chart.draw(data, {width: 320, height: 240, title: 'Yoon\'s skills',
                          vAxis: {title: 'Skills'}
                         });
    }
  }
  return that;
};
window.resume = new Resume();