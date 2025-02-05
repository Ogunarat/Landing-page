const menuToggle = document.querySelector(".menu-list");
const navMenu = document.querySelector(".header-navbar");
const btn = document.querySelector(".header-right");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  btn.classList.toggle("active");
  document.addEventListener("click", (e) => {
    if (
      e.composedPath().includes(menuToggle) ||
      e.composedPath().includes(navMenu) ||
      e.composedPath().includes(btn)
    ) {
      return;
    } else {
      navMenu.classList.remove("active");
      btn.classList.remove("active");
    }
  });
});
