$(document).ready(function(){

	var clickCount = $("#counter").val();

	$(".image > img").click(function() {
		$("#counter").text(++clickCount);
	});

});