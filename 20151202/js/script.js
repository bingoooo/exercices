navElements = ['#first', '#second', '#third'];		//Tableau regroupant les différents éléments de la barre de navigation

$(document).ready(function(){
	console.log('jQuery');//Vérification du lien vers les fichiers JS

	//Méthode pour afficher les différentes sections
	function showHide(target){
		$(target).click(function(){
			hideAll(navElements);					//affectation de la classe hide à tous les éléments "pages"
			$(target+'-target').toggleClass('hide');//désaffectation de la classe 'hide' affichage de l'élément "page" désirée
		});
	}
	function hide(target){
			$(target+'-target').addClass('hide');	//affectation de la classe 'hide' à un élément
	}
	function hideAll(table){
		for (var i = 0; i < table.length; i++){		//affectation de la classe 'hide' à un groupe d'éléments classés dans un tableau
			hide(table[i]);
		}
	}

	//"Début" du programme
	for (var i = 0; i < navElements.length; i++){	//affectation à tous les éléments du tableau (barre de navigation)
		hide(navElements[i]);						//affectation de la classe 'hide' sur tous les éléments "pages"
		showHide(navElements[i]);					//affectation de l'évènement "click" sur la barre de navigation
	}
	
});