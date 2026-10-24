<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Enfants de l'Ukraine</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --blue-900: #113a6d;
        --blue-800: #1d4d8f;
        --blue-600: #2d72c6;
        --blue-300: #dfeeff;
        --yellow-400: #f6d55c;
        --yellow-300: #ffeaa8;
        --white: #ffffff;
        --off-white: #f7f8fb;
        --text: #1a2433;
        --muted: #53657b;
        --shadow: 0 20px 50px rgba(17, 58, 109, 0.12);
        --card-shadow: 0 16px 30px rgba(24, 52, 88, 0.09);
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        font-family: "Inter", sans-serif;
        background:
          radial-gradient(circle at top left, rgba(255, 224, 102, 0.18), transparent 20%),
          linear-gradient(180deg, #edf5ff 0%, #fdfdfd 18%, #fffaf0 100%);
        color: var(--text);
        line-height: 1.6;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      img {
        width: 100%;
        display: block;
      }

      .container {
        width: min(1180px, calc(100% - 2rem));
        margin: 0 auto;
      }

      .site-header {
        position: sticky;
        top: 0;
        z-index: 30;
        background: rgba(255, 255, 255, 0.82);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(17, 58, 109, 0.08);
      }

      .topbar {
        background: linear-gradient(90deg, var(--blue-900), var(--blue-800));
        color: var(--white);
        padding: 0.65rem 0;
      }

      .topbar-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .topbar-summary {
        font-size: 0.88rem;
        font-weight: 600;
        letter-spacing: 0.02em;
      }

      .lang-switcher {
        display: inline-flex;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 999px;
        padding: 0.2rem;
        gap: 0.2rem;
      }

      .lang-btn {
        border: 0;
        background: transparent;
        color: var(--white);
        font-weight: 700;
        font-size: 0.8rem;
        border-radius: 999px;
        padding: 0.45rem 0.8rem;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .lang-btn.active {
        background: var(--yellow-400);
        color: var(--blue-900);
      }

      .nav {
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .brand {
        display: inline-flex;
        align-items: center;
        gap: 0.8rem;
        font-weight: 800;
        font-size: 1.08rem;
        color: var(--blue-900);
      }

      .brand__flag {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: linear-gradient(180deg, #0057b7 0 50%, #ffd700 50%);
        box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.8);
      }

      .main-nav {
        display: flex;
        align-items: center;
        gap: 1.6rem;
        color: var(--muted);
        font-weight: 600;
      }

      .main-nav a:hover,
      .main-nav a:focus-visible {
        color: var(--blue-800);
      }

      .nav-button,
      .button,
      .donate-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 999px;
        font-weight: 700;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .nav-button,
      .button--primary,
      .donate-button {
        background: linear-gradient(135deg, var(--blue-600), var(--blue-800));
        color: var(--white);
        box-shadow: 0 14px 30px rgba(45, 114, 198, 0.22);
      }

      .nav-button {
        padding: 0.8rem 1.15rem;
      }

      .button {
        padding: 1rem 1.5rem;
      }

      .button--secondary {
        background: rgba(246, 213, 92, 0.18);
        color: var(--blue-900);
        border: 1px solid rgba(45, 114, 198, 0.12);
      }

      .hero {
        padding: 4.4rem 0 3rem;
      }

      .hero__grid {
        display: grid;
        grid-template-columns: 1.08fr 0.92fr;
        gap: 2rem;
        align-items: center;
      }

      .eyebrow {
        margin: 0 0 1rem;
        font-size: 0.72rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-weight: 800;
        color: var(--blue-600);
      }

      h1,
      h2,
      h3 {
        margin: 0 0 1rem;
        color: var(--blue-900);
        line-height: 1.12;
      }

      h1 {
        font-size: clamp(2.5rem, 5vw, 4.5rem);
      }

      h2 {
        font-size: clamp(2rem, 3vw, 3rem);
      }

      .lead {
        max-width: 62ch;
        color: var(--muted);
        font-size: 1.08rem;
      }

      .hero__actions {
        margin-top: 1.75rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .hero__visual {
        display: grid;
        gap: 1.25rem;
      }

      .hero__card {
        background: linear-gradient(135deg, rgba(29, 77, 143, 0.08), rgba(246, 213, 92, 0.15));
        border: 1px solid rgba(17, 58, 109, 0.08);
        border-radius: 28px;
        box-shadow: var(--shadow);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1.2rem 1.4rem;
      }

      .flag-block {
        width: 72px;
        height: 72px;
        border-radius: 18px;
        background: linear-gradient(180deg, #0057b7 0 50%, #ffd700 50%);
        box-shadow: inset 0 0 0 4px rgba(255, 255, 255, 0.75);
      }

      .card-copy {
        display: flex;
        flex-direction: column;
      }

      .label {
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--muted);
      }

      .card-copy strong {
        margin-top: 0.15rem;
        font-size: 1.15rem;
        color: var(--blue-900);
      }

      .photo-panel {
        overflow: hidden;
        border-radius: 28px;
        box-shadow: var(--shadow);
        min-height: 330px;
      }

      .photo-panel img {
        height: 100%;
        object-fit: cover;
      }

      .info-section,
      .mission-section,
      .testimonials-section,
      .contact-section {
        padding: 2.5rem 0 4rem;
      }

      .section-heading {
        max-width: 720px;
        margin: 0 auto 2rem;
        text-align: center;
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
      }

      .info-card {
        background: var(--white);
        border: 1px solid rgba(17, 58, 109, 0.06);
        border-radius: 24px;
        padding: 2rem 1.5rem;
        box-shadow: var(--card-shadow);
        text-align: center;
      }

      .info-card__label {
        display: inline-block;
        margin-bottom: 0.8rem;
        font-size: 0.7rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--muted);
      }

      .info-card h3 {
        margin: 0;
        font-size: clamp(1.25rem, 2vw, 1.7rem);
      }

      .mission-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: center;
      }

      .mission-copy {
        background: var(--white);
        border: 1px solid rgba(17, 58, 109, 0.06);
        border-radius: 28px;
        box-shadow: var(--card-shadow);
        padding: 2rem;
      }

      .mission-copy p {
        color: var(--muted);
        margin-bottom: 1.5rem;
      }

      .mission-copy ul {
        margin: 0;
        padding-left: 1.2rem;
        color: var(--blue-900);
        font-weight: 600;
      }

      .mission-copy li + li {
        margin-top: 0.7rem;
      }

      .mission-image {
        overflow: hidden;
        border-radius: 28px;
        box-shadow: var(--shadow);
      }

      .mission-image img {
        min-height: 360px;
        object-fit: cover;
      }

      .gallery {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
      }

      .gallery__item {
        background: var(--white);
        border: 1px solid rgba(17, 58, 109, 0.06);
        border-radius: 22px;
        overflow: hidden;
        box-shadow: var(--card-shadow);
      }

      .gallery__item img {
        aspect-ratio: 4 / 3;
        object-fit: cover;
      }

      .gallery__item figcaption {
        padding: 1rem 1rem 1.3rem;
        color: var(--muted);
        font-weight: 600;
      }

      .quote-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
      }

      blockquote {
        margin: 0;
        padding: 2rem 1.4rem;
        border-radius: 24px;
        background: linear-gradient(180deg, rgba(246, 213, 92, 0.12), rgba(17, 58, 109, 0.02));
        border: 1px solid rgba(17, 58, 109, 0.07);
        box-shadow: var(--card-shadow);
        color: var(--blue-900);
      }

      blockquote p {
        margin: 0 0 1rem;
        font-size: 1.05rem;
        line-height: 1.7;
      }

      blockquote footer {
        color: var(--muted);
        font-weight: 800;
      }

      .contact-wrap {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 1.5rem;
        align-items: center;
        background: linear-gradient(135deg, rgba(17, 58, 109, 0.96), rgba(29, 77, 143, 0.9));
        border-radius: 28px;
        padding: 2.2rem;
        box-shadow: var(--shadow);
      }

      .contact-copy h2,
      .contact-copy p,
      .contact-card h3,
      .contact-card li,
      .contact-card a {
        color: var(--white);
      }

      .contact-copy p {
        color: rgba(255, 255, 255, 0.82);
      }

      .contact-card {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 22px;
        padding: 1.5rem;
      }

      .contact-card ul {
        margin: 0;
        padding-left: 1.2rem;
        display: grid;
        gap: 0.7rem;
      }

      .site-footer {
        padding: 0 0 2.5rem;
      }

      .donate-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        background: linear-gradient(135deg, rgba(246, 213, 92, 0.18), rgba(17, 58, 109, 0.06));
        border: 1px solid rgba(17, 58, 109, 0.06);
        border-radius: 28px;
        padding: 2rem 1.75rem;
        box-shadow: var(--shadow);
      }

      .donate-block p {
        color: var(--muted);
      }

      .donate-button {
        padding: 1.1rem 1.8rem;
        min-width: 220px;
        animation: pulse 2s infinite;
      }

      .footer-bottom {
        padding-top: 1rem;
        text-align: center;
        color: var(--muted);
        font-weight: 600;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(45, 114, 198, 0.35);
          transform: scale(1);
        }
        50% {
          box-shadow: 0 0 0 18px rgba(45, 114, 198, 0);
          transform: scale(1.02);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(45, 114, 198, 0);
          transform: scale(1);
        }
      }

      @media (max-width: 860px) {
        .main-nav {
          display: none;
        }

        .hero__grid,
        .mission-grid,
        .contact-wrap,
        .info-grid,
        .gallery,
        .quote-grid {
          grid-template-columns: 1fr;
        }

        .donate-block {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      @media (max-width: 560px) {
        .site-header {
          position: static;
        }

        .nav {
          flex-wrap: wrap;
          justify-content: center;
          padding: 0.8rem 0;
        }

        .hero {
          padding-top: 2.5rem;
        }

        .hero__actions {
          flex-direction: column;
        }

        .button,
        .nav-button,
        .donate-button {
          width: 100%;
        }

        .lang-switcher {
          width: 100%;
          justify-content: center;
        }
      }
    </style>
  </head>
  <body>
    <header class="site-header">
      <div class="topbar">
        <div class="container topbar-inner">
          <div class="topbar-summary">Helping families in Ukraine with dignity, care, and solidarity.</div>

          <div class="lang-switcher" aria-label="Language selector">
            <button class="lang-btn active" type="button" data-lang="en">EN</button>
            <button class="lang-btn" type="button" data-lang="fr">FR</button>
            <button class="lang-btn" type="button" data-lang="uk">UA</button>
          </div>
        </div>
      </div>

      <div class="container nav">
        <a href="#top" class="brand" aria-label="Enfants de l'Ukraine home">
          <span class="brand__flag" aria-hidden="true"></span>
          <span data-i18n="brand">Enfants de l'Ukraine</span>
        </a>

        <nav class="main-nav" aria-label="Main navigation">
          <a href="#about" data-i18n="navAbout">About</a>
          <a href="#mission" data-i18n="navMission">Mission</a>
          <a href="#testimonials" data-i18n="navTestimonials">Testimonials</a>
          <a href="#contact" data-i18n="navContact">Contact</a>
        </nav>

        <a href="#donate" class="nav-button" data-i18n="navDonate">Donate</a>
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="container hero__grid">
          <div class="hero__content">
            <p class="eyebrow" data-i18n="eyebrow">Humanitarian association</p>
            <h1 data-i18n="heroTitle">Helping Ukraine with dignity, care, and solidarity.</h1>
            <p class="lead" data-i18n="heroText">
              Enfants de l'Ukraine supports families and civilians in need by organizing
              humanitarian convoys three times a year and delivering essential aid to the
              regions most affected by war.
            </p>

            <div class="hero__actions">
              <a href="#donate" class="button button--primary" data-i18n="heroPrimaryBtn">Support us</a>
              <a href="#mission" class="button button--secondary" data-i18n="heroSecondaryBtn">Learn more</a>
            </div>
          </div>

          <div class="hero__visual">
            <div class="hero__card">
              <div class="flag-block" aria-label="Ukrainian flag colors"></div>
              <div class="card-copy">
                <span class="label" data-i18n="missionBadge">Our mission</span>
                <strong data-i18n="missionText">Deliver hope to civilians</strong>
              </div>
            </div>

            <div class="photo-panel">
              <img
                src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1000&q=80"
                alt="Volunteers supporting humanitarian work in Ukraine"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="info-section">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow" data-i18n="aboutEyebrow">Who we are</p>
            <h2 data-i18n="aboutTitle">Association for the children and families of Ukraine</h2>
          </div>

          <div class="info-grid">
            <article class="info-card">
              <span class="info-card__label" data-i18n="presidentLabel">President</span>
              <h3 data-i18n="presidentName">Tatiana</h3>
            </article>

            <article class="info-card">
              <span class="info-card__label" data-i18n="addressLabel">Address</span>
              <h3 data-i18n="addressValue">Mathieu, France</h3>
            </article>

            <article class="info-card">
              <span class="info-card__label" data-i18n="contactLabel">Contact</span>
              <h3>
                <a href="mailto:irynapavl@yahoo.fr" data-i18n="contactValue">irynapavl@yahoo.fr</a>
              </h3>
            </article>
          </div>
        </div>
      </section>

      <section id="mission" class="mission-section">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow" data-i18n="missionEyebrow">What we do</p>
            <h2 data-i18n="missionTitle">Large humanitarian convoys, three times a year</h2>
          </div>

          <div class="mission-grid">
            <div class="mission-copy">
              <p data-i18n="missionTextMain">
                We organize major humanitarian aid convoys to support families and
                communities affected by the war. Each campaign mobilizes volunteers,
                partners, and donations to bring essential support to people in crisis.
              </p>

              <ul>
                <li data-i18n="missionItem1">Food and hygiene essentials</li>
                <li data-i18n="missionItem2">Medical and emergency supplies</li>
                <li data-i18n="missionItem3">Support for families facing displacement and hardship</li>
              </ul>
            </div>

            <div class="mission-image">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1100&q=80"
                alt="Aid distribution for Ukrainian families"
              />
            </div>
          </div>

          <div class="gallery">
            <figure class="gallery__item">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
                alt="Humanitarian volunteers in Ukraine"
              />
              <figcaption data-i18n="gallery1">Helping families who are still living in difficult conditions</figcaption>
            </figure>

            <figure class="gallery__item">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
                alt="Aid distribution and support"
              />
              <figcaption data-i18n="gallery2">Bringing care, food, and practical support to cities and villages</figcaption>
            </figure>

            <figure class="gallery__item">
              <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80"
                alt="Volunteers preparing a convoy"
              />
              <figcaption data-i18n="gallery3">Organized logistics for fast and meaningful action</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="testimonials" class="testimonials-section">
        <div class="container">
          <div class="section-heading">
            <p class="eyebrow" data-i18n="testimonialsEyebrow">Voices of support</p>
            <h2 data-i18n="testimonialsTitle">What people say</h2>
          </div>

          <div class="quote-grid">
            <blockquote>
              <p data-i18n="quote1">“This humanitarian association is helping more than just cities.”</p>
              <footer data-i18n="quoteAuthor1">Anonymous</footer>
            </blockquote>

            <blockquote>
              <p data-i18n="quote2">“Helping civilians that are hopeless in a war is warming.”</p>
              <footer data-i18n="quoteAuthor2">Anonymous</footer>
            </blockquote>

            <blockquote>
              <p data-i18n="quote3">“The support reaches families in moments of great uncertainty and need.”</p>
              <footer data-i18n="quoteAuthor3">Anonymous</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section">
        <div class="container contact-wrap">
          <div class="contact-copy">
            <p class="eyebrow" data-i18n="contactEyebrow">Get in touch</p>
            <h2 data-i18n="contactTitle">We are committed to helping where it matters most.</h2>
            <p data-i18n="contactText">
              Your support, your time, and your donations help us continue our work in solidarity with Ukraine.
            </p>
          </div>

          <div class="contact-card">
            <h3 data-i18n="contactCardTitle">Contact us</h3>
            <ul>
              <li><strong data-i18n="contactPresident">President:</strong> <span data-i18n="contactPresidentName">Tatiana</span></li>
              <li><strong data-i18n="contactAddress">Address:</strong> <span data-i18n="contactAddressValue">Mathieu, France</span></li>
              <li><strong data-i18n="contactEmail">Email:</strong> <a href="mailto:irynapavl@yahoo.fr">irynapavl@yahoo.fr</a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>

    <footer id="donate" class="site-footer">
      <div class="container donate-block">
        <div>
          <p class="eyebrow" data-i18n="donateEyebrow">Support the mission</p>
          <h2 data-i18n="donateTitle">Make a donation</h2>
          <p data-i18n="donateText">
            Your contribution helps finance humanitarian convoys, supplies, and direct aid for families in Ukraine.
          </p>
        </div>

        <a
          class="donate-button"
          href="https://www.paypal.com/donate"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Donate through PayPal"
          data-i18n="donateButton"
        >
          Donate with PayPal
        </a>
      </div>

      <div class="container footer-bottom">
        <p>© <span id="year"></span> <span data-i18n="footerName">Enfants de l'Ukraine</span></p>
      </div>
    </footer>

    <script>
      const translations = {
        en: {
          brand: "Enfants de l'Ukraine",
          navAbout: "About",
          navMission: "Mission",
          navTestimonials: "Testimonials",
          navContact: "Contact",
          navDonate: "Donate",
          eyebrow: "Humanitarian association",
          heroTitle: "Helping Ukraine with dignity, care, and solidarity.",
          heroText: "Enfants de l'Ukraine supports families and civilians in need by organizing humanitarian convoys three times a year and delivering essential aid to the regions most affected by war.",
          heroPrimaryBtn: "Support us",
          heroSecondaryBtn: "Learn more",
          missionBadge: "Our mission",
          missionText: "Deliver hope to civilians",
          aboutEyebrow: "Who we are",
          aboutTitle: "Association for the children and families of Ukraine",
          presidentLabel: "President",
          presidentName: "Tatiana",
          addressLabel: "Address",
          addressValue: "Mathieu, France",
          contactLabel: "Contact",
          contactValue: "irynapavl@yahoo.fr",
          missionEyebrow: "What we do",
          missionTitle: "Large humanitarian convoys, three times a year",
          missionTextMain: "We organize major humanitarian aid convoys to support families and communities affected by the war. Each campaign mobilizes volunteers, partners, and donations to bring essential support to people in crisis.",
          missionItem1: "Food and hygiene essentials",
          missionItem2: "Medical and emergency supplies",
          missionItem3: "Support for families facing displacement and hardship",
          gallery1: "Helping families who are still living in difficult conditions",
          gallery2: "Bringing care, food, and practical support to cities and villages",
          gallery3: "Organized logistics for fast and meaningful action",
          testimonialsEyebrow: "Voices of support",
          testimonialsTitle: "What people say",
          quote1: "“This humanitarian association is helping more than just cities.”",
          quote2: "“Helping civilians that are hopeless in a war is warming.”",
          quote3: "“The support reaches families in moments of great uncertainty and need.”",
          quoteAuthor1: "Anonymous",
          quoteAuthor2: "Anonymous",
          quoteAuthor3: "Anonymous",
          contactEyebrow: "Get in touch",
          contactTitle: "We are committed to helping where it matters most.",
          contactText: "Your support, your time, and your donations help us continue our work in solidarity with Ukraine.",
          contactCardTitle: "Contact us",
          contactPresident: "President:",
          contactPresidentName: "Tatiana",
          contactAddress: "Address:",
          contactAddressValue: "Mathieu, France",
          contactEmail: "Email:",
          donateEyebrow: "Support the mission",
          donateTitle: "Make a donation",
          donateText: "Your contribution helps finance humanitarian convoys, supplies, and direct aid for families in Ukraine.",
          donateButton: "Donate with PayPal",
          footerName: "Enfants de l'Ukraine"
        },

        fr: {
          brand: "Enfants de l'Ukraine",
          navAbout: "À propos",
          navMission: "Mission",
          navTestimonials: "Témoignages",
          navContact: "Contact",
          navDonate: "Faire un don",
          eyebrow: "Association humanitaire",
          heroTitle: "Aider l’Ukraine avec dignité, soin et solidarité.",
          heroText: "Enfants de l'Ukraine soutient les familles et les civils dans le besoin en organisant des convois humanitaires trois fois par an et en livrant des secours essentiels dans les régions les plus touchées par la guerre.",
          heroPrimaryBtn: "Nous soutenir",
          heroSecondaryBtn: "En savoir plus",
          missionBadge: "Notre mission",
          missionText: "Apporter de l'espoir aux civils",
          aboutEyebrow: "Qui nous sommes",
          aboutTitle: "Association pour les enfants et les familles de l'Ukraine",
          presidentLabel: "Présidente",
          presidentName: "Tatiana",
          addressLabel: "Adresse",
          addressValue: "Mathieu, France",
          contactLabel: "Contact",
          contactValue: "irynapavl@yahoo.fr",
          missionEyebrow: "Ce que nous faisons",
          missionTitle: "De grands convois humanitaires, trois fois par an",
          missionTextMain: "Nous organisons de grands convois de secours humanitaires pour soutenir les familles et les communautés touchées par la guerre. Chaque campagne mobilise des bénévoles, des partenaires et des dons pour apporter une aide essentielle aux personnes en crise.",
          missionItem1: "Aliments et produits d’hygiène",
          missionItem2: "Fournitures médicales et d’urgence",
          missionItem3: "Soutien aux familles confrontées au déplacement et à la difficulté",
          gallery1: "Aider les familles qui vivent encore dans des conditions difficiles",
          gallery2: "Apporter soin, nourriture et aide concrète aux villes et villages",
          gallery3: "Une logistique organisée pour une action rapide et concrète",
          testimonialsEyebrow: "Témoignages",
          testimonialsTitle: "Ce que les gens disent",
          quote1: "« Cette association humanitaire aide bien plus que les villes. »",
          quote2: "« Aider les civils désespérés par une guerre, c’est réconfortant. »",
          quote3: "« Le soutien atteint les familles dans des moments de grande incertitude et de besoin. »",
          quoteAuthor1: "Anonyme",
          quoteAuthor2: "Anonyme",
          quoteAuthor3: "Anonyme",
          contactEyebrow: "Nous contacter",
          contactTitle: "Nous sommes engagés à aider là où cela compte le plus.",
          contactText: "Votre soutien, votre temps et vos dons nous aident à poursuivre notre action en solidarité avec l’Ukraine.",
          contactCardTitle: "Contactez-nous",
          contactPresident: "Présidente :",
          contactPresidentName: "Tatiana",
          contactAddress: "Adresse :",
          contactAddressValue: "Mathieu, France",
          contactEmail: "E-mail :",
          donateEyebrow: "Soutenez la mission",
          donateTitle: "Faire un don",
          donateText: "Votre contribution aide à financer les convois humanitaires, les fournitures et l’aide directe aux familles en Ukraine.",
          donateButton: "Faire un don via PayPal",
          footerName: "Enfants de l'Ukraine"
        },

        uk: {
          brand: "Enfants de l'Ukraine",
          navAbout: "Про нас",
          navMission: "Місія",
          navTestimonials: "Враження",
          navContact: "Контакт",
          navDonate: "Пожертвувати",
          eyebrow: "Гуманітарна асоціація",
          heroTitle: "Допомагати Україні з гідністю, турботою та солідарністю.",
          heroText: "Enfants de l'Ukraine підтримує сім'ї та цивільних осіб, які потребують допомоги, організовуючи гуманітарні конвої тричі на рік і доставляючи необхідні товари до регіонів, найбільш постраждалих від війни.",
          heroPrimaryBtn: "Підтримати нас",
          heroSecondaryBtn: "Дізнатися більше",
          missionBadge: "Наша місія",
          missionText: "Дарувати надію цивільним",
          aboutEyebrow: "Хто ми",
          aboutTitle: "Асоціація для дітей та сімей України",
          presidentLabel: "Президент",
          presidentName: "Тетяна",
          addressLabel: "Адреса",
          addressValue: "Матьє, Франція",
          contactLabel: "Контакт",
          contactValue: "irynapavl@yahoo.fr",
          missionEyebrow: "Що ми робимо",
          missionTitle: "Великі гуманітарні конвої, три рази на рік",
          missionTextMain: "Ми організовуємо великі гуманітарні конвої для підтримки сімей і громад, які постраждали від війни. Кожна кампанія мобілізує волонтерів, партнерів і пожертви для надання важливої допомоги людям у кризі.",
          missionItem1: "Продукти харчування та гігієни",
          missionItem2: "Медичні та невідкладні товари",
          missionItem3: "Підтримка сімей, які переживають переміщення та труднощі",
          gallery1: "Допомога сім'ям, які все ще живуть у складних умовах",
          gallery2: "Надання турботи, їжі та практичної підтримки містам і селам",
          gallery3: "Організована логістика для швидких і ефективних дій",
          testimonialsEyebrow: "Враження та підтримка",
          testimonialsTitle: "Що кажуть люди",
          quote1: "« Ця гуманітарна асоціація допомагає більше, ніж просто містам. »",
          quote2: "« Допомагати цивільним, які втрачають надію під час війни, — це тепло. »",
          quote3: "« Підтримка доходить до сімей у моменти великої невизначеності та потреби. »",
          quoteAuthor1: "Анонімно",
          quoteAuthor2: "Анонімно",
          quoteAuthor3: "Анонімно",
          contactEyebrow: "Зв'яжіться з нами",
          contactTitle: "Ми прагнемо допомагати там, де це найбільше потрібно.",
          contactText: "Ваша підтримка, ваш час і ваші пожертви допомагають нам продовжувати нашу роботу в солідарності з Україною.",
          contactCardTitle: "Контакти",
          contactPresident: "Президент:",
          contactPresidentName: "Тетяна",
          contactAddress: "Адреса:",
          contactAddressValue: "Матьє, Франція",
          contactEmail: "Електронна пошта:",
          donateEyebrow: "Підтримайте місію",
          donateTitle: "Зробити пожертву",
          donateText: "Ваш внесок допомагає фінансувати гуманітарні конвої, постачання та пряму допомогу сім’ям в Україні.",
          donateButton: "Пожертвувати через PayPal",
          footerName: "Enfants de l'Ukraine"
        }
      };

      const langButtons = document.querySelectorAll(".lang-btn");
      const translatableNodes = document.querySelectorAll("[data-i18n]");

      function setLanguage(lang) {
        const dict = translations[lang] || translations.en;

        document.documentElement.lang = lang;
        document.title = "Enfants de l'Ukraine";

        translatableNodes.forEach((node) => {
          const key = node.dataset.i18n;
          if (dict[key]) {
            node.textContent = dict[key];
          }
        });

        langButtons.forEach((button) => {
          const active = button.dataset.lang === lang;
          button.classList.toggle("active", active);
          button.setAttribute("aria-pressed", String(active));
        });
      }

      document.addEventListener("DOMContentLoaded", () => {
        const year = document.getElementById("year");
        if (year) year.textContent = new Date().getFullYear();

        langButtons.forEach((button) => {
          button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
          });
        });

        setLanguage("en");
      });
    </script>
  </body>
</html>
