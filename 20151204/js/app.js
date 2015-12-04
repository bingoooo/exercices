"use strict";

console.log('Link : app.js');

$(document).ready(function(){
	//console.log('Link : jquery-2.1.4.js');

	
	/*var foo = 2;
	function multiple(arg){
		return arg * foo;
	}

	console.log(multiple(3));
	console.log('foo = ' + foo);

	function faitNimp(){
		foo = 4;
		return multiple(3);
	}

	console.log(faitNimp());
	console.log('foo = ' + foo);*/

	var objet = {
		nom: "DANT",
		prenom: "Benjamin",
		github: "bingoooo",
		simplonline: "dant_benjamin",
	}

	$.ajax({
		url : "me.json",
		type: "GET",
		dataType: "json",
		success: function(data){
			//console.log(data);
			insert(data);
		},
		error: function(){
			console.log('erreur chargement json');
		},
		complete: function(){
			console.log('chargement json terminé');
		}
	});

	function insert(data){
		for (var element in data){
			var path = $("div[data-me="+element+"]");
			//console.log(path);
			if (path.length == 0){
				$("body").append("<div data-me=" + element + "><h2>" + element + "</h2><p>" + objet[element] + "</p></div>");
			} else {
				$("div[data-me=" + element + "] p").html(objet[element]);
			}
		}
	}
	
	//insert(objet);
	//insert('nom', objet['nom']);
	/*for (var element in objet) {
		var path = $("div[data-me="+element+"]");
		console.log(path);
		if (path.length == 0){
			$("body").append("<div data-me=" + element + "><h2>Simplonline</h2><p>" + objet[element] + "</p></div>");
		} else {
			$("div[data-me=" + element + "]").find("p").eq(0).html(objet[element]);		
		}
		//$("div").attr("data-me", element).html(objet[element]);		
	}*/
});