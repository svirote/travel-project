function visitorSuggestion() {
  document.querySelector(".suggestion-box").style.display = "block";
  // window.location = "/index.html#form-suggestion";
  document
    .getElementById("form-suggestion")
    .scrollIntoView({ behavior: "smooth" });
}

function footer() {
  let footerText = document.querySelector("#footer-text");

  footerText.innerHTML =
    footerText.innerHTML +
    `
          <div class="container-2 row">
        <div class="col-8">
          This project was coded by Suelen Virote, and it is
          <a
            href="https://github.com/svirote/travel-project"
            target="_blank"
            title="GitHub Suelen Virote"
          >
            open-sourced
          </a>
        </div>
        <div class="col-4">
          <div class="icon-links d-flex justify-content-end">
            <a
              href="https://github.com/svirote"
              target="_blank"
              title="GitHub Suelen Virote"
            >
              <i class="fa-brands fa-github"></i>
            </a>

            <a href="#" target="_blank" title="LinkedIn">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div> 
    `;
}

footer();

document.querySelector(".suggestion-box").style.display = "none";

let suggestion = document.querySelector(".suggestion");
suggestion.addEventListener("click", visitorSuggestion);

const form = document.querySelector("#form-suggestion");
const submitButton = document.querySelector(".send-suggestion");
const scriptURL =
  "https://script.google.com/a/macros/id.uff.br/s/AKfycbxZdmoa3pSeG-oPKcSqBVyVbKRd_FDbY3CL0sT481Qw8GWzvY3Gox2Uq4fMnXEhYkI0/exec";

form.addEventListener("submit", (event) => {
  submitButton.disabled = true;
  submitButton.innerHTML = "Loading...";
  event.preventDefault();

  let name = document.getElementById("user-name").value;
  let country = document.getElementById("country-suggestion").value;

  let listing = [
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

  let section = document.querySelector(".user-suggestion");

  if (listing.includes(country)) {
    document.querySelector(".suggestion-box").style.display = "none";
    section.innerHTML = `<div class="text-center">
    🙈 Thanks for your suggestion, <strong> ${name} </strong>! <br/>
     But I have already been in <strong> ${country}</strong>. 😉
    </div>`;
  } else {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(function () {
        document.querySelector(".suggestion-box").style.display = "none";
        section.innerHTML = `<div class="text-center">
        ✔️ Thanks for your suggestion, <strong> ${name} </strong> !<br/ > 
        I'll consider <strong> ${country}</strong> for my next trip. 👋
        </div>`;
      })

      .catch(() => {
        section.innerHTML = `<div class="text-center">
        ❌ Oh noooo, something is missing. \n Please restart. 😕
        </div>`;
      });
  }
});
