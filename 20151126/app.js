function comparChaine(str){
	var maj = str.toUpperCase();
	if (str == maj){
		document.writeln(str + " : n'a que des majuscules.</br>");
	} else {
		document.writeln(str + " : n'est pas qu'en majuscules.</br>")
	}
}
$(document).ready(function(){
	//var chaine = comparChaine("Bonjour et Bienvenue !");
	$('#identity').click(function(){
		$('#main-content').load("ajax/identity.html");
	});
	$('#grade').click(function(){
		$('#main-content').load("ajax/grade.html");
	});
	$('#work').click(function(){
		$('#main-content').load("ajax/work.html");
	});
	$('#hobbies').click(function(){
		$('#main-content').load("ajax/hobbies.html");
	});
});
