var city;
var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&APPID=fcce6d821375237dd1f30170ce357f24";
var units = "&units=imperial";

$("#searchButton").click(function() {
  //alert("searched city");
  city = $("input[name=city]").val();
  var queryURL =
    "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    apiKey +
    units;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#currentWeather").html("");

    $("#currentWeather").append(
      "<p> Humidity: " + response.main.humidity + "</p>"
    );
    $("#currentWeather").append("<p> Location: " + response.name + "</p>");
    $("#currentWeather").append(
      "<p> Current Temp: " + response.main.temp + "</p>"
    );

    //   city = $("input[name=city]").val();
    // var queryURL =
    //   "api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey + units;
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
    //   console.log(response);
    //   $("#currentWeather").html("");

    //   $("#forcast")
    // };

    $("#city").html(response.name);
  });

  // function() {
  //   var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey + units;
  //   $.ajax ({
  //     url: queryURL,
  //     method:"GET"
  //   })
  // }

  //html append
});
document.getElementById("searchButton").click();
function liveWeather(city) {}

// GIVEN a weather dashboard with form inputs  X
// WHEN I search for a city=  X
// ******API KEY -******fcce6d821375237dd1f30170ce357f24************* THEN I am presented with current and future conditions for that city and that city is added to the search historyX
// ******API KEY - THEN I am presented with current and future conditions for that city and that city is added to the search historyX
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// ```

// The following image demonstrates the application functionality:

// ![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

// ## Review

// You are required to submit the following for review:

// * The URL of the deployed application.

// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

// - - -
// © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
// *\
