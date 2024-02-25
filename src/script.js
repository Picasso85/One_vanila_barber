window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 300);

  // Adjust section margins
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.toggle("scrolled", window.scrollY > 300);
  });
});

const header = document.querySelector("header");

const stickHeader = () => {
  const scroll = window.scrollY;

  if (scroll > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", stickHeader);

// on/off hamburger menu

const menu = document.querySelector(".menu");
const hamburgerBtn = document.querySelector(".hamburger");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

// scroll

const menuLinks = document.querySelectorAll(".menu_link");

menuLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    const key = e.target.dataset.key;

    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset -
      84;

    menu.classList.remove("active");
    hamburgerBtn.classList.remove("active");

    window.scrollTo({ top: section, behavior: "smooth" });
  })
);
