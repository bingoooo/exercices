var foo = "bonjour, je m'appelle Benjamin</br> et je suis en train de faire une formation Simplon";

var toto = "O LIBRE VEUX !!!!!";

function comparChaine(str){
	var maj = str.toUpperCase();
	if (str == maj){
		document.writeln(str + " : n'a que des majuscules.</br>");
	} else {
		document.writeln(str + " : n'est pas qu'en majuscules.</br>")
	}
}

comparChaine("blablablablablablabla");
comparChaine(foo);
comparChaine(toto);