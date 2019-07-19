const https = require('https');
const express = require('express');
const app = express();
const port = 7000; 
const bodyParser = require('body-parser');
var Q = require('q');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Pragma");
    next();
});

app.get('/testapi', function(req, res){
	//testHttpGet('https://jsonplaceholder.typicode.com/users').then(function(result){
	//testHttpGet('http://localhost:7000').then(function(result){
	//	res.send(JSON.parse(result));
	//}, function (err){
		// Handle
		//res.send("Something broke !!!")
	//	res.send(err);
	//})
	res.send('API Response');
})

app.post('/postrequest', function(req, res){
	console.log('POST Request');
	console.log(JSON.stringify(req.body));
	res.send('API POST Response');
})

function testHttpGet(url){
	var deffered = Q.defer();
	https.get(url, (resp) => {
		let data = '';
		resp.on('data', (chunk) => {
			data += chunk;
		});
		resp.on('end', () => {
			deffered.resolve(data)
		});
	}).on("error", (err) => {
		deffered.reject(err)
	});
	return deffered.promise;
}

app.listen(port, function(){
	console.log(`Server started on ${port}`); 
})