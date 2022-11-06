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
