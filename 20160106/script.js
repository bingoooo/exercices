'use strict';

$(document).ready(function(){
	$('div').click(function(){
		if ($(this).hasClass("round")){
			$(this).removeClass("round");
		} else {
			$(this).addClass("round");
		}
	});
	/*$('div').on({
		mouseenter : function(){
			$(this).css('background-color', 'yellow')
		},
		mouseleave : function(){
			$(this).css('background-color', 'purple')
		}
	});*/

	$(document).on('keypress', function(event){
		var key = event.keyCode;
		console.log(key);
		if (key == 40){
			$('div').velocity({top : '+=10'}, 1);
		}
		if (key == 39){
			$('div').velocity({left : '+=10'}, 1);
		}
		if (key == 38){
			$('div').velocity({top : '-=10'}, 1);
		}
		if (key == 37){
			$('div').velocity({left : '-=10'}, 1);
		}
	});

	var pos = $('.shop').offset();
	console.log(pos);
	$('.add').on('click', function(){
		var item = $(this).offset();
		$(this).parent().css('position', 'relative')
		.velocity({top : pos.top-item.top+35, left : pos.left-item.left+40}, 200)
		.velocity("fadeOut", 50);
		$(this).remove();
		//.velocity({'top' : pos.top}, 1000);
	});
});

