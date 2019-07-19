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

app.get('/testapi', function(req,res){
	testHttpGet('https://jsonplaceholder.typicode.com/posts').then(function(result){
		res.send(JSON.parse(result));
	}, function (err){
		// handle
		res.send("I Broke !!!")
	})
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
		console.log("Error: " + err.message);
		deffered.reject(err)
	});
	return deffered.promise;
}

app.listen(port, function(){
	console.log(`Server started on ${port}`); 
})