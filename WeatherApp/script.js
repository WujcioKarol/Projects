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
<<<<<<< HEAD
  AC: `<i class="fi fi-ac"></i>`,
  AD: `<i class="fi fi-ad"></i>`,
  AE: `<i class="fi fi-ae"></i>`,
  AF: `<i class="fi fi-af"></i>`,
  AG: `<i class="fi fi-ag"></i>`,
  AI: `<i class="fi fi-ai"></i>`,
  AL: `<i class="fi fi-al"></i>`,
  AM: `<i class="fi fi-am"></i>`,
  AO: `<i class="fi fi-ao"></i>`,
  AQ: `<i class="fi fi-aq"></i>`,
  AR: `<i class="fi fi-ar"></i>`,
  AS: `<i class="fi fi-as"></i>`,
  AT: `<i class="fi fi-at"></i>`,
  AU: `<i class="fi fi-au"></i>`,
  AW: `<i class="fi fi-aw"></i>`,
  AX: `<i class="fi fi-ax"></i>`,
  AZ: `<i class="fi fi-az"></i>`,
  BA: `<i class="fi fi-ba"></i>`,
  BB: `<i class="fi fi-bb"></i>`,
  BD: `<i class="fi fi-bd"></i>`,
  BE: `<i class="fi fi-be"></i>`,
  BF: `<i class="fi fi-bf"></i>`,
  BG: `<i class="fi fi-bg"></i>`,
  BH: `<i class="fi fi-bh"></i>`,
  BI: `<i class="fi fi-bi"></i>`,
  BJ: `<i class="fi fi-bj"></i>`,
  BL: `<i class="fi fi-bl"></i>`,
  BM: `<i class="fi fi-bm"></i>`,
  BN: `<i class="fi fi-bn"></i>`,
  BO: `<i class="fi fi-bo"></i>`,
  BQ: `<i class="fi fi-bq"></i>`,
  BR: `<i class="fi fi-br"></i>`,
  BS: `<i class="fi fi-bs"></i>`,
  BT: `<i class="fi fi-bt"></i>`,
  BV: `<i class="fi fi-bv"></i>`,
  BW: `<i class="fi fi-bw"></i>`,
  BY: `<i class="fi fi-by"></i>`,
  BZ: `<i class="fi fi-bz"></i>`,
  CA: `<i class="fi fi-ca"></i>`,
  CC: `<i class="fi fi-cc"></i>`,
  CD: `<i class="fi fi-cd"></i>`,
  CF: `<i class="fi fi-cf"></i>`,
  CG: `<i class="fi fi-cg"></i>`,
  CH: `<i class="fi fi-ch"></i>`,
  CI: `<i class="fi fi-ci"></i>`,
  CK: `<i class="fi fi-ck"></i>`,
  CL: `<i class="fi fi-cl"></i>`,
  CM: `<i class="fi fi-cm"></i>`,
  CN: `<i class="fi fi-cn"></i>`,
  CO: `<i class="fi fi-co"></i>`,
  CP: `<i class="fi fi-cp"></i>`,
  CR: `<i class="fi fi-cr"></i>`,
  CU: `<i class="fi fi-cu"></i>`,
  CV: `<i class="fi fi-cv"></i>`,
  CW: `<i class="fi fi-cw"></i>`,
  CX: `<i class="fi fi-cx"></i>`,
  CY: `<i class="fi fi-cy"></i>`,
  CZ: `<i class="fi fi-cz"></i>`,
  DE: `<i class="fi fi-de"></i>`,
  DG: `<i class="fi fi-dg"></i>`,
  DJ: `<i class="fi fi-dj"></i>`,
  DK: `<i class="fi fi-dk"></i>`,
  DM: `<i class="fi fi-dm"></i>`,
  DO: `<i class="fi fi-do"></i>`,
  DZ: `<i class="fi fi-dz"></i>`,
  EA: `<i class="fi fi-ea"></i>`,
  EC: `<i class="fi fi-ec"></i>`,
  EE: `<i class="fi fi-ee"></i>`,
  EG: `<i class="fi fi-eg"></i>`,
  EH: `<i class="fi fi-eh"></i>`,
  ER: `<i class="fi fi-er"></i>`,
  ES: `<i class="fi fi-es"></i>`,
  ET: `<i class="fi fi-et"></i>`,
  EU: `<i class="fi fi-eu"></i>`,
  FI: `<i class="fi fi-fi"></i>`,
  FJ: `<i class="fi fi-fj"></i>`,
  FK: `<i class="fi fi-fk"></i>`,
  FM: `<i class="fi fi-fm"></i>`,
  FO: `<i class="fi fi-fo"></i>`,
  FR: `<i class="fi fi-fr"></i>`,
  GA: `<i class="fi fi-ga"></i>`,
  GB: `<i class="fi fi-gb"></i>`,
  GD: `<i class="fi fi-gd"></i>`,
  GE: `<i class="fi fi-ge"></i>`,
  GF: `<i class="fi fi-gf"></i>`,
  GG: `<i class="fi fi-gg"></i>`,
  GH: `<i class="fi fi-gh"></i>`,
  GI: `<i class="fi fi-gi"></i>`,
  GL: `<i class="fi fi-gl"></i>`,
  GM: `<i class="fi fi-gm"></i>`,
  GN: `<i class="fi fi-gn"></i>`,
  GP: `<i class="fi fi-gp"></i>`,
  GQ: `<i class="fi fi-gq"></i>`,
  GR: `<i class="fi fi-gr"></i>`,
  GS: `<i class="fi fi-gs"></i>`,
  GT: `<i class="fi fi-gt"></i>`,
  GU: `<i class="fi fi-gu"></i>`,
  GW: `<i class="fi fi-gw"></i>`,
  GY: `<i class="fi fi-gy"></i>`,
  HK: `<i class="fi fi-hk"></i>`,
  HM: `<i class="fi fi-hm"></i>`,
  HN: `<i class="fi fi-hn"></i>`,
  HR: `<i class="fi fi-hr"></i>`,
  HT: `<i class="fi fi-ht"></i>`,
  HU: `<i class="fi fi-hu"></i>`,
  IC: `<i class="fi fi-ic"></i>`,
  ID: `<i class="fi fi-id"></i>`,
  IE: `<i class="fi fi-ie"></i>`,
  IL: `<i class="fi fi-il"></i>`,
  IM: `<i class="fi fi-im"></i>`,
  IN: `<i class="fi fi-in"></i>`,
  IO: `<i class="fi fi-io"></i>`,
  IQ: `<i class="fi fi-iq"></i>`,
  IR: `<i class="fi fi-ir"></i>`,
  IS: `<i class="fi fi-is"></i>`,
  IT: `<i class="fi fi-it"></i>`,
  JE: `<i class="fi fi-je"></i>`,
  JM: `<i class="fi fi-jm"></i>`,
  JO: `<i class="fi fi-jo"></i>`,
  JP: `<i class="fi fi-jp"></i>`,
  KE: `<i class="fi fi-ke"></i>`,
  KG: `<i class="fi fi-kg"></i>`,
  KH: `<i class="fi fi-kh"></i>`,
  KI: `<i class="fi fi-ki"></i>`,
  KM: `<i class="fi fi-km"></i>`,
  KN: `<i class="fi fi-kn"></i>`,
  KP: `<i class="fi fi-kp"></i>`,
  KR: `<i class="fi fi-kr"></i>`,
  KW: `<i class="fi fi-kw"></i>`,
  KY: `<i class="fi fi-ky"></i>`,
  KZ: `<i class="fi fi-kz"></i>`,
  LA: `<i class="fi fi-la"></i>`,
  LB: `<i class="fi fi-lb"></i>`,
  LC: `<i class="fi fi-lc"></i>`,
  LI: `<i class="fi fi-li"></i>`,
  LK: `<i class="fi fi-lk"></i>`,
  LR: `<i class="fi fi-lr"></i>`,
  LS: `<i class="fi fi-ls"></i>`,
  LT: `<i class="fi fi-lt"></i>`,
  LU: `<i class="fi fi-lu"></i>`,
  LV: `<i class="fi fi-lv"></i>`,
  LY: `<i class="fi fi-ly"></i>`,
  MA: `<i class="fi fi-ma"></i>`,
  MC: `<i class="fi fi-mc"></i>`,
  MD: `<i class="fi fi-md"></i>`,
  ME: `<i class="fi fi-me"></i>`,
  MF: `<i class="fi fi-mf"></i>`,
  MG: `<i class="fi fi-mg"></i>`,
  MH: `<i class="fi fi-mh"></i>`,
  MK: `<i class="fi fi-mk"></i>`,
  ML: `<i class="fi fi-ml"></i>`,
  MM: `<i class="fi fi-mm"></i>`,
  MN: `<i class="fi fi-mn"></i>`,
  MO: `<i class="fi fi-mo"></i>`,
  MP: `<i class="fi fi-mp"></i>`,
  MQ: `<i class="fi fi-mq"></i>`,
  MR: `<i class="fi fi-mr"></i>`,
  MS: `<i class="fi fi-ms"></i>`,
  MT: `<i class="fi fi-mt"></i>`,
  MU: `<i class="fi fi-mu"></i>`,
  MV: `<i class="fi fi-mv"></i>`,
  MW: `<i class="fi fi-mw"></i>`,
  MX: `<i class="fi fi-mx"></i>`,
  MY: `<i class="fi fi-my"></i>`,
  MZ: `<i class="fi fi-mz"></i>`,
  NA: `<i class="fi fi-na"></i>`,
  NC: `<i class="fi fi-nc"></i>`,
  NE: `<i class="fi fi-ne"></i>`,
  NF: `<i class="fi fi-nf"></i>`,
  NG: `<i class="fi fi-ng"></i>`,
  NI: `<i class="fi fi-ni"></i>`,
  NL: `<i class="fi fi-nl"></i>`,
  NO: `<i class="fi fi-no"></i>`,
  NP: `<i class="fi fi-np"></i>`,
  NR: `<i class="fi fi-nr"></i>`,
  NU: `<i class="fi fi-nu"></i>`,
  NZ: `<i class="fi fi-nz"></i>`,
  OM: `<i class="fi fi-om"></i>`,
  PA: `<i class="fi fi-pa"></i>`,
  PE: `<i class="fi fi-pe"></i>`,
  PF: `<i class="fi fi-pf"></i>`,
  PG: `<i class="fi fi-pg"></i>`,
  PH: `<i class="fi fi-ph"></i>`,
  PK: `<i class="fi fi-pk"></i>`,
  PL: `<i class="fi fi-pl"></i>`,
  PM: `<i class="fi fi-pm"></i>`,
  PN: `<i class="fi fi-pn"></i>`,
  PR: `<i class="fi fi-pr"></i>`,
  PS: `<i class="fi fi-ps"></i>`,
  PT: `<i class="fi fi-pt"></i>`,
  PW: `<i class="fi fi-pw"></i>`,
  PY: `<i class="fi fi-py"></i>`,
  QA: `<i class="fi fi-qa"></i>`,
  RE: `<i class="fi fi-re"></i>`,
  RO: `<i class="fi fi-ro"></i>`,
  RS: `<i class="fi fi-rs"></i>`,
  RU: `<i class="fi fi-ru"></i>`,
  RW: `<i class="fi fi-rw"></i>`,
  SA: `<i class="fi fi-sa"></i>`,
  SB: `<i class="fi fi-sb"></i>`,
  SC: `<i class="fi fi-sc"></i>`,
  SD: `<i class="fi fi-sd"></i>`,
  SE: `<i class="fi fi-se"></i>`,
  SG: `<i class="fi fi-sg"></i>`,
  SH: `<i class="fi fi-sh"></i>`,
  SI: `<i class="fi fi-si"></i>`,
  SJ: `<i class="fi fi-sj"></i>`,
  SK: `<i class="fi fi-sk"></i>`,
  SL: `<i class="fi fi-sl"></i>`,
  SM: `<i class="fi fi-sm"></i>`,
  SN: `<i class="fi fi-sn"></i>`,
  SO: `<i class="fi fi-so"></i>`,
  SR: `<i class="fi fi-sr"></i>`,
  SS: `<i class="fi fi-ss"></i>`,
  ST: `<i class="fi fi-st"></i>`,
  SV: `<i class="fi fi-sv"></i>`,
  SX: `<i class="fi fi-sx"></i>`,
  SY: `<i class="fi fi-sy"></i>`,
  SZ: `<i class="fi fi-sz"></i>`,
  TA: `<i class="fi fi-ta"></i>`,
  TC: `<i class="fi fi-tc"></i>`,
  TD: `<i class="fi fi-td"></i>`,
  TF: `<i class="fi fi-tf"></i>`,
  TG: `<i class="fi fi-tg"></i>`,
  TH: `<i class="fi fi-th"></i>`,
  TJ: `<i class="fi fi-tj"></i>`,
  TK: `<i class="fi fi-tk"></i>`,
  TL: `<i class="fi fi-tl"></i>`,
  TM: `<i class="fi fi-tm"></i>`,
  TN: `<i class="fi fi-tn"></i>`,
  TO: `<i class="fi fi-to"></i>`,
  TR: `<i class="fi fi-tr"></i>`,
  TT: `<i class="fi fi-tt"></i>`,
  TV: `<i class="fi fi-tv"></i>`,
  TW: `<i class="fi fi-tw"></i>`,
  TZ: `<i class="fi fi-tz"></i>`,
  UA: `<i class="fi fi-ua"></i>`,
  UG: `<i class="fi fi-ug"></i>`,
  US: `<i class="fi fi-us"></i>`,
  UY: `<i class="fi fi-uy"></i>`,
  UZ: `<i class="fi fi-uz"></i>`,
  VA: `<i class="fi fi-va"></i>`,
  VC: `<i class="fi fi-vc"></i>`,
  VE: `<i class="fi fi-ve"></i>`,
  VG: `<i class="fi fi-vg"></i>`,
  VI: `<i class="fi fi-vi"></i>`,
  VN: `<i class="fi fi-vn"></i>`,
  VU: `<i class="fi fi-vu"></i>`,
  WF: `<i class="fi fi-wf"></i>`,
  WS: `<i class="fi fi-ws"></i>`,
  XK: `<i class="fi fi-xk"></i>`,
  YE: `<i class="fi fi-ye"></i>`,
  YT: `<i class="fi fi-yt"></i>`,
  ZA: `<i class="fi fi-za"></i>`,
  ZM: `<i class="fi fi-zm"></i>`,
  ZW: `<i class="fi fi-zw"></i>`,
=======
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
>>>>>>> d68905b (commit)
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

function form_func() {
  document.getElementsByClassName("card-weather")[0].style.display = "none";
  search_box = document.getElementById("search-box").value;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search_box}&lang=pl&appid=${api_key}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          errorel.innerHTML = "City not found";
          document.getElementsByClassName("card-weather")[0].style.display =
            "none";
        } else if (data.cod === "400") {
          errorel.innerHTML = "Pole nie może być puste";
          document.getElementsByClassName("card-weather")[0].style.display =
            "none";
        } else {
          const { main, name, sys, weather } = data;
          document.getElementsByClassName("card-weather")[0].style.display =
            "block";
          country.innerHTML = ` ${flags[sys.country]}`;
          city.innerHTML = ` ${name}`;
          icon.innerHTML = ` ${icons[weather[0].main]}`;
          temp.innerHTML = ` ${Math.round(main.temp - 273.15)}°C`;
          description.innerHTML = ` ${weather[0].description}`;
        }
      });
  });
  form[0].value = "";
}
navigator.geolocation.getCurrentPosition(success, error, options);
