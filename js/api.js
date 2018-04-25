var weather,description;
var api='http://api.openweathermap.org/data/2.5/weather?q=';
var id='&APPID=e14b4cb410b59c24981c46fe3e32bfc7';
var units='&units=metric';
var city='london';
var url=api+city+id+units;

fetch(url)
.then(  
		    function(response) {  
                return response.json();
            })
            .then(function(data){
               
                console.log(JSON.stringify(data));
                console.log(data["main"]["temp"]);
                
            });
            