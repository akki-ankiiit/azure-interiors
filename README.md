# Azure Interiors

Marketing and portfolio website for **Azure Interiors**, an Indian interior design studio. Built with React, Vite, GSAP, Lenis, Swiper and Lottie.

## Getting started

```bash
npm install
npm run dev        # Start the dev server
npm run build      # Production build in dist/
npm run preview    # Preview the production build
npm test           # Playwright desktop + mobile checks
npm run format     # Format source files with Prettier
```

Node.js 22.12+ is recommended. Before running the tests for the first time, run `npx playwright install chromium`.

## Pages

| Route                | Description                              |
| -------------------- | ---------------------------------------- |
| `/`                  | Home                                     |
| `/projects`          | Project portfolio with filter and sort   |
| `/projects/:slug`    | Individual project page with a gallery   |
| `/contact`           | Contact page and enquiry form            |
| `/privacy`, `/terms` | Legal pages                              |

## Project structure

```text
public/
  assets/
    animations/   Lottie animation
    fonts/        Maison Neue font files
    images/       Hero, cloud, preloader and flower artwork
    interiors/    Project photography
    r-r/          Founder portraits
    studio/       Studio SVG illustrations
    videos/       Flower videos (webm + mov)
  favicon.svg
  _redirects      SPA fallback for Netlify-compatible hosts
src/
  animations/     Animation engine (GSAP, Lenis, Swiper, Lottie)
  components/
    home/         Home page sections
    contactpage/  Contact page sections, header navigation and menu
    layout/       Shared header, footer, modals, preloader, cookie notice
    media/        Flower video component
    portfolio/    Project listing, cards and filters
  data/
    projects.js   Project list (edit this to add or change projects)
    media.js      Interior photography keys and alt text
    flowers.js    Flower poster and video paths
    routes.jsx    Lazy-loaded routes and page titles
  hooks/          Site animation lifecycle and contact form handling
  pages/          Page compositions
  styles/         reference.css, interactions.css, studio.css, app.css
  App.jsx         Routing and page transitions
  main.jsx        React entry point
tests/
  site.spec.js    Playwright tests
```

## Content

- **Projects:** edit `src/data/projects.js`. Each project's `cover` and `gallery` entries are keys of the images in `public/assets/interiors/` (see `src/data/media.js`).
- **Contact details:** phone numbers are in `src/components/layout/Footer.jsx`, `src/components/layout/PageFooter.jsx` and `src/components/contactpage/ContactPageContent.jsx`.

## Enquiry form

The enquiry form is not connected to a backend by default. To enable submissions:

1. Copy `.env.example` to `.env.local`.
2. Set `VITE_CONTACT_ENDPOINT` to your enquiry API URL.
3. Restart Vite or rebuild.

The endpoint receives a JSON `POST` with the form fields. Until it is configured, the form shows the studio phone number instead.

## Deployment

Deploy `dist/` to any static host with all routes rewritten to `index.html`. A Netlify-compatible `public/_redirects` file is included. Other hosts need an equivalent SPA fallback so that direct URLs such as `/projects/the-courtyard-house` work.

The Adobe display and script font kit is loaded from its public CDN, as in the original design.
