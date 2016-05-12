$(document).ready(function(){
	$("#random_button").on("click", function() {
		event.preventDefault();
		var num = Math.floor((Math.random() * 100) + 1);
		$("#number_holder").html(num);
	});
	
	$("img").on("click", function() {
		event.preventDefault();
		$(this).fadeOut().delay(1000).fadeIn();
	});
})
