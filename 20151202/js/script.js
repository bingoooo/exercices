"use strict";

var navElements = ['#first', '#second', '#third', '#fourth'];		//Tableau regroupant les différents éléments de la barre de navigation

$(document).ready(function(){
	console.log('jQuery');//Vérification du lien vers les fichiers JS

	function hideAll(target){
		for (var i = 0; i < target.length; i++){
			$(target[i] + '-target').addClass('hide');
		}
	}

	function clickNav(nav, target){
		$(nav).click(function(){
			if ($(target).hasClass('hide')){
				hideAll(navElements);
				$(target).removeClass('hide');				
			} else {
				hideAll(navElements);				
			}
			var part = $(nav).attr('adress');
			//$('#container').load(part);
			$.ajax({
				url: part,
				type: "GET",
				dataType: "html",
				success: function(data){
					var test = data;
					console.log(test);
					$('#container').html(data);
				},
				error: function(){
					console.log('erreur chargement ajax');
				},
				complete: function(){
					console.log('fin de requête ajax');
				}
			});
		});
	}
	function addNavEvent(table){
		for (var i = 0; i < table.length; i++){
			clickNav(table[i], table[i]+'-target');
		}
	}


	hideAll(navElements);
	addNavEvent(navElements);

	/*$('p').hide();
	$('li').click(function(){
		var target = '#' + $(this).attr('id') + '-target';
		console.log(target);
		console.log($(target).hasClass('hide'));
		if ($(target).hasClass('hide')){
			$(target).toggleClass('hide');
		} else {
			$('p').hide();
			$(target).toggleClass('hide');
		}
	});*/


	//addEventClick(navElements);
	/*for (var i = 0; i < navElements.length; i++){
		clickNav(navElements[i]);
	}*/
	/*
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
	*/
});