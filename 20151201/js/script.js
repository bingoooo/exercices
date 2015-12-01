console.log('Test JS');
function modulo(value, mod){
	return (value % mod === 0);
}

function fizzReturn(value){
	var mod5 = modulo(value, 5);
	var mod3 = modulo(value, 3);
	if (mod5 && mod3){
		return "fizzbuzz";
	}
	if (mod3){
		return "fizz";
	}
	if (mod5){
		return "buzz";
	}
	return value;
}

function fizzbuzz (value) {
	//votre code ici

	return ((x = (value%3?'':'fizz')+(value%5?'':'buzz'))?x:value);

	//return fizzReturn(value);
	
	//fin de votre code	
}

function lesCentsPremiers(){
	var result = "";
	for (var i = 0; i <= 100; i++){
		result = result + " " + fizzbuzz(i);
	}
	return result;
}

console.log(lesCentsPremiers());