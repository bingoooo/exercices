//JavaScript
"use strict";
$(document).ready(function(){

console.log("jQuery begin");

var intro = "<p>Texte d'intro</p>";
var apropos = "<p>Le texte de à propos...</p>";
var contact = "";

var button = document.getElementById("hide"),
	target = document.getElementById("contenu");

function hide(){
	if (target.hasClass("hide")){
		target.removeClass("hide");
	}else{
		target.setAttribute("class", "hide");	
	}
}

button.addEventListener("click", hide, false);


console.log('jQuery end');

});
/*switch (){
	case "";
		break;
	default:
}
document.getElementById()
.getElementByTagName()
.getElementByClassName()
.querySelector()
.querySelectorAll()
*/

//jQuery
/*$(document).ready(function(){
	$('').innerHTML = "Petit aperçu de ce que jQuery va faire.";


	console.log('jQuery Ready!');
});*/