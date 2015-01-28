$(document).ready (function () {
	$("form").on("submit", function(e){
		$("ul").append("<li><input type='checkbox' class = 'box'>" + $(".task").val()+"</li>" + "<button class ='remove' >remove </button>");
		// $("li").append($(".task").val() );
	});
	$("ul").on("click", ".box", function(e){
		$(this).parent().toggleClass("selected");

	});

	$("ul").on("click", "button", function(e){
		$(this).parent().remove() ;

	});
	
});
// ".task".val())