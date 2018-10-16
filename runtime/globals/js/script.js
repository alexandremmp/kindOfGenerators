var seconds = 15;

$(document).ready(function(){

	var refresh = setTimeout(function(){
		location.reload();
	}, window.seconds * 1000);

	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			clearTimeout(refresh);
			console.log("Escape key pressed!");
			console.log("Reload stopped!");
		};
	});

});
