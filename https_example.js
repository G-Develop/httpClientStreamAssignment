var https = require('https');


var options = {
	host: 'www.google.ca',
	path: '/'
};

//called by https when the reques the  made. 
var callback = function (response) {
	console.log('In response handler callback!');

	response.on('data', function(chunk) {
		console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' ---]');
		console.log(chunk.toString());
	});
};

console.log("I'm about to make the reqeust !");

https.request(options, callback).end();

console.log("I've made the requst!");

