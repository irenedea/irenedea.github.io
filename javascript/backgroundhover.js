var timer = 0;
$("#NERDpopup").hide();
$("#STKpopup").hide();
$("#editorpopup").hide();
$("#bearmapspopup").hide();
$("#mfcpopup").hide();

$(window).load(function() {
	$("body").css("overflow", "hidden");
	timer = setInterval(showSite , 2000 )
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

  	var project_vh = $("#projectInnerBox").height()/$(window).height() * 100 + 40;
  	if (project_vh > 100){
  		$("#projectBox").css("height",  project_vh + "vh");
  	} else {
  		$("#projectBox").css("height",  100 + "vh");
  	}
	$("#backToTop").hide();
	$(".box").hide();
});


function showSite() {
      clearInterval(timer);
      $("#intro").fadeOut();
      $(".box").fadeIn();
      $("body").css("overflow", "visible");
}

$("#art").hover( 
	function(){
		$("body").css("background-image", "url(images/miniminipencil.png)");
		$("#index1").css("border", "2px solid #85D5F7");
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
		$("#index1").css("border", "2px solid #85D5F7");
		$(".innerBox").css("border", "2px solid #85D5F7");
		$("#art").mouseleave(
			function(){
				$("#art").hover( 
				function(){
					$("body").css("background-image", "url(images/miniminipencil.png)");
					$("#index1").css("border", "2px solid #85D5F7");
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
		$("#index1").css("border", "2px solid #85D5F7");
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
		$("#index1").css("border", "2px solid #85D5F7");
		$(".innerBox").css("border", "2px solid #85D5F7");
		$("#about").mouseleave(
			function(){
				$("#about").hover( 
				function(){
					$("body").css("background-image", "url(images/miniminicreature.png)");
					$("#index1").css("border", "2px solid #85D5F7");
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
		$("#index1").css("border", "2px solid #85D5F7");
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
		$("#index1").css("border", "2px solid #85D5F7");
		$(".innerBox").css("border", "2px solid #85D5F7");
		$("#contact").mouseleave(
			function(){
				$("#contact").hover( 
				function(){
					$("body").css("background-image", "url(images/minihotlinebling.png)");
					$("#index1").css("border", "2px solid #85D5F7");
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
		$("#index1").css("border", "2px solid #85D5F7");
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
		$("#index1").css("border", "2px solid #85D5F7");
		$(".innerBox").css("border", "2px solid #85D5F7");
		$("#projects").mouseleave(
			function(){
				$("#projects").hover( 
				function(){
					$("body").css("background-image", "url(images/miniplant.png)");
					$("#index1").css("border", "2px solid #85D5F7");
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
		$("#index1").css("border", "2px solid #85D5F7");
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
		$("#index1").css("border", "2px solid #85D5F7");
		$(".innerBox").css("border", "2px solid #85D5F7");
		$("#resume").mouseleave(
			function(){
				$("#resume").hover( 
				function(){
					$("body").css("background-image", "url(images/miniresume.png)");
					$("#index1").css("border", "2px solid #85D5F7");
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


$("#backToTop").hover(
	function(){
		$("#backToTop").css("opacity", "1");
	},
	function(){
		$("#backToTop").css("opacity", ".6");
	})

$(".x").hover(
	function(){
		$(this).css("opacity", "1");
	},
	function(){
		$(this).css("opacity", ".6");
	})

$(".grid").hover(
	function(){
		$(this).css("opacity", ".8");
	},
	function(){
		$(this).css("opacity", "1");
	})

$("#NERD").click(
	function(){
		$("#NERDpopup").show();
		$("body").css("overflow", "hidden");
		$("#backToTop").hide();
	})

$("#STK").click(
	function(){
		$("#STKpopup").show();
		$("body").css("overflow", "hidden");
		$("#backToTop").hide();
	})

$("#editor").click(
	function(){
		$("#editorpopup").show();
		$("body").css("overflow", "hidden");
		$("#backToTop").hide();
	})

$("#bearmaps").click(
	function(){
		$("#bearmapspopup").show();
		$("body").css("overflow", "hidden");
		$("#backToTop").hide();
	})

$("#mfc").click(
	function(){
		$("#mfcpopup").show();
		$("body").css("overflow", "hidden");
		$("#backToTop").hide();
	})

$(".x").click(
	function(){
		$(this).parent().parent().hide();
		$("body").css("overflow", "visible");
		$("#backToTop").show();
	})

$(window).scroll(function() {
    if($(window).scrollTop() > 0) {
        $("#backToTop").show();
    } else {
        $("#backToTop").hide();
    }
});