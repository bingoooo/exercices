"use strict";
var usersList = ["1", "2"];
var newsList = ["1", "2", "3"];
var news = [];
var users = [];

function ajaxCall(table, target){
	for (var i = 0; i < usersList.length; i++){
		var currentUrl = "/Base/json/user-" + table[i] + ".json"
		$.ajax({
			url : currentUrl,
			type : "GET",
			dataType : "json",
			success : function(json){
				var template = '<p>{{pseudo}}<p>';
				var html = Mustache.render(template, json);
				
			},
			error : function(){
				console.log('erreur de chargement ajax');
			},
			complete : function(){
				console.log('fin de requête ajax');
			}
		});
	}
}

ajaxCall(usersList, users);
ajaxCall(newsList, news);

var currentUser = users[0];
var currentNews = news[0];
console.log(typeof currentUser);
console.log(typeof currentNews);

var app = {
	config: {
		url:"https://smp.ovh",
		target:"#main"
	},
	init : function(){
		this.makeTpl();
	},
	listeners : function(){
		
	},
	getPage : function(page){
		
	},
	makeTpl: function(){
		var tpl = "<p>{{msg}}</p>";
		var output = Mustache.render(tpl, {msg : "Coucous les simploniens !"});
		$("#main").html(output);
	}
};

$(document).ready(function(){
	app.init();

});});