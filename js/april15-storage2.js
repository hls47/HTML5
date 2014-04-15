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
		
		$("#add").click(function(){
			//start by clearing out everything in the UL
			$("#output").children().remove();
			var storedValue = localStorage.getItem("things");
			var storedItems = storedValue.split(",");
			//we add one to the initial count, because of how JavaScript handles
			//the Array.length property
			var totalCount = storedItems.length + 1;
			var newItemCount = totalCount++;
			//add a new item to the end of the array 
			storedItems.push("Thing " + newItemCount);
			//store the new array
			localStorage.setItem("things", storedItems);
			//refresh the array from the local store
			storedValue = localStorage.getItem("things");
			storedItems = storedValue.split(",");
			
			for (var i = 0; i < storedItems.length; i++) {
			  	var contentString = storedItems[i];
				$("#output").append("<li>" + contentString + "</li>");
			}
		});
		
		$("#removeAll").click(function(){
			//start by clearing out everything in the UL
			$("#output").children().remove();
			localStorage.removeItem("things");
		});
		
		var storedValue = localStorage.getItem("things");
		if(storedValue == null){
			var items = ["Thing 1", "Thing 2", "Thing 3"];
			localStorage.setItem("things", items);
		}
		$(window).bind('storage', function (e) {
			//start by clearing out everything in the UL
			$("#output").children().remove();
			var storedValue = localStorage.getItem("things");
			var storedItems = storedValue.split(",");
			for (var i = 0; i < storedItems.length; i++) {
			  	var contentString = storedItems[i];
				$("#output").append("<li>" + contentString + "</li>");
			}
	  	});
	
	} else {
	  // no native support for HTML5 storage :(
		alert("NOT AVAILABLE");
		return;
	}

});

