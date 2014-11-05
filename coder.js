$(document).ready(init);

function changeHeight(){
	var windowHeight=$(window).height()-140;
	$(".codeContainer").css("height", windowHeight+"px");
}

function init(){
	changeHeight();
	
	$(".optionTopMenu").click(function(){
		$(this).toggleClass("pressed"); 

		//display in screen
		var id=$(this).attr("name");
		$("#"+id+"Container").toggle();

		var number = $('.codeContainer').filter(function() {
	 		return $(this).css('display') !== 'none';
		});

		var width=100/number.length;
		$(".codeContainer").css("width",width+"%");
	});

	$("#runButton").click(function(){
		var htmlCode = $("#html").val();
		var cssCode = $("#css").val();
		var jsCode = $("#js").val();
		$('#result').contents().find('html').html("<style>"+cssCode+"</style>"+htmlCode);// + "<script>"+jsCode+"</script>");
		//$('#result').contents().find('html').html("<script>"+jsCode+"</script>" +htmlCode );
		document.getElementById("result").contentWindow.eval(jsCode);
	});
}



 	 	
 
 	 	 	
 
 