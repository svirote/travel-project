function verifyUserData(info) {
  if (info === null || info === "") {
    alert(`❌ Oh noooo, something is missing. \n Please restart. 😕`);
    return true;
  }
}

function visitorSuggestion() {
  let name = prompt("What is your name?");
  if (verifyUserData(name)) {
  } else {
    let country = prompt("Which country should I go next?");
    if (verifyUserData(country)) {
    } else {
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

      if (listing.includes(country)) {
        alert(
          `🙈 Thanks for your suggestion, ${name}!\n But I have already been in ${country}. 😉`
        );
      } else {
        alert(
          `✔️ Thanks for your suggestion, ${name}!\n I'll consider ${country} for my next trip. 👋`
        );
      }
    }
  }
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

let suggestion = document.querySelector(".suggestion");
suggestion.addEventListener("click", visitorSuggestion);
