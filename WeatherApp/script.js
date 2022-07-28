const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
const icon = document.querySelector("#icon");
const country = document.querySelector("#country");
const city = document.querySelector("#city");
const description = document.querySelector("#description");
const temp = document.querySelector("#temp");
const icons = {
  Thunderstorm: `<i class="fa-solid fa-cloud-bolt weather-icon"></i>`,
  Drizzle: `<i class="fa-solid fa-cloud-drizzle weather-icon"></i>`,
  Rain: `<i class="fa-solid fa-cloud-rain weather-icon"></i>`,
  Snow: `<i class="fa-solid fa-cloud-snow weather-icon"></i>`,
  Atmosphere: `<i class="fa-solid fa-cloud-fog weather-icon"></i>`,
  Clear: `<i class="fa-solid fa-sun weather-icon"></i>`,
  Clouds: `<i class="fa-solid fa-cloud weather-icon"></i>`,
};
var lat, log;
function success(pos) {
  const crd = pos.coords;
  lat = crd.latitude;
  log = crd.longitude;
  const api_key = "e4527fe95c2113f6bb9838c18866527d";
  const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&lang=pl&appid=${api_key}`;
  fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      icon.innerHTML = icons[weather[0].main];
      country.innerHTML = sys.country;
      city.innerHTML = name;
      description.innerHTML = weather[0].description;
      temp.innerHTML = `${Math.round(main.temp - 273.15)}<sup>°C</sup>`;
      console.log(data);
    })
    .catch((error) => console.log(error));
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
