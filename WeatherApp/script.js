const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
const api_key = "e4527fe95c2113f6bb9838c18866527d";

const country = document.getElementById("country");
const city = document.getElementById("city");
const icon = document.getElementById("icon");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const errorel = document.getElementById("error");
const form = document.querySelector("#submit");
const icons = {
  Thunderstorm: `<i class="fa-solid fa-cloud-bolt weather-icon"></i>`,
  Drizzle: `<i class="fa-solid fa-cloud-drizzle weather-icon"></i>`,
  Rain: `<i class="fa-solid fa-cloud-rain weather-icon"></i>`,
  Snow: `<i class="fa-solid fa-cloud-snow weather-icon"></i>`,
  Atmosphere: `<i class="fa-solid fa-cloud-fog weather-icon"></i>`,
  Clear: `<i class="fa-solid fa-sun weather-icon"></i>`,
  Clouds: `<i class="fa-solid fa-cloud weather-icon"></i>`,
};
const flags = {
  PL: `<span class="fi fi-pl"></span>`,
  DE: `<span class="fi fi-de"></span>`,
  UK: `<span class="fi fi-uk"></span>`,
  US: `<span class="fi fi-us"></span>`,
  FR: `<span class="fi fi-fr"></span>`,
  ES: `<span class="fi fi-es"></span>`,
  IT: `<span class="fi fi-it"></span>`,
  JP: `<span class="fi fi-jp"></span>`,
  CN: `<span class="fi fi-cn"></span>`,
  KR: `<span class="fi fi-kr"></span>`,
  RU: `<span class="fi fi-ru"></span>`,
  CA: `<span class="fi fi-ca"></span>`,
  AU: `<span class="fi fi-au"></span>`,
  BR: `<span class="fi fi-br"></span>`,
  TR: `<span class="fi fi-tr"></span>`,
  MX: `<span class="fi fi-mx"></span>`,
  SE: `<span class="fi fi-se"></span>`,
  NO: `<span class="fi fi-no"></span>`,
  DK: `<span class="fi fi-dk"></span>`,
  FI: `<span class="fi fi-fi"></span>`,
  IE: `<span class="fi fi-ie"></span>`,
  NZ: `<span class="fi fi-nz"></span>`,
  CH: `<span class="fi fi-ch"></span>`,
  AT: `<span class="fi fi-at"></span>`,
  BE: `<span class="fi fi-be"></span>`,
  HR: `<span class="fi fi-hr"></span>`,
  CZ: `<span class="fi fi-cz"></span>`,
  HU: `<span class="fi fi-hu"></span>`,
  LT: `<span class="fi fi-lt"></span>`,
  LV: `<span class="fi fi-lv"></span>`,
  RO: `<span class="fi fi-ro"></span>`,
  SK: `<span class="fi fi-sk"></span>`,
  SI: `<span class="fi fi-si"></span>`,
  SE: `<span class="fi fi-se"></span>`,
  GB: `<span class="fi fi-gb"></span>`,
  US: `<span class="fi fi-us"></span>`,
  CA: `<span class="fi fi-ca"></span>`,
  AU: `<span class="fi fi-au"></span>`,
  NZ: `<span class="fi fi-nz"></span>`,
  CH: `<span class="fi fi-ch"></span>`,
  AT: `<span class="fi fi-at"></span>`,
  BE: `<span class="fi fi-be"></span>`,
  HR: `<span class="fi fi-hr"></span>`,
  CZ: `<span class="fi fi-cz"></span>`,
  HU: `<span class="fi fi-hu"></span>`,
  LT: `<span class="fi fi-lt"></span>`,
  LV: `<span class="fi fi-lv"></span>`,
  RO: `<span class="fi fi-ro"></span>`,
  SK: `<span class="fi fi-sk"></span>`,
  SI: `<span class="fi fi-si"></span>`,
  SE: `<span class="fi fi-se"></span>`,
  GB: `<span class="fi fi-gb"></span>`,
  US: `<span class="fi fi-us"></span>`,
  CA: `<span class="fi fi-ca"></span>`,
  AU: `<span class="fi fi-au"></span>`,
  NZ: `<span class="fi fi-nz"></span>`,
  CH: `<span class="fi fi-ch"></span>`,
  AT: `<span class="fi fi-at"></span>`,
  BE: `<span class="fi fi-be"></span>`,
  HR: `<span class="fi fi-hr"></span>`,
  CZ: `<span class="fi fi-cz"></span>`,
};
var lat, log;
function success(pos) {
  if (form[0].value === "") {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("jd kurwe");
    });
  } else {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("tu bedzie fetch");
    });
  }
  // let search = document.getElementById("search-box");
  // if (search.value !== "") {
  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     console.log(e);
  //     const search = document.getElementById("search-box").value;
  //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=pl&appid=${api_key}`;
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.cod === "404") {
  //           errorel.innerHTML = "City not found";
  //         } else {
  //           const { main, name, sys, weather } = data;
  //           document.getElementsByClassName("card-weather")[0].style.display =
  //             "block";
  //           country.innerHTML = ` ${flags[sys.country]}`;
  //           city.innerHTML = ` ${name}`;
  //           icon.innerHTML = ` ${icons[weather[0].main]}`;
  //           temp.innerHTML = ` ${Math.round(main.temp - 273.15)}°C`;
  //           description.innerHTML = ` ${weather[0].description}`;
  //         }
  //       });
  //   });
  // } else {
  const crd = pos.coords;
  lat = crd.latitude;
  log = crd.longitude;
  const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&lang=pl&appid=${api_key}`;
  fetch(api_url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      document.getElementsByClassName("card-weather")[0].style.display =
        "block";
      country.innerHTML = ` ${flags[sys.country]}`;
      city.innerHTML = ` ${name}`;
      icon.innerHTML = ` ${icons[weather[0].main]}`;
      temp.innerHTML = ` ${Math.round(main.temp - 273.15)}°C`;
      description.innerHTML = ` ${weather[0].description}`;
    });
}
// }

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
