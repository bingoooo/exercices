//JavaScript
"use strict";
$(document).ready(function(){	//jQuery utilisé ici pour être sûr que le Javascript démarre quand tous les éléments de la page sont prêts.

console.log("jQuery begin");	//Avertissement console de démarrage

//Déclaration des variables
	//Variables de contenu de page
var content = ["<p>Le texte de à propos...</p>", "<p>Le texte de contact</p>"];

	//Variables liées à la barre de navigation
var navBar = document.getElementsByTagName("li");
var navLen = navBar.length;
console.log(navBar);		//Avertissement console, contenu de navBar
console.log(navLen);		//Avertissement console, contenu de navLen

//Attribution des balises par les id dans des variables
var button = document.getElementById("hide"),
	target = document.getElementById("contenu");

//fonction qui cache et découvre un élément
function hide(classe, attribut){
	if (target.hasAttribute(classe, attribut)){
		target.removeAttribute(classe, attribut);
	}else{
		target.setAttribute(classe, attribut);	
	}
};
button.addEventListener("click", function(){hide("class", "hide")}, false);

//fonction de modification de l'intérieur d'une balise ciblée
function modifTarget(target, text){
	document.getElementById(target).innerHTML = text;
	console.log(text);
};
//fonction rendant un élément clickable
function addNavEvent(target, index){
	navBar[index].addEventListener("click", function(){modifTarget(target, content[index])});
}
//inclusion de l'évènemnt à la barre de navigation
for (var i = 0; i < navLen; i++){
	addNavEvent("target", i);
}

//création d'un paragraphe
var targetArea = document.getElementById("target-area");
var p = document.createElement("div");
p.innerHTML = "Texte généré par JavaScript";
targetArea.appendChild(p);
//modification du texte à l'intérieur de la balise d'id target
document.getElementById("target").innerHTML = "<p>Paragraphe inclu en JavaScript</p>";
//création d'un paragraphe d'une autre manière, moins automatisée
document.getElementsByTagName("footer").item(0).innerHTML = '<div id="java-content"></div>';
document.getElementById("java-content").innerHTML = "<p>Paragraphe inclu dans un div créés par JavaScript</p>";

console.log('jQuery end');

});


//jQuery
/*$(document).ready(function(){
	$('').innerHTML = "Petit aperçu de ce que jQuery va faire.";


	console.log('jQuery Ready!');
});*/