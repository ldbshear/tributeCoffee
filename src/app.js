const apiKey = "3711439e85a5b0487eab981ef384735a";
// let url = "http://api.openweathermap.org/data/2.5/find?q=";
// let city = "Sydney";

// function displayWeather(response) {
//   console.log(response);
//   let currentWeatherTemp = response.data.list[0].main.temp;
//   currentWeatherTemp = Math.round(currentWeatherTemp);
//   let currentWeather = response.data.list[0].weather[0].description;
//   let newh1 = document.getElementById("update");
//   newh1.innerHTML = `It is ${currentWeatherTemp}° in ${city} with ${currentWeather}.`;
// }

// axios.get(`${url}${city},AU&units=metric&appid=${apiKey}`).then(displayWeather);

let weatherURL = "http://api.openweathermap.org/data/2.5/weather?";

function getCoordinates(position) {
  if (position == null) return;
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let userCoords = `lat=${latitude}&lon=${longitude}`;
  console.log(position);
  console.log(latitude);
  console.log(longitude);
  console.log(userCoords);
  function myWeather(response) {
    let newh1 = document.getElementById("update");
    let location = response.data.name;
    let updateWeather = response.data.main.temp;
    console.log(response);
    console.log(updateWeather);
    newh1.innerHTML = `The current temp in ${location} is ${updateWeather}°C.`;
  }

  axios
    .get(`${weatherURL}${userCoords}&units=metric&appid=${apiKey}`)
    .then(myWeather);
}

navigator.geolocation.getCurrentPosition(getCoordinates);
