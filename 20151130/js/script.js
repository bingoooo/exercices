"use strict";

console.log('JavaScript Linked'); //Vérification de l'acivité JS dans la console

//Déclaration des variables
	//Tableau contenant les éléments du tableau
var navPrior = ['#html', '#css', '#autre', '#balises', '#attributs', '#special', '#synthaxe', '#selectors', '#pseudoclass', '#boxmodel', '#soc', '#dry'];

//Méthode rendant un élément clickable et cachant un sous élément dont l'id doit être le même que le premier élément plus '-ss'
function clickToHide(id){
	$(id).click(function(){
		var target = id + '-ss';
		$(target).toggleClass('hide');
	});
}

//Méthode ajoutant la classe hide à un élément
function hide(id){
	$(id).addClass('hide');
}

//Début du programme
$(document).ready(function(){

	//Boucle attribuant la classe hide aux éléments ciblés (ici, les éléments que l'on veut cacher)
	for (var i = 0; i < navPrior.length; i++){
		var content = navPrior[i] + '-ss';
		hide(content);
	};

	//Boucle attribuant l'évènement click 
	for (var i = 0; i < navPrior.length; i++){
		clickToHide(navPrior[i]);
	};

	console.log('jquery');//Vérification console de l'activité jQuery
});
//sudo apt-get install firmware-b43-installer