# Role & Objective

Act as a Senior UI/UX Designer and Frontend Developer.
Your goal is to convert the attached reference image into a pixel-accurate, production-ready frontend implementation.

Do not redesign the layout, simplify the composition, or replace distinctive visual decisions with generic components. Reproduce the reference as closely as possible while keeping the code clean, responsive, and maintainable.

# Tech Stack & Constraints

- Use plain HTML5, CSS3, and modern JavaScript (ES6+).
- Do not use React, Vue, Angular, Bootstrap, Tailwind, jQuery, or other frameworks unless explicitly requested.
- Use semantic HTML elements such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- Use CSS custom properties in `:root` for colors, typography, spacing, border radii, shadows, and container widths.
- Use CSS Grid and Flexbox for layout.
- Follow a desktop-first implementation when the reference is desktop-oriented, then adapt the same design for tablets and phones.
- Keep JavaScript minimal and use it only for interactions, navigation, sliders, tabs, accordions, modals, forms, and animation control.
- Do not insert inline styles or unnecessary third-party dependencies.

# Reference Analysis

Before writing code, carefully analyze the attached reference image and determine:

1. Page structure and section order.
2. Header height, navigation placement, logo position, and CTA elements.
3. Main content width, grid structure, column ratios, and alignment.
4. Background colors, gradients, overlays, textures, and decorative elements.
5. Typography hierarchy:
   - font family;
   - font size;
   - font weight;
   - line height;
   - letter spacing;
   - capitalization.
6. Spacing system:
   - section paddings;
   - gaps between elements;
   - card paddings;
   - margins between text blocks.
7. Component styling:
   - buttons;
   - cards;
   - badges;
   - forms;
   - icons;
   - dividers;
   - image frames.
8. Border radii, shadows, strokes, and hover states.
9. Responsive behavior that logically preserves the original visual hierarchy.

Estimate colors as HEX values and define them as CSS variables.
Choose the closest available Google Font only when the exact font cannot be identified. Prefer visually compatible options such as Inter, Manrope, DM Sans, Roboto, Poppins, Playfair Display, Cormorant Garamond, or Montserrat depending on the reference.

# Assets

- Reuse all supplied images and assets from the project directory.
- Inspect available files before creating placeholders.
- Do not replace real assets with gradients, emojis, or unrelated stock imagery.
- Preserve image aspect ratios and use `object-fit` appropriately.
- Use inline SVG or a lightweight icon library such as Lucide only when an icon asset is not supplied.
- Do not use emoji as interface icons.
- If a required image is missing, create a clearly named placeholder and note which asset must be replaced.
- Optimize raster images with WebP or AVIF when practical.
- Add descriptive `alt` text to meaningful images. Decorative images must use empty `alt` attributes.

# Implementation Process

1. Inspect the project files and identify the existing entry point.
2. Analyze the reference image and list the visible sections in their exact order.
3. Create the semantic HTML structure.
4. Define design tokens in `:root`.
5. Implement the desktop layout first.
6. Add responsive breakpoints for tablet and mobile.
7. Add hover, focus, active, and transition states.
8. Add only the interactions visible or implied by the reference.
9. Compare the implementation against the reference and correct visual deviations.
10. Verify that the page works without console errors.

# Responsive Requirements

The page must work correctly at the following viewport widths:

- 1440 px and larger;
- 1280 px;
- 1024 px;
- 768 px;
- 480 px;
- 375 px.

Responsive rules:

- Preserve content priority and visual hierarchy.
- Convert multi-column sections into one column only where necessary.
- Keep text readable without excessively reducing font sizes.
- Prevent horizontal scrolling.
- Make buttons and interactive elements touch-friendly.
- Keep images sharp and correctly cropped.
- Use fluid sizing with `clamp()` where it improves fidelity.
- Mobile navigation must be usable and accessible.

# Visual Fidelity Rules

- Match the reference composition before adding enhancements.
- Preserve the original section heights and whitespace proportions.
- Match text block widths and line breaks as closely as practical.
- Match button dimensions, corner radii, borders, and shadows.
- Match image cropping, positioning, and scale.
- Recreate decorative lines, shapes, labels, badges, and background elements.
- Avoid generic template styling.
- Do not add sections, cards, icons, or effects that are absent from the reference.
- Do not remove visible elements because they appear decorative.
- Use subtle transitions between 180 ms and 350 ms unless the reference suggests otherwise.

# Accessibility & Code Quality

- Use valid semantic HTML.
- Ensure keyboard navigation works.
- Add visible `:focus-visible` states.
- Use accessible labels for form controls and icon buttons.
- Maintain sufficient color contrast where possible without visibly changing the design.
- Respect `prefers-reduced-motion`.
- Keep CSS organized by page section.
- Use clear class names and avoid deeply nested selectors.
- Do not duplicate styles unnecessarily.
- Do not leave commented-out code, debug output, or unused dependencies.

# Output Requirements

Create or update the required project files, typically:

- `index.html`;
- `styles.css`;
- `script.js`;
- `assets/` for local images and icons.

At completion, provide:

1. A concise summary of implemented sections.
2. A list of created or modified files.
3. A list of missing assets or assumptions, if any.
4. Instructions for running the project locally.

# Final Quality Checklist

Before finishing, verify all of the following:

- The section order matches the reference.
- The layout is visually close to the reference at desktop width.
- Colors and typography are consistent.
- Images use correct proportions and cropping.
- Buttons, cards, borders, and shadows match the design.
- Desktop, tablet, and mobile layouts are complete.
- Navigation and interactive elements work.
- There is no horizontal overflow.
- There are no broken asset paths.
- There are no JavaScript console errors.
- The result does not look like a generic template.
