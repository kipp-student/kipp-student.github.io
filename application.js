$(document).ready(function(){
	$("#random_button").on("click", function() {
		event.preventDefault();
		var num = Math.floor((Math.random() * 100) + 1);
		$("#number_holder").html(num);
	});
	
	$("img").on("click", function() {
		event.preventDefault();
		$(this).css(opacity, 0.0).delay(500).css(opacity,0.5).delay(500).css(opacity, 1.0);
	});
})
