const menuToggle = document.querySelector(".menu-list");
const navMenu = document.querySelector(".header-navbar");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  document.addEventListener("click", (e) => {
    if (
      e.composedPath().includes(menuToggle) ||
      e.composedPath().includes(navMenu)
    ) {
      return;
    } else {
      navMenu.classList.remove("active");
    }
  });
});
