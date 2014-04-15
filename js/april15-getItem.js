$(document).ready(function(){
	
	if (Modernizr.localstorage) {
	  // window.localStorage is available!
		$("#display").click(function(){
			//start by clearing out everything in the UL
			$("#output").children().remove();
			var storedValue = localStorage.getItem("things");
			var storedItems = storedValue.split(",");
			for (var i = 0; i < storedItems.length; i++) {
			  	var contentString = storedItems[i];
				$("#output").append("<li>" + contentString + "</li>");
			}
		});
	
		var items = ["Thing 1", "Thing 2", "Thing 3"];
		localStorage.setItem("things", items);
	} else {
	  // no native support for HTML5 storage :(
		alert("NOT AVAILABLE");
		return;
	}

});

