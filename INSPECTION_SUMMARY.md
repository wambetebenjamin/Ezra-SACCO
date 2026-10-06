# Ezra SACCO source inspection summary

**Inspection performed before implementation:** 6 October 2026  
**Archive:** `loanday-master.zip` (SHA-256/zip listing identifier: `be47be1e149141733b1b182c1ece10d52a14980d`)  
**Unpacked to:** `reference/loanday-master/`

## Findings and source limitations

The uploaded archive is a static Colorlib “Loanday” HTML template, not an Ezra SACCO application. It contains no Next.js, React, TypeScript, API, authentication, forms, legal pages, cookie consent, CAPTCHA, member portal, environment files, package manifest, or production backend. Therefore, those requirements cannot be reproduced from the archive and will be implemented as new Ezra SACCO product functionality using the supplied production requirements. The source visual direction is preserved: navy and white surfaces, bright green primary accent, compact header, breadcrumb-style secondary pages, finance/loan card layouts, and Lato typography.

## Complete unpacked inventory

The archive contains **142 entries** including 17 folders and 125 files. The full path manifest is the output of `find reference/loanday-master -type f | sort`; the files are grouped below.

- **HTML pages (9):** `index.html`, `about.html`, `services.html`, `services-details.html`, `blog.html`, `blog-details.html`, `contact.html`, `main.html`, `readme.txt`.
- **Sass source (18):** `_about.scss`, `_base.scss`, `_blog-details.scss`, `_blog-sidebar.scss`, `_blog.scss`, `_breadcrumb.scss`, `_contact.scss`, `_footer.scss`, `_header.scss`, `_hero.scss`, `_home-page.scss`, `_mixins.scss`, `_responsive.scss`, `_services-details.scss`, `_services.scss`, `_variable.scss`, `style.scss`.
- **CSS (9):** `bootstrap.min.css`, `elegant-icons.css`, `font-awesome.min.css`, `jquery-ui.min.css`, `magnific-popup.css`, `nice-select.css`, `owl.carousel.min.css`, `slicknav.min.css`, `style.css`.
- **JavaScript (10):** `bootstrap.min.js`, `jquery-3.3.1.min.js`, `jquery-ui.min.js`, `jquery.magnific-popup.min.js`, `jquery.nice-select.min.js`, `jquery.nicescroll.min.js`, `jquery.slicknav.js`, `owl.carousel.min.js`, `main.js`.
- **Fonts (10):** `ElegantIcons.eot`, `ElegantIcons.svg`, `ElegantIcons.ttf`, `ElegantIcons.woff`, `FontAwesome.otf`, `fontawesome-webfont.eot`, `fontawesome-webfont.svg`, `fontawesome-webfont.ttf`, `fontawesome-webfont.woff`, `fontawesome-webfont.woff2`.
- **Images (58):** `img/logo.png`, `footer-logo.png`, `hero-bg.jpg`, `flag.png`, `call-bg.jpg`, the `about/`, `blog/`, `blog/details/comment/`, `blog/details/slider/`, `breadcrumb/`, `choose/`, `counter/`, `history/`, `latest/`, `loan-services/`, `services/`, `services/details/`, `team/`, and `testimonial/` assets shown by the archive manifest.
- **Bundled source dependency archives (8):** Magnific Popup, OwlCarousel2 2.3.4, SlickNav, Bootstrap 4.4.1, Font Awesome 4.7.0, jquery-nice-select 1.1.0, jQuery UI 1.12.1, and jquery.nicescroll.

The extracted source remains available for audit in `reference/`; no source asset is treated as a permitted Ezra photo because the brief requires East African finance-context photos from Pexels/Unsplash only.

## Source routes/pages and layout

- `index.html`: loan landing page; header/navigation, loan calculator, trust/company intro, five loan/service cards, six benefit cards, testimonials, counters, latest posts, footer.
- `about.html`: breadcrumb, about/vision/mission/value, history timeline, six “Why choose us” benefits, footer.
- `services.html`: breadcrumb, six loan service cards, office/contact CTA, footer.
- `services-details.html`: breadcrumb, Education Loan detail, explanatory copy, product list, FAQ, apply CTA, footer.
- `blog.html`: breadcrumb, four article cards, pagination, sidebar categories/recent posts/tags/social, footer.
- `blog-details.html`: breadcrumb, article detail, author/date/comments/sidebar, footer.
- `contact.html`: breadcrumb, contact form, three office cards, footer.
- `main.html`: Colorlib attribution landing page.
- `readme.txt`: Colorlib template licensing/attribution note.

There are no dynamic routes, React components, props, API route files, loading/error screens, legal pages, or app-level route middleware in the source.

## Design tokens extracted

Source Sass variables (`_variable.scss`):

- Primary: `#88C417`
- Secondary/navy: `#120851`
- White: `#ffffff`
- Heading: `#323232`
- Paragraph: `#5C5C5C`
- Black: `#000000`
- Heading 2: `#252525`
- Normal: `#1c1c1c`
- Background: `#f5f5f5`
- Background 2: `#f2f2f2`
- Border: `#ebebeb`
- Border 1: `#e1e1e1`
- Sass font variables: `Unna, serif` and `Nunito Sans, sans-serif`; however the actual HTML imports **Lato** from Google Fonts with weights **300, 400, 700, 900**, and compiled/base Sass uses Lato. Ezra implementation uses the source-verified Lato family only.

Additional recurring compiled values include `#707070`, `#a8a8a8`, `#f6f6f6`, `#f6f7f9`, `#182143`, `#223060`, and black overlays `rgba(0,0,0,.1/.3/.6)`. Common source sizes: 11px, 12px, 13px, 14px, 15px, 16px, 18px, 20px, 22px, 24px, 28px, 30px, 36px, 40px, 44px, 50px, 64px, and 70px. Layout uses Bootstrap container/grid conventions, card and image sections, borders, and subtle black shadows/overlays; no CSS custom properties exist in the source, so the implementation promotes the verified values into root-level custom properties.

## Fonts, icons, packages, and loading

- Font loading: each HTML page links `https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap`.
- Icon systems referenced: **Font Awesome 4.7.0** (`fontawesome-webfont` and `FontAwesome.otf`) and **ElegantIcons**; no Lucide in source.
- Other source libraries/scripts: Bootstrap 4.4.1, jQuery 3.3.1, jQuery UI 1.12.1, Magnific Popup, OwlCarousel2 2.3.4, SlickNav, jquery-nice-select 1.1.0, jquery.nicescroll. No npm package versions or package.json are present.
- No loading screen or loading animation exists in the source. The Ezra build therefore uses the specified sub-1.8-second logo/ring/bar loading treatment.

## Compliance/features absent from source

No cookie banner/copy/behavior, Cookie Policy, Privacy Policy, Terms, CAPTCHA provider or flow, environment variable names, API structures, M-Pesa, Vercel KV/Blob, Nodemailer, NextAuth, PDF statement generation, JSON-LD, sitemap, security headers, 404, 500 page, or error recovery behavior exists in the archive. These are requirements rather than source-derived features. The implementation will use reCAPTCHA v3 server verification with the requested v2 fallback contract and keep secrets in environment variables only.

## Implementation interpretation

The new build will be an App Router Next.js 14.2.5 application using the exact versions requested by the brief, with the extracted palette/font tokens as CSS variables, Lucide icons as explicitly required by the brief (rather than the source’s Font Awesome/ElegantIcons), locally stored finance-context imagery with credits, and responsive page sections/forms. Source page structure informs the visual hierarchy; Ezra-specific copy, Kenyan locations, SACCO products, legal content, member flows, and protected portal are new content because they are not in the archive.
