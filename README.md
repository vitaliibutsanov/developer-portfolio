# Developer Portfolio

Personal developer portfolio by **Vitalii Butsanov**, built as a small standalone web project and as the main showcase for my public software projects.

**Live site:** https://vitaliibutsanov.github.io/developer-portfolio/

## About this project

The site is intentionally built without a front-end framework. It uses semantic HTML, CSS and vanilla JavaScript, with a focus on clarity, responsive behavior, accessibility and fast static hosting.

It currently presents:

- **Cat vs Ghosts** — a completed Python / pygame-ce Windows platformer with a custom level editor, localization, performance work and release tooling.
- **Trading Bot** — reserved for the project while its current implementation is being audited and modernized. Unverified technical claims are intentionally not published.
- This **developer portfolio** itself as a live web project.

## Stack

- HTML5
- CSS
- Vanilla JavaScript
- Git
- GitHub
- GitHub Pages

## Features

- Responsive desktop and mobile layout
- Compact mobile landscape header
- EN / PL / RU / UA localization through JavaScript data
- Accessible navigation and controls
- Real project screenshots and video demos
- Open Graph / social preview metadata
- Favicon and basic SEO metadata
- Static deployment through GitHub Pages

## Project structure

```text
developer-portfolio/
├── assets/
│   ├── icons/
│   ├── images/
│   └── media/
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── translations.js
│   ├── i18n.js
│   └── main.js
├── index.html
└── README.md
```

## Run locally

From the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Status

**Live.** The first public version is deployed with GitHub Pages. Content will continue to evolve as additional projects are completed and audited.
