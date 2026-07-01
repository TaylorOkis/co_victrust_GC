export function initEventListeners() {
  const hamMenu = document.querySelector(".topnav__ham-menu");
  const topNavMenu = document.querySelector(".topnav__menu");

  if (hamMenu) {
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      topNavMenu.classList.toggle("active");
      console.log("Hamburger menu clicked");
    });
  }
}
