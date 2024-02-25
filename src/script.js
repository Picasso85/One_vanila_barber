window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 300);

  // Adjust section margins
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.toggle("scrolled", window.scrollY > 300);
  });
});
