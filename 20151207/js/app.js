console.log('Linked : app.js');

$(document).ready(function(){
	console.log('Linked : jquery.js');

	function supprElem(){
		$('.delete').click(function(){
			$(this).parent().remove();	
		});
	}
	function checkElem(){
		$('.todo-checkbox').change(function(){
			if ($(this).attr('checked')){
				$(this).parent().find("span").addClass("checked");
			}
			else {
				$(this).parent().find("span").removeClass("checked");
			}
			//console.log(status);
		});		
	}
	supprElem();
	checkElem();

	$('#newTodo').keypress(function(key){
		if (key.which == 13){
			key.preventDefault();
			var text = $('#newTodo').val();
			$('#todolist').append('<div><input type="checkbox" class="todo-checkbox" {checked}><span class="todo-content" tabindex="0">' + text + '</span><button class="delete">X</button></div>');
			console.log(text);
			$('button').preventDefault();
			supprElem();
			checkElem();
		}
	});
})