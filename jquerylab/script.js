$(document).ready (function () {
	$("form").on("submit", function(e){
		$("tbody>tr:even").css("background-color",$(".color").val());
	});
});

	