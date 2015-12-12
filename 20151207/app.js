var express = require('express');
var app = express();

var table = ["mon truc 1", "mon truc 2", "mon truc 3"];

app.use('/', express.static('public'));

app.get('/todos', function(req, res){
	res.json(table);
});
app.post('/todos', function(req, res){

});

var server = app.listen(3003, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening to http://%s:%s', host, port);
});
