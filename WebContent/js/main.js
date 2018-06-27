$(document).ready(function(){

	var clickCount = $("#counter").val();
	var clickCount2 = $("#counter2").val();

	$("img#cat").click(function() {
		$("#counter").text(++clickCount);
	});
	
	$("img#cat2").click(function() {
		$("#counter2").text(++clickCount2);
	});	

});