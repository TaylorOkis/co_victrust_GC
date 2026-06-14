import "./style.css";
import PhoneIcon from "./assets/icons/Phone.svg";
import PipeImage from "./assets/images/pipes.png";
import ValveImage from "./assets/images/valves.jpg";
import ToolsImage from "./assets/images/tools.png";
import HoseImage from "./assets/images/hose.png";
import WaterPumpImage from "./assets/images/water_pump.webp";
import ChemicalsImage from "./assets/images/chemicals.png";
import BathroomFixturesImage from "./assets/images/bathroom_fixtures.png";
import SanitaryWaresImage from "./assets/images/sanitary_wares.png";
import ATILlogo from "./assets/images/logos/ATIL-logo-main.png";
import EmporisLogo from "./assets/images/logos/Emporis_logo.png";
import JocamLogo from "./assets/images/logos/jocam_nigeria_ltd_logo.jpg";
import NewayLogo from "./assets/images/logos/Neway.svg";
import NotoreLogo from "./assets/images/logos/notore.png";
import SeflamLogo from "./assets/images/logos/seflam-SGL_logo.png";
import {
  createIcons,
  Headset,
  ShieldCheck,
  Truck,
  Clock4,
  Boxes,
  BadgeCheck,
  LockKeyhole,
  ShoppingCart,
  ClipboardList,
  Phone,
  Mail,
  MapPin,
} from "lucide";

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
      <div class="contact__button">
        <div class="contact__button-inside">
          <img src="${PhoneIcon}" alt="Phone icon" class="contact__button-icon" width="20" height="20"/>
          <span class="contact__button-text">Call us: +234-80-1234-5678</span>
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
          <img src="${BathroomFixturesImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Bathroom</span>
          <span class="category__card-sub">Fixtures</span>
        </div>

        <div class="category__card">
          <img src="${SanitaryWaresImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Sanitary</span>
          <span class="category__card-sub">Wares</span>
        </div>

        <div class="category__card">
          <img src="${ValveImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Valves &</span>
          <span class="category__card-sub">Connectors</span>
        </div>

        <div class="category__card">
          <img src="${WaterPumpImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Water</span>
          <span class="category__card-sub">Pumps</span>
        </div>

        <div class="category__card">
          <img src="${ChemicalsImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Plumbing</span>
          <span class="category__card-sub">Chemicals</span>
        </div>

        <div class="category__card">
          <img src="${HoseImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Hoses &</span>
          <span class="category__card-sub">Pipes</span>
        </div>

        <div class="category__card">
          <img src="${ToolsImage}" alt="An image of a pipes" class="category__card-image" width="765" height="1020"/>
          <div class="category__card-overlay"></div>
          <span class="category__card-name">Tools &</span>
          <span class="category__card-sub">Accessories</span>
        </div>
      </div>
    </div>
  </section>

  <section class="trust">
    <div class="wrapper trust__wrapper">
      <div class="trust__description">
        <span>Why choose us</span>
        <h4>Built on quality. Focused on you.</h4>
        <p>We provide reliable plumbing supplies and excellent service for your needs.</p>
      </div>
      <div class="trust__items">
        <div class="trust__item">
          <div class="trust__item-logo-container">
            <i data-lucide="shield-check" class="trust__item-logo"></i>
          </div>
          <span class="trust__item-title">Premium Materials</span>
          <span class="trust__item-description">Durable, long-lasting products you can trust.</span>
        </div>

        <div class="trust__item">
          <div class="trust__item-logo-container">
            <i data-lucide="boxes" class="trust__item-logo"></i>
          </div>
          <span class="trust__item-title">Bulk Order Availability</span>
          <span class="trust__item-description">Special pricing for contractors, and dealers.</span>
        </div>

        <div class="trust__item">
          <div class="trust__item-logo-container">
            <i data-lucide="truck" class="trust__item-logo"></i>
          </div>
          <span class="trust__item-title">Local & Fast Delivery</span>
          <span class="trust__item-description">Quick delivery to your site or home.</span>
        </div>

        <div class="trust__item">
          <div class="trust__item-logo-container">
            <i data-lucide="badge-check" class="trust__item-logo"></i>
          </div>
          <span class="trust__item-title">Expert Guidance</span>
          <span class="trust__item-description">Get help looking for the right products.</span>
        </div>

        <div class="trust__item">
          <div class="trust__item-logo-container">
            <i data-lucide="lock-keyhole" class="trust__item-logo"></i>
          </div>
          <span class="trust__item-title">Secure Payment</span>
          <span class="trust__item-description">Safe, multiple payment options.</span>
        </div>

        <div class="trust__item">
          <div class="trust__item-logo-container">
            <i data-lucide="headset" class="trust__item-logo"></i>
          </div>
          <span class="trust__item-title">After Sales Support</span>
          <span class="trust__item-description">We're here even after your purchase.</span>
        </div>
      </div>
    </div>
  </section>

  <section class="order">
    <div class="wrapper order__wrapper">
      <div class="order__heading">
        <span>How it works</span>
        <h5>Get your supplies in 3 simple steps</h5>
      </div>

      <div class="order__steps">
        <div class="order__step">
          <div class="order__step-logo-container">
            <i data-lucide="shopping-cart" class="order__step-logo"></i>
            <div class="order__tag-container">
              <i class="order__tag">1</i>
            </div>
          </div>
          <div class="order__step-text">
            <span class="order__title">Browse Products</span>
            <p class="order__desc">Explore our wide range of plumbing supplies.</p>
          </div>
        </div>

        <div class="order__connector"></div>

        <div class="order__step">
          <div class="order__step-logo-container">
            <i data-lucide="clipboard-list" class="order__step-logo"></i>
            <div class="order__tag-container">
              <i class="order__tag">2</i>
            </div>
          </div>
          <div class="order__step-text">
            <span class="order__title">Request Quote / Order</span>
            <p class="order__desc">Make an order or request a quote. We'll confirm availability.</p>
          </div>
        </div>

        <div class="order__connector"></div>

        <div class="order__step">
          <div class="order__step-logo-container">
            <i data-lucide="truck" class="order__step-logo"></i>
            <div class="order__tag-container">
              <i class="order__tag">3</i>
            </div>
          </div>
          <div class="order__step-text">
            <span class="order__title">Fast Delivery</span>
            <p class="order__desc">We pack and deliver quickly to your location.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="testimonial">
    <div class="wrapper testimonial__wrapper">
      <div class="testimonial__heading">
        <h3>Trusted by Professionals and homeowners</h3>
        <p>After getting quality plumbing supplies, everything worked smoothly—no leaks, better flow, and total reliability.</p>
      </div>

      <div class="testimonial__cards">
        <div class="testimonial__card">
          <figure class="testimonial__figure">
            <img />
            <blockquote class="testimonial__blockquote">
              <p class="testimonial__quote-text">"C.O. Victrust Global Concept is more than just a business—it's a testament to hard work, integrity, and excellence. Led by someone truly special, they provide top-notch plumbing, building materials, and general merchandise with unmatched dedication. If you're looking for quality and trust, this is the place to go!"</p>
            </blockquote>

            <figcaption class="testimonial__author-wrapper">
              <p class="testimonial__author-description">
                Janice Hsu<br />
                Founder and CEO, Evermindly
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="client">
    <div class="wrapper client__wrapper">
      <div class="client__logos">
        <div class="client__group">
          <img src="${ATILlogo}" alt="ATIL logo" class="client__logo" width="392" height="101" />
          <img src="${EmporisLogo}" alt="Emporis logo" class="client__logo" width="222" height="55" />
          <img src="${JocamLogo}" alt="Jocam logo" class="client__logo" width="200" height="200" />
          <img src="${NewayLogo}" alt="Neway logo" class="client__logo" width="220" height="100" />
          <img src="${NotoreLogo}" alt="Notore logo" class="client__logo" width="200" height="75" />
          <img src="${SeflamLogo}" alt="Seflam logo" class="client__logo" width="716" height="176"/>
        </div>

        <div class="client__group" aria-hidden="true">
          <img src="${ATILlogo}" alt="ATIL logo" class="client__logo" width="392" height="101" />
          <img src="${EmporisLogo}" alt="Emporis logo" class="client__logo" width="222" height="55" />
          <img src="${JocamLogo}" alt="Jocam logo" class="client__logo" width="200" height="200" />
          <img src="${NewayLogo}" alt="Neway logo" class="client__logo" width="220" height="100" />
          <img src="${NotoreLogo}" alt="Notore logo" class="client__logo" width="200" height="75" />
          <img src="${SeflamLogo}" alt="Seflam logo" class="client__logo" width="716" height="176"/>
        </div>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="wrapper cta__wrapper">
      <div class="cta__text">
        <h4 class="cta__title">Need plumbing supplies for your next project?</h4>
        <p class="cta__subtitle">Request a quote today and we'll get back to you within 24 hours.</p>
      </div>

      <div class="cta__action">
        <div id="cta__button" class="contact__button">
          <div class="contact__button-inside">
            <img src="${PhoneIcon}" alt="Phone icon" class="contact__button-icon" width="20" height="20"/>
            <span class="contact__button-text">Call us: +234-80-1234-5678</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="wrapper footer__wrapper">
    <div class="footer__left-side">
      <a class="topnav__homelink">
        <img class="topnav__logo" src="/logo.svg" width="36" height="40" />
        <span id="logo__divider"></span>
        <div class="topnav__logo-text">
          <span>C.O VICTRUST</span>
          <span id="logo__text-bottom">GLOBAL CONCEPT</span>
        </div>
      </a>

      <p class="footer__description">Your trusted partner for high quality plumbing supplies and excellent services.</p>

      <div class="footer__social">
        <img />
        <img />
        <img />
        <img />
      </div>
    </div>

    <div class="footer__right-side">
      <div class="footer__items">
        <div class="footer__column">
          <h6 class="footer__column-title">Company</h6>
          <ul class="footer__links">
            <li class="footer__link-item"><a class="footer__link">About us</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <h6 class="footer__column-title">Contact us</h6>
          <div class="footer__contact-infos">
          <ul>
            <li>
              <div class="footer__icon">
                <i data-lucide="map-pin"></i>
              </div>
              <span>mile 3, ps114 Big U-line, Woji, Port Harcourt 500101, Rivers</span>
            </li>

            <div class="footer__contact-info">
              <div class="footer__icon">
                <i data-lucide="phone"></i>
              </div>
              <span>+234 1234 5678</span>
            </div>

            <div class="footer__contact-info">
              <div class="footer__icon">
                <i data-lucide="mail"></i>
              </div>
              <span>c.ovictrustglobalconcept@gmail.com</span>
            </div>

            <div class="footer__contact-info">
              <div class="footer__icon">
                <i data-lucide="clock-4"></i>
              </div>
              <span>Mon - Sat 7:300 AM - 5:00 PM</span>
            </div>
          </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__copyright">&#9400; 2026 C.O Victrust Global Concept. All right reserved.
    </div>
  </div>
</footer>
`;

createIcons({
  icons: {
    Headset,
    ShieldCheck,
    Truck,
    Clock4,
    Boxes,
    BadgeCheck,
    LockKeyhole,
    ShoppingCart,
    ClipboardList,
    Phone,
    Mail,
    MapPin,
  },
});
