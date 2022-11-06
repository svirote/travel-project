function list(response) {
  console.log(response.data);
  completeList = response.data;

  let listVisited = document.querySelector(".countries-visited");
  let bucketList = document.querySelector(".countries-of-the-world");

  completeList.forEach(function (country) {
    if (listing.includes(country.name)) {
    } else {
      bucketList.innerHTML =
        bucketList.innerHTML +
        `<div class="list-visited"> 
            <i class="fa-regular fa-square"></i> ${country.name} <br/>
        </div>`;
    }
  });
}

function allCountries() {
  let apiUrlStart =
    "https://restcountries.com/v2/all?fields=name,altSpellings,capital";
  let completeUrl = `${apiUrlStart}`;
  axios.get(completeUrl).then(list);
}

let information = "all";

allCountries();

var listing = [
  "Austria",
  "Belgium",
  "Brazil",
  "Croatia",
  "Czech Republic",
  "Estonia",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Ireland",
  "Italy",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Monaco",
  "Netherlands",
  "Poland",
  "Portugal",
  "Spain",
  "Switzerland",
  "Turkey",
  "United Kingdom",
];
