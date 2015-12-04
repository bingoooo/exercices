var barNav = ['#identity','#grade','#work','#hobbies'];		//table des éléments du tableau
var lenNavBar = barNav.length;								//taille du tableau
var idText = ["<br>Nom</br><br>Prénom</br>","Mon Cursus Scolaire", "Mon travail", "Mes activités préférées"];

//méthode du cour, je ne sais pas quoi en faire pour le moment...
function comparChaine(str){
	var maj = str.toUpperCase();
	if (str == maj){
		document.writeln(str + " : n'a que des majuscules.</br>");
	} else {
		document.writeln(str + " : n'est pas qu'en majuscules.</br>")
	}
}

//Méthode pour automatiser l'évènement click sur la barre de navigation <nav></nav> ce 
//qui modifie l'élément #main-content
function clickElement(element, text, target){
	var page = element.replace('#','');
	page = "ajax/"+page+".html";
	$(element).click(function(){
		for (i = 0; i < lenNavBar; i++){
			$(barNav[i]).removeClass("active");		
		}
		$(element).addClass("active");
		$(target).load(page);
		//$(target).writeln(text);
	});
}

//Code principal modifiant l'affichage de la page
$(document).ready(function(){
	/*Ajout de l'évènement click sur les liens de la barre de navigation <nav></nav>
	ayant pour effet de modifier le contenu de la balise avec l'id #main-content*/
	for (i = 0; i<lenNavBar; i++){
		clickElement(barNav[i], idText[i], '#main-content');
	}
	$(".link").click(function(){
		alert('Thank you for visiting the site...');
		event.preventDefault();
	});
	
});
