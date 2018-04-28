
document.getElementById("search").onclick=function(){currentweather()};
function currentweather(){
    var city=document.getElementById("input").value;
    var weather,description;
    var api='http://api.openweathermap.org/data/2.5/weather?q=';
    var id='&APPID=e14b4cb410b59c24981c46fe3e32bfc7';
    var units='&units=metric';
    var url=api+city+id+units;
        fetch(url)
        .then(  
		    function(response) {  
                return response.json();
            })
            .then(function(data){
               
                document.getElementById("temp").innerHTML=data.main.temp;
                document.getElementById("max_temp").innerHTML=data.main.temp_max;
                document.getElementById("min_temp").innerHTML=data.main.temp_min;
                document.getElementById("humid").innerHTML=data.main.humidity;
            });
        } 