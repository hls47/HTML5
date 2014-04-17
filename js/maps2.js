$(document).ready(function(){
	if (Modernizr.geolocation) {
	  // window.localStorage is available!
	    navigator.geolocation.getCurrentPosition(show_map, showFailure);
		
	} else {
	  // no native support for HTML5 storage :(
		alert("NOT AVAILABLE");
		return;
	}

})

 function show_map(position){
 	var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
        var mapOptions = {
          center: new google.maps.LatLng(latitude, longitude),
          zoom: 18
        };
        //var map = new google.maps.Map($(#map-canvas),mapOptions);
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      }
      
 function showFailure(error){
   if(error.code == 1){
      alert("User Declined to Share Location"); 
  }
 }