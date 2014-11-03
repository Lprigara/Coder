$(document).ready(init);

function changeHeight(){
	var windowHeight=$(window).height()-160;
	$(".codeContainer").css("height", windowHeight+"px");
}

function clickOptionTopMenu(){
	$(this).toggleClass("selected"); //add or remove one or more classes depending the class`s presence
}

function init(){
	changeHeight();
	$(".optionTopMenu").click(clickOptionTopMenu);
}

