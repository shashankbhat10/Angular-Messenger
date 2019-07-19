const express = require('express');
const app = express();
const port = 7000;
const q = require('q');
const http = require('http');
const https = require('https');

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'PUT, GET, POST, DELETE, OPTIONS');
    next();
});

app.get('/', function(req,res){
	res.send("test");
})

app.get('/nasa', function(req,res){
	callHttpNasa().then(function(result){
		if (err){
			res.send("Error")
		} else {
			res.send(result)
		}	
	})
})

function callHttpNasa(){
	var deferred = q.defer();
	const req = https.request(options, (res) => {
		console.log(`${options.host} : ${res.statusCode}`);
		res.setEncoding('utf8');

		res.on('data', (chunk) => {
			output += chunk;
		});

		res.on('end', () => {
			let obj = JSON.parse(output);
			deferred.resolve(obj);
			//onResult(res.statusCode, obj);
		});
	});

	req.on('error', (err) => {
		deferred.reject(err);
		// res.send('error: ' + err.message);
	});

	// req.end();
	return deferred.promise
}
//https://jsonplaceholder.typicode.com/posts
const options = {
	host: 'jsonplaceholder.typicode.com',
	port: 443,
	path: '/posts',
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	}
};

app.listen(port, function(){
	console.log(`Server started on ${port}`);
})