import "./style.css";
import PhoneIcon from "./assets/icons/Phone.svg";

document.querySelector("#app").innerHTML = `
<header class="topnav">
  <div class="wrapper topnav__wrapper">
    <div class="topnav__home">
      <a class="topnav__homelink">
        <img class="topnav__logo" src="/logo.svg" width="36" height="40" />
        <span></span>
        <div class="topnav__logo-text">
          <span>C.O VICTRUST</span>
          <span>GLOBAL CONCEPT</span>
        </div>
      </a>
    </div>

    <div class="topnav__ham-menu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</header>

<main id="main">
  <section class="hero">
    <div class="hero__linear--overlay"></div>
    <div class="hero__linear--blur-overlay"></div>
    <div class="wrapper hero__wrapper">
      <h1 class="hero__title">Reliable Plumbing & Building Supplies for Every Project</h1>
      <p class="hero__description">A trusted supplier of quality plumbing and building materials, helping homeowners and professionals complete projects safely, efficiently, and with lasting results.</p>
      <div class="hero__button">
        <div class="hero__button-inside">
          <img src="${PhoneIcon}" alt="Phone icon" class="hero__button-icon" width="20" height="20"/>
          <span class="hero__button-text">Call us: +234-80-1234-5678</span>
        </div>
      </div>
    </div>
  </section>
</main>

<footer>This is the Footer</footer>
`;
