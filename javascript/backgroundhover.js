$("#art").hover( 
	function(){
		$("body").css("background-image", "url(images/miniminipencil.png)");
		$("#block").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#block").css("border", "");
	})

$("#about").hover( 
	function(){
		$("body").css("background-image", "url(images/miniminicreature.png)");
		$("#block").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#block").css("border", "");
	})

$("#contact").hover( 
	function(){
		$("body").css("background-image", "url(images/minihotlinebling.png)");
		$("#block").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#block").css("border", "");
	})

$("#projects").hover( 
	function(){
		$("body").css("background-image", "url(images/miniplant.png)")
		$("#block").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#block").css("border", "");
	})
$("#resume").hover( 
	function(){
		$("body").css("background-image", "url(images/miniresume.png)")
		$("#block").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#block").css("border", "");
	})

$("#email").hover( 
	function(){
		$("#phone")[0].src="images/mail.png";
		$("#phone")[0].height="183";
	},
	function(){
		$("#phone")[0].src="images/minihotlinebling.png";
	})

$("#linkedin").hover( 
	function(){
		$("#phone")[0].src="images/linkedin.png";
		$("#phone")[0].height="183";
	},
	function(){
		$("#phone")[0].src="images/minihotlinebling.png";
		$("#phone")[0].height="183";
	})