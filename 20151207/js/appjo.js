"use strict";
//Créer un objet app qui exécutera le code directement en appelant app.init()


$(document).ready(function(){
	console.log('Linked : appjo.js')
	
		var app = {
			//HTML à insérer lors de la création de la tache
			todoHtmlPre : '<div class="todo"><input type="checkbox" class="todo-checkbox" {checked}><span class="todo-content">',
			todoHtmlPost : '</span><button class="delete">X</button></div>',
			
			//Fonction initialisation des évènements de la page
			init : function(){
				app.elements();	
			},

//
			//Fonction initialisant les évènements au rafraichissement de la page
			elements : function(){
				$('#newTodo').on("keypress",app.addToList);	//Event listener lié à l'ajout d'une tache (input id="newTodo") appui sur Entrée
				//$('#newTodo').submit(app.addToList2);
				//$('#todolist').on("change", 'span:todo-content', app.editTask);
				$('#show-all').on("click", app.all);			//Event listener lié au boutton All (montre toutes les taches)
				$('#active').on("click", app.active);			//Event listener lié au boutton Active (montre les taches en cours, non cochées)
				$('#completed').on("click", app.completed);	//Event listener lié au boutton Completed (montre les taches finies, cochées)
				$('#clear').on("click", app.clear);			//Event listener lié au boutton Clear (efface les taches finies, cochées)
				//$('.todo-content').on("dbclick", this.editTask);
				app.updateItemCount();							//Rafraichissement du nombre de tâches à accomplir
			},
			//Fonction qui met à jour les évènements liés à la liste des tâches
			updateList : function(){
				$('.delete').click(app.removeParent);			//évènement lié au bouton 'delete'
				$('.todo-checkbox').change(app.checkboxElem);	//évènement lié à la checkbox
				//$('span').on("click", app.editTask);			//évènement lié à l'édition d'une tâche
			},


			//Fonction de mise à jour du nombre d'éléments dans la liste de tâches
			updateItemCount : function(){
				var size = $('#todolist').children().size();
				(size < 2)?$('#status').html(size + " item left"):$('#status').html(size + " items left");
			},

			//Fonction lié au boutton qui supprime l'élément correspondant de la liste
			removeParent : function(event){
				event.preventDefault();
				$(this).parent().remove();
				app.updateItemCount();
			},

			//Fonction attachée à l'élément checkbox
			checkboxElem : function(event){
					event.preventDefault();
					if (this.checked){						//Test de la condition de l'élément checkbox
						$(this).parent().addClass('done');						//ajoute la classe 'done' à l'élément parent
						$(this).parent().find("span").addClass('ischecked');	//ajoute la classe 'ischecked' à l'élément frère au tag "span"
					} else {
						$(this).parent().removeClass('done');					//retire la classe 'done' à l'élément parent		
						$(this).parent().find("span").removeClass('ischecked');	//retire la classe 'ischecked' à l'élément frère au tag "span"
					}
			},


			//Fonction associée au boutton All qui montre tous les éléments de la liste ("todo")
			all : function(){
					//app.showAll();
					$('.todo').show();		//montre tous les éléments de classe "todo"
					$('.selectable').removeClass('selected');	//retire la classe "selected" de tous les éléments de classe "selectable"
					$(this).addClass('selected');				//ajoute la classe "selected" au boutton All
			},

			//Fonction associée au boutton Active
			active : function(){
					$('.todo').show()		//Montre les éléments de classe "todo" (les taches)
					$('.done').hide();		//Cache les éléments de classe "done" ()
					$('.selectable').removeClass('selected');
					$(this).addClass('selected');
					},

			//Fonction associée au boutton Cmpleted
			completed : function(){
					$('.todo').hide();
					$('.done').show();
					$('.selectable').removeClass('selected');
					$(this).addClass('selected');
			},

			//Fonction associée au boutton Clear
			clear : function(){
					$('.selectable').removeClass('selected');
					$(this).addClass('selected');
					$('.done').remove();
					app.updateItemCount();
			},

			//Fonction associée à l'input utilisateur
			addToList : function(event){
				if (event.which == 13) {
					event.preventDefault();
					var text = $('#newTodo').val();
					if (text != ''){
						$('#newTodo').val('');
						$('#todolist').prepend(app.todoHtmlPre + text + app.todoHtmlPost);
						app.updateList();
						app.updateItemCount();
					}
				};
			},
			addToList2 : function(event){
				event.preventDefault();
				//event.stopImmediatePropagation();
				console.log('submit');
			},
			editTask : function(event){
				event.preventDefault();
				var target = $(this).parent();
				var task = $(this).html();
				$(this).remove();
				target.prepend('<input class="edit" placeholder="Quelque chose à faire..." value=' + task + ' autofocus>');
				$('.edit').on("keypress", function(event){
					//$(this).val(task);
					if (event.which == 13){
						var task = $(this).val();
						$(this).remove();
						target.append('<span class="todo-content">' + task + '</span>');
						app.updateList();
					}
				});
				console.log(task);
			}
			// Ajouter un tableau qui liste les valeurs optionnel
		};
	
	//Appel de la fonction principale exécutant le code JS
	app.init();	
})