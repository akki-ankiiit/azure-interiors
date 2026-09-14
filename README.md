# ERA Residence — React

A React recreation of [example.com](https://www.example.com/), preserving the reference site's layouts, typography, imagery, responsive breakpoints, and animation choreography.

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite. Node.js 22.12+ is recommended.

```bash
npm run build      # Production output in dist/
npm run preview    # Preview the production build
npm test           # Desktop and mobile browser checks
npm run format     # Format source files
```

For a fresh browser-testing environment, run `npx playwright install chromium` first.

## Included

- The complete homepage, apartment listing, contact page, and 25 individual apartment pages.
- The opening arch reveal, animated typography, smooth scrolling, image parallax, horizontal scroll sequences, architecture masks, and footer reveal.
- Day/night hero transitions, architectural hotspots, sliders, amenity tabs, and apartment-image lightboxes.
- Apartment filters, sorting, query-string deep links, and reset controls.
- Animated mobile navigation, booking modal, cookie-choice persistence, and client-side page transitions.
- Route-level lazy loading and cleanup of animation listeners, timers, observers, and scroll instances between pages.
- Reduced-motion handling for the opening sequence, text transitions, and smooth scrolling.

## Project structure

```text
public/
  assets/
    animations/             Local Lottie animation
    fonts/                  Maison Neue font files
    images/                 Reference photography, plans, and illustrations
  favicon.svg
  _redirects                SPA fallback for compatible static hosts
src/
  animations/
    referenceEngine.js      Original choreography adapted to React's lifecycle
  components/
    home/                   Homepage sections
    layout/                 Preloader, cookies, footer, and shared modals
    apartmentspage/         Apartment listing and its layout components
    apartments/details/     Apartment content, floor plans, and related residences
    contactpage/            Contact-page content
  data/
    routes.js               Lazy-loaded route registry and page titles
    asset-manifest.json     Source-to-local asset mapping
  hooks/
    useSiteExperience.js    Font readiness and animation lifecycle
    useContactForm.js       Enquiry submission and status handling
  pages/                    Page compositions
  styles/
    reference.css           Reference layout, fonts, colors, and breakpoints
    interactions.css        Hover effects, masks, and animation styles
    app.css                 React integration and accessibility styles
  App.jsx                   Routing and animated navigation
  main.jsx                  React entry point
scripts/
  sync-assets.mjs           Restore missing local assets
tests/
  site.spec.js              Desktop and mobile interaction tests
```

The markup is editable JSX, rendered by React. The animation engine runs locally using npm packages; it does not load Webflow, Barba, or the original hosted JavaScript.

## Enquiry form

The original production form service is not connected to this recreation. To enable submissions:

1. Copy `.env.example` to `.env.local`.
2. Set `VITE_CONTACT_ENDPOINT` to your enquiry API URL.
3. Restart Vite or rebuild the deployment.

The endpoint receives a JSON `POST` with `name`, `email`, `phone`, `message`, and the form's attribution fields. A successful HTTP response displays the confirmation; failed requests display an error. When no endpoint is configured, the form provides the sales-office phone number instead of claiming a message was sent.

## Assets and deployment

Images, floor plans, Maison Neue fonts, and the footer animation are hosted locally. The Adobe display/script font kit and transparent flower videos still use the reference site's public hosting. Legal documents and map/social links retain their original destinations. Apartment content is a static snapshot of the reference, not a live inventory feed.

Deploy `dist/` to a static host with all application routes rewritten to `index.html`. A Netlify-compatible `_redirects` file is included. Equivalent SPA fallback configuration is required on other hosts for direct URLs such as `/apartments/011`.

Use `npm run assets:sync` to restore missing local assets without overwriting existing files.

## Verification

Browser checks cover homepage rendering and scrolling, day/night switching, filtered apartment deep links, filter reset, detail navigation, browser back, mobile menu navigation, booking forms, and reduced-motion loading. The day/night test is intentionally desktop-only because the reference hides that control on mobile.
# ankitchandrakar
