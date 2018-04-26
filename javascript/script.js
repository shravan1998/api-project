var query;
function load() {
    query = document.getElementById("param").innerHTML.value;
   fetch('http://www.metaweather.com/api/location/search/?query=(query)')
   .then(
       function(response) {
           if(response.status == 200){
               document.getElementById("api").innerHTML = response.text;
           }
       }
   )
}