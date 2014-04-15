$(document).ready(function(){
	
	if (Modernizr.localstorage) {
	  // window.localStorage is available!
		alert("AVAILABLE");
	} else {
	  // no native support for HTML5 storage :(
		alert("NOT AVAILABLE");
		return;
	}

})