$("#art").hover( 
	function(){
		$("body").css("background-image", "url(images/miniminipencil.png)");
		$("#index1").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#index1").css("border", "");
	})

$("#about").hover( 
	function(){
		$("body").css("background-image", "url(images/miniminicreature.png)");
		$("#index1").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#index1").css("border", "");
	})

$("#contact").hover( 
	function(){
		$("body").css("background-image", "url(images/minihotlinebling.png)");
		$("#index1").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#index1").css("border", "");
	})

$("#projects").hover( 
	function(){
		$("body").css("background-image", "url(images/miniplant.png)")
		$("#index1").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#index1").css("border", "");
	})
$("#resume").hover( 
	function(){
		$("body").css("background-image", "url(images/miniresume.png)")
		$("#index1").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#index1").css("border", "");
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

$("#resume2").hover( 
	function(){
		$("#paper")[0].src="images/resume3.png";
		$("#paper")[0].height="183";
	},
	function(){
		$("#paper")[0].src="images/miniresume.png";
	})

$("#bigMac").hover( 
	function(){
		$("#plant")[0].src="images/minibig_mac.png";
		$("#plant")[0].height="183";
	},
	function(){
		$("#plant")[0].src="images/plant.png";
	})


$('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });
    
    return false;
});