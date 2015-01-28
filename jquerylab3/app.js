$(document).ready (function () {
	$("form").on("submit", function(e){
		// $("form").append ("thanks");
		// });
		var p = $(".pwd").val();
		if (p.length === 0) {
			$(this).append("please enter a password");
			e.preventDefault();
		}else if (p.length !== 0 && p.length<6 ) {
			$(this).append("please enter a password"+"  password should be more than six");
			e.preventDefault();
		} else {
			$("body").append("thank you").fadeIn(1000);
			$("form").fadeOut(1000);
		}
		});

	});
