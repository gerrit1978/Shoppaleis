function showmap() {

  // Create an array of styles.
  var atStyles = [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff4400"
            },
            {
                "saturation": -68
            },
            {
                "lightness": -4
            },
            {
                "gamma": 0.72
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#999999"
            },
            {
                "lightness": "-60"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#cccccc"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#0077ff"
            },
            {
                "gamma": 3.1
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "60"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -23
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#cccccc"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#cccccc"
            },
            {
                "lightness": "-25"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -64
            },
            {
                "lightness": 16
            },
            {
                "gamma": "2.15"
            },
            {
                "weight": 2.7
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": "-60"
            },
            {
                "gamma": "1.20"
            },
            {
                "hue": "#00ffff"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#1e494c"
            },
            {
                "gamma": 0.20
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#007fff"
            },
            {
                "gamma": 0.77
            },
            {
                "saturation": 65
            },
            {
                "lightness": 99
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": 5.6
            },
            {
                "hue": "#0091ff"
            },
            {
                "saturation": "100"
            },
            {
                "gamma": "120"
            },
            {
                "lightness": "-70"
            }
        ]
    }
  ];
  
  /** SHOPPALEIS LEUVEN **/
  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var atMapType = new google.maps.StyledMapType(atStyles,
    {name: "Het Shoppaleis"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var myLatlng = new google.maps.LatLng(50.8872353,4.6998895);
  var mapOptions = {
	scrollwheel: false,  
    zoom: 16,
    center: myLatlng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'big']
    }
  };
  var map = new google.maps.Map(document.getElementById('map_leuven'),
    mapOptions);

  var contentString = '<div><strong>De Hoorn</strong><br />Sluisstraat 79<br />3000 Leuven</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title:"Shoppaleis"
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });


  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('big', atMapType);
  map.setMapTypeId('big');
  
  
  /** SHOPPALEIS KORTENBERG **/
  var myLatlngKortenberg = new google.maps.LatLng(50.8857185,4.5478113);
  var mapOptionsKortenberg = {
	scrollwheel: false,  
    zoom: 16,
    center: myLatlngKortenberg,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'big']
    }
  };
  var mapKortenberg = new google.maps.Map(document.getElementById('map_kortenberg'),
    mapOptionsKortenberg);

  var contentStringKortenberg = '<div><strong>Oude Abdij</strong><br />Abdijdreef 22<br />3070 Kortenberg</div>';

  var infowindowKortenberg = new google.maps.InfoWindow({
    content: contentStringKortenberg
  });
  
  var markerKortenberg = new google.maps.Marker({
    position: myLatlngKortenberg,
    map: mapKortenberg,
    title:"Shoppaleis"
  });

  google.maps.event.addListener(markerKortenberg, 'click', function() {
    infowindowKortenberg.open(mapKortenberg,markerKortenberg);
  });
  


  //Associate the styled map with the MapTypeId and set it to display.
  mapKortenberg.mapTypes.set('big', atMapType);
  mapKortenberg.setMapTypeId('big');

  
}

google.maps.event.addDomListener(window, 'load', showmap); 
