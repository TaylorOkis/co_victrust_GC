import "./style.css";
import PhoneIcon from "./assets/icons/Phone.svg";
import PipeImage from "./assets/images/pipes.png";
import { createIcons, Headset, ShieldCheck, Truck, Clock4 } from "lucide";

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

  <section class="offer">
    <div class="wrapper offer__wrapper">
      <div class="offer__bg">

        <div class="offer__item">
          <div class="offer__logo-container">
            <i data-lucide="clock-4" class="offer__logo"></i>
          </div>
          <div class="offer__description">
            <div class="offer__description-title">5+ Years
            </div>
            <div class="offer__description-content">
              Experience and expertise
            </div>
          </div>
        </div>

        <div class="offer__item">
          <div class="offer__logo-container">
            <i data-lucide="truck" class="offer__logo"></i>
          </div>
          <div class="offer__description">
            <div class="offer__description-title">Fast Delivery
            </div>
            <div class="offer__description-content">
              On-time delivery across region
            </div>
          </div>
        </div>

        <div class="offer__item">
          <div class="offer__logo-container">
            <i data-lucide="shield-check" class="offer__logo"></i>
          </div>
          <div class="offer__description">
            <div class="offer__description-title">Premium Quality
            </div>
            <div class="offer__description-content">
              Only trusted brands and materials
            </div>
          </div>
        </div>

        <div class="offer__item">
          <div class="offer__logo-container">
            <i data-lucide="headset" class="offer__logo"></i>
          </div>
          <div class="offer__description">
            <div class="offer__description-title">Expert Support
            </div>
            <div class="offer__description-content">
              We help you choose the right product
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="category">
    <div class="wrapper category__wrapper">
      <div class="category__heading">
        <h2 class="category__title">Find what you need</h2>
        <p class="category__description">We supply premium plumbing materials across the following categories</p>
      </div>
      <div class="category__grid">
        <div class="category__card">
          <img src="${PipeImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Pipes &</span>
          <span class="category__card-sub">Fittings</span>
        </div>

        <div class="category__card">
          <img src="${PipeImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Pipes &</span>
          <span class="category__card-sub">Fittings</span>
        </div>

        <div class="category__card">
          <img src="${PipeImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Pipes &</span>
          <span class="category__card-sub">Fittings</span>
        </div>

        <div class="category__card">
          <img src="${PipeImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Pipes &</span>
          <span class="category__card-sub">Fittings</span>
        </div>

        <div class="category__card">
          <img src="${PipeImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Pipes &</span>
          <span class="category__card-sub">Fittings</span>
        </div>

        <div class="category__card">
          <img src="${PipeImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Pipes &</span>
          <span class="category__card-sub">Fittings</span>
        </div>

        <div class="category__card">
          <img src="${PipeImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Pipes &</span>
          <span class="category__card-sub">Fittings</span>
        </div>

        <div class="category__card">
          <img src="${PipeImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Pipes &</span>
          <span class="category__card-sub">Fittings</span>
        </div>
      </div>
    </div>
  </section>
</main>

<footer>This is the Footer</footer>
`;

createIcons({
  icons: {
    Headset,
    ShieldCheck,
    Truck,
    Clock4,
  },
});
