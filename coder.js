$(document).ready(init);

function changeHeight(){
	var windowHeight=$(window).height()-160;
	$(".codeContainer").css("height", windowHeight+"px");
}

function init(){
	changeHeight();
}
