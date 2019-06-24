var http = require('http');
let request = require('request');
let apiKey = '86c3ae85f327c6c5d06640781514b28d';
let city = 'kolkata';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
var server = http.createServer(function(request, response){
	var request = require('request');
	request(url, function (err, res, body){
		//all logic goes here
		if(err){
			console.log('error: ', err);
		}
		else{
			let weather = JSON.parse(body);
			console.log(weather);
			let message = "The temperature in ";
			process.stdout.write(message);
			process.stdout.write(weather.name);
			process.stdout.write(" is ");
			console.log(weather.main.temp);
			response.write(message);
			response.write(weather.name);
			response.write(" is ");
			temperature = weather.main.temp_min;
			response.write(temperature);
			response.end();
		}
	});
}).listen(8081);


//what we can do is implement react inside here, so that the code runs better and implementation gets easier, let's execute that!
