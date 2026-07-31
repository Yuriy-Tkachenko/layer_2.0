# Hero implementation notes

## Site map

- `/` (`index.html`) — one-page attorney landing hero; primary action: request a consultation.

## Section: Header

- Purpose: Identify the attorney, expose anchor navigation, and provide immediate phone contact.
- Content: Wordmark, professional descriptor, navigation, phone number, working hours, call action.
- Layout: Brand left, compact navigation center, contact block right.
- Responsive behavior: Collapses into an accessible menu below tablet width.

## Section: Hero

- Purpose: Communicate criminal-defense positioning and drive consultation requests.
- Content: Vertical chapter marker, eyebrow, one H1, two supporting paragraphs, primary and secondary CTAs, three credentials, response note, professional-association card.
- Layout: Copy occupies the left half; portrait and desk occupy the right half; the association card overlaps the lower-right edge.
- Assets: `assets/images/hero-lawyer-office-empty.png` for the cabinet and `assets/images/selivanov-real-portrait.gif` for the real attorney portrait.
- Responsive behavior: Two columns on desktop; portrait becomes a lower visual panel on tablet/mobile; CTAs wrap and become full-width on narrow phones.

## Component registry

- `.site-header` — brand, navigation, phone action, mobile toggle.
- `.hero__rail` — chapter number and vertical practice label.
- `.button` with primary and outline modifiers.
- `.credential` — icon, headline, supporting label.
- `.association-card` — professional-affiliation proof block.

## Asset map

- `Референс 2.png` — supplied visual reference, retained unchanged.
- `assets/images/hero-lawyer-office-empty.png` — clean cabinet plate generated from the supplied reference; it contains no person.
- `assets/images/selivanov-real-portrait.gif` — selected real portrait from the supplied photo set; the face and expression remain original pixels.
- Inline SVG — interface icons and decorative legal mark; no external icon dependency.

## Interaction map

- Header anchors scroll to real hero subregions.
- Consultation and phone actions use links, with hover/pressed/focus-visible states.
- Mobile navigation toggle updates `aria-expanded`, closes on link selection and Escape.
- Motion is reduced when `prefers-reduced-motion` is enabled.

## Responsive plan

- `>= 1280px`: reference-like 12-column composition with portrait on the right.
- `1024–1279px`: compressed navigation and slightly smaller type, same two-column hierarchy.
- `768–1023px`: header menu toggle; hero copy remains above an anchored portrait panel.
- `<= 480px`: single-column content, full-width CTAs, horizontal credentials, no horizontal overflow.

## Assumptions

- All attorney details are transcribed only from the supplied reference and should be confirmed before production publication.
- The real portrait is layered separately from the generated cabinet plate so identity, facial features, and expression are not regenerated.
- This delivery intentionally implements only the visible header and hero requested by the user.
