$(document).ready(function() {
	var about_vh = $("#aboutInnerBox").height()/$(window).height() * 100 + 40;
  	if (about_vh > 100){
  		$("#aboutBox").css("height",  about_vh + "vh");
  	} else {
  		$("#aboutBox").css("height",  100 + "vh");
  	}

  	var art_vh = $("#artInnerBox").height()/$(window).height() * 100 + 40;
  	if (art_vh > 100){
  		$("#artBox").css("height",  art_vh + "vh");
  	} else {
  		$("#artBox").css("height",  100 + "vh");
  	}
});


$("#art").hover( 
	function(){
		$("body").css("background-image", "url(images/miniminipencil.png)");
		$("#index1").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#index1").css("border", "");
		$(".innerBox").css("border", "");
	})

$("#art").click( 
	function(){
		$("#art").unbind("mouseenter mouseleave"); 
		$("body").css("background-image", "url(images/miniminipencil.png)");
		$("#index1").css("border", "1px solid #85D5F7");
		$(".innerBox").css("border", "1px solid #85D5F7");
		$("#art").mouseleave(
			function(){
				$("#art").hover( 
				function(){
					$("body").css("background-image", "url(images/miniminipencil.png)");
					$("#index1").css("border", "1px solid #85D5F7");
				},
				function(){
					$("body").css("background-image", "");
					$("#index1").css("border", "");
					$(".innerBox").css("border", "");
				})
			})
	})

$("#about").hover( 
	function(){
		$("body").css("background-image", "url(images/miniminicreature.png)");
		$("#index1").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#index1").css("border", "");
		$(".innerBox").css("border", "");
	})

$("#about").click( 
	function(){
		$("#about").unbind("mouseenter mouseleave"); 
		$("body").css("background-image", "url(images/miniminicreature.png)");
		$("#index1").css("border", "1px solid #85D5F7");
		$(".innerBox").css("border", "1px solid #85D5F7");
		$("#about").mouseleave(
			function(){
				$("#about").hover( 
				function(){
					$("body").css("background-image", "url(images/miniminicreature.png)");
					$("#index1").css("border", "1px solid #85D5F7");
				},
				function(){
					$("body").css("background-image", "");
					$("#index1").css("border", "");
					$(".innerBox").css("border", "");
				})
			})
	})

$("#contact").hover( 
	function(){
		$("body").css("background-image", "url(images/minihotlinebling.png)");
		$("#index1").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#index1").css("border", "");
		$(".innerBox").css("border", "");
	})

$("#contact").click( 
	function(){
		$("#contact").unbind("mouseenter mouseleave"); 
		$("body").css("background-image", "url(images/minihotlinebling.png)");
		$("#index1").css("border", "1px solid #85D5F7");
		$(".innerBox").css("border", "1px solid #85D5F7");
		$("#contact").mouseleave(
			function(){
				$("#contact").hover( 
				function(){
					$("body").css("background-image", "url(images/minihotlinebling.png)");
					$("#index1").css("border", "1px solid #85D5F7");
				},
				function(){
					$("body").css("background-image", "");
					$("#index1").css("border", "");
					$(".innerBox").css("border", "");
				})
			})
	})

$("#projects").hover( 
	function(){
		$("body").css("background-image", "url(images/miniplant.png)")
		$("#index1").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#index1").css("border", "");
		$(".innerBox").css("border", "");
	})

$("#projects").click( 
	function(){
		$("#projects").unbind("mouseenter mouseleave"); 
		$("body").css("background-image", "url(images/miniplant.png)");
		$("#index1").css("border", "1px solid #85D5F7");
		$(".innerBox").css("border", "1px solid #85D5F7");
		$("#projects").mouseleave(
			function(){
				$("#projects").hover( 
				function(){
					$("body").css("background-image", "url(images/miniplant.png)");
					$("#index1").css("border", "1px solid #85D5F7");
				},
				function(){
					$("body").css("background-image", "");
					$("#index1").css("border", "");
					$(".innerBox").css("border", "");
				})
			})
	})

$("#resume").hover( 
	function(){
		$("body").css("background-image", "url(images/miniresume.png)")
		$("#index1").css("border", "1px solid #85D5F7");
	},
	function(){
		$("body").css("background-image", "");
		$("#index1").css("border", "");
		$(".innerBox").css("border", "");
	})

$("#resume").click( 
	function(){
		$("#resume").unbind("mouseenter mouseleave"); 
		$("body").css("background-image", "url(images/miniresume.png)");
		$("#index1").css("border", "1px solid #85D5F7");
		$(".innerBox").css("border", "1px solid #85D5F7");
		$("#resume").mouseleave(
			function(){
				$("#resume").hover( 
				function(){
					$("body").css("background-image", "url(images/miniresume.png)");
					$("#index1").css("border", "1px solid #85D5F7");
				},
				function(){
					$("body").css("background-image", "");
					$("#index1").css("border", "");
					$(".innerBox").css("border", "");
				})
			})
	})

$("#email").hover( 
	function(){
		$("#phone")[0].src="images/mail.png";
		$("#phone")[0].height="183";
	},
	function(){
		$("#phone")[0].src="images/minihotlineblingcropped.png";
	})



$("#linkedin").hover( 
	function(){
		$("#phone")[0].src="images/linkedin.png";
		$("#phone")[0].height="183";
	},
	function(){
		$("#phone")[0].src="images/minihotlineblingcropped.png";
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


$("#mfc").hover( 
	function(){
		$("#plant")[0].src="images/minilightbulb.png";
		$("#plant")[0].height="183";
	},
	function(){
		$("#plant")[0].src="images/plant.png";
	})

$("#backToTop").hide();

$(window).scroll(function() {
    if($(window).scrollTop() > 0) {
        $("#backToTop").show();
    } else {
        $("#backToTop").hide();
    }
});