$(document).ready(function(){
	if (Modernizr.geolocation) {
	  // window.localStorage is available!
	    navigator.geolocation.getCurrentPosition(show_map);
		alert("AVAILABLE");
	} else {
	  // no native support for HTML5 storage :(
		alert("NOT AVAILABLE");
		return;
	}

})

var show_map = function(){
        var mapOptions = {
          center: new google.maps.LatLng(40.4417, -80.000),
          zoom: 15
        };
        //var map = new google.maps.Map($("#map-canvas"),mapOptions);
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      
