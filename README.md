<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Enfants de l'Ukraine is a humanitarian association helping families in Ukraine through convoys, emergency aid, and solidarity."
    />
    <title data-i18n="siteTitle">Enfants de l'Ukraine</title>
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
        opacity: 0.96;
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
        font-weight: 600;
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

      .nav-button:hover,
      .button:hover,
      .donate-button:hover {
        transform: translateY(-2px);
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
          <div class="topbar-summary" data-i18n="topSummary">
            Helping families in Ukraine with dignity, care, and solidarity.
          </div>

          <div class="lang-switcher*

