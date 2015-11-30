"use strict";

console.log('JavaScript Linked');
var navPrior = ['#html', '#css', '#autre', '#balises', '#attributs', '#special', '#synthaxe', '#selectors', '#pseudoclass', '#boxmodel', '#soc', '#dry'];
var hiddenContent = navPrior.slice(3, navPrior.length);
console.log(hiddenContent);

function clickToHide(id){
	$(id).click(function(){
		var target = id + '-ss';
		$(target).toggleClass('hide');
	});
}

function hide(id){
	$(id).addClass('hide');
}

$(document).ready(function(){
	for (var i = 0; i < hiddenContent.length; i++){
		hide(hiddenContent[i]);
	};
	for (var i = 0; i < navPrior.length; i++){
		clickToHide(navPrior[i]);
	};
//	hide(navPrior[0]);

	console.log('jquery');
});