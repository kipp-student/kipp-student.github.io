$(document).ready(function(){
	$("#random_button").on("click", function() {
		event.preventDefault();
		var num = Math.floor((Math.random() * 100) + 1);
		$("#random_number").html(num);
	});
})
