$(document).ready(function(){
	
	if (Modernizr.localstorage) {
	  // window.localStorage is available!
		var items = ["Thing 1", "Thing 2", "Thing 3"];
		localStorage.setItem("things", items);
	} else {
	  // no native support for HTML5 storage :(
		alert("NOT AVAILABLE");
		return;
	}

})