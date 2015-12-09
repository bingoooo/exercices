
//Créer un objet app qui exécutera le code directement en appelant app.init()


$(document).ready(function(){
	console.log('Linked : appjo.js')
	
		var app = {

			userInput : $('#newTodo'),					//Élément input du DOM qui reçoit les différentes taches
			delElem : $('.delete'),						//Éléments boutton "delete" du DOM
			checkBoxClass : $('.todo-chekbox'),			//Éléments checkbox du DOM
			items : $('#todolist').children().size(),	//Nombre d'éléments du tableau du DOM
			state : $('#status'),						//Élément items du DOM
			list : $('#todolist'),					//Élément liste du DOM
										//Texte HTML créant les éléments de la liste (en deux parties)
			todoText1 : '<div class="todo"><input type="checkbox" class="todo-checkbox" {checked}><span class="todo-content">',
			todoText2 : '</span><button class="delete">X</button></div>',

			//Fonction de rafraichissement du Nombre d'éléments du tableau
			updateElements : function(){
				
			},

			updateItemCount : function(){
				var size = $('#todolist').children().size();
				(size < 2)?$('#status').html(size + " item left"):$('#status').html(size + " items left");
			},

			//Fonction lié au boutton qui supprime l'élément correspondant de la liste
			buttonEvent : function(){
				$('.delete').click(function(event){
					event.preventDefault;
					$(this).parent().remove();
					app.updateItemCount();
				});
			},


			checkboxElem : function(){
				$('.todo-checkbox').change(function(event){
					event.preventDefault();
					if (this.checked){
						$(this).parent().addClass('done');
						$(this).parent().find("span").addClass('ischecked');
					} else {
						$(this).parent().removeClass('done');
						$(this).parent().find("span").removeClass('ischecked');
					}
				});
			},

			showAll : function(){
				$('.todo').show();
			},
			hideAll : function(){
				$('.todo').hide();
			},
			all : function(){
				$('#show-all').on("click", function(){
					//app.showAll();
					$('.todo').show();
					$('.selectable').removeClass('selected');
					$(this).addClass('selected');
				});
			},
			active : function(){
				$('#active').on("click", function(){
					//app.showAll();
					$('.todo').show()
					$('.done').hide();
					$('.selectable').removeClass('selected');
					$(this).addClass('selected');
				});
			},
			completed : function(){
				$('#completed').on("click", function(){
					$('.todo').hide();
					$('.done').show();
					$('.selectable').removeClass('selected');
					$(this).addClass('selected');
				});
			},
			clear : function(){
				$('#clear').on("click", function(){
					$('.selectable').removeClass('selected');
					$(this).addClass('selected');
					$('.done').remove();
					app.updateItemCount();
				});
			},
			addToList : function(){
				var text = $('#newTodo').val();
				$('#newTodo').val('');
				$('#todolist').prepend(app.todoText1 + text + app.todoText2)
				app.updateItemCount();
				app.buttonEvent();
				app.checkboxElem();
			},
			init : function(){
				app.updateItemCount();
				app.all();
				app.active();
				app.completed();
				app.clear();
				/*$('#newTodo').on("submit", function(event){
					event.preventDefault();
					var text = app.userInput.val();
					$(this).val('');
					$('#todolist').prepend(app.todoText1 + text + todoText2);
					app.updateItemCount();
					app.buttonEvent();
					app.checkboxElem();
				});*/
				$('#newTodo').keypress(function(event){
					if (event.which == 13) {
						event.preventDefault();
						//var text = app.userInput.val();
						app.addToList();
					}
				});
				$('#add-button').click(function(event){
					event.preventDefault();
					event.stopPropagation();
					app.addToList();
				});
			}
		};
	
	app.init();
	//console.log(app);
	
})