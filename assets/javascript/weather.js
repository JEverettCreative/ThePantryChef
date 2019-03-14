// API call
var myAPI = "f48f376b3f3a0f2f2c42323709cb6fb9";

var newQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=Nashville&units=imperial&appid=" + myAPI;

console.log(newQueryURL);
$.ajax({
    url: newQueryURL,
    method: "GET"
}).then(function(response){
    console.log(response);

    // Get current temperature
    var temperature = response.main.temp;
    temperature = Math.floor(temperature);
    console.log(temperature);


    
})



// // Only run display-related functions after the document loads
// $(document).ready(function(){




// });