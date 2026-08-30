# Design QA — Sunlit homepage

## Comparison contract

- Visual truth: `docs/qa/reference-homepage.png` (user-supplied reference, 1487 × 1058 px).
- Implementation evidence: `docs/qa/implementation-desktop.png` (1488 × 1058 px).
- Desktop CSS viewport: 1488 × 1058 at device scale factor 1.
- Supplemental responsive evidence: `docs/qa/implementation-mobile.png`, captured from a 390 × 844 CSS viewport (390 × 843 image output).
- State: initial page load, top of page, no hover, menu closed.
- Full comparison: `docs/qa/comparison-desktop.jpg`; the one-pixel width difference in the source is padded rather than stretched.
- Focused comparisons: `docs/qa/comparison-hero.jpg` and `docs/qa/comparison-notes.jpg`.
- Responsive regression source: `docs/qa/responsive-overlap-reference.png`; reproduced at a 1000 × 760 CSS viewport in `docs/qa/responsive-before-1000.png`.
- Responsive post-fix comparison: `docs/qa/responsive-comparison-1000.jpg`, with before on the left and after on the right in the same viewport and Notes interaction state.

## Visual system check

- Typography: Cormorant Garamond for the large editorial display and Libre Baskerville for supporting copy. The hierarchy, tracking, line breaks, and compact navigation closely follow the reference.
- Palette: warm paper (`#f8f5ec`), deep olive ink (`#303a35`), muted green (`#65794d`), and restrained gold (`#c8a044`). No gradients are used.
- Structure: centered editorial header, 53/47 split hero, title/action/status rhythm, sunlit road image, and three-row notes section all align with the reference composition.
- Imagery: existing personal road and winter photographs are used. A transparent fine-line botanical asset fills the decorative role without competing with the content.
- Motion: staged entrance, gentle image and vine parallax, scroll reveal, hover/focus preview swaps, and a responsive navigation menu. `prefers-reduced-motion` removes nonessential movement.

## Iteration findings and fixes

1. P1 — The mobile `RUNTONG` line overflowed the viewport. Reduced the small-screen display size and tracking; verified at 390 px width.
2. P2 — Desktop navigation sat too far right relative to the reference. Re-centered the navigation and tightened its spacing.
3. P2 — Hero title, divider, lead, and actions had a looser vertical rhythm. Adjusted margins and display sizing to match the reference hierarchy.
4. P2 — The notes preview column and first title wrapping did not line up with the source. Fixed the preview grid width and stabilized the visible title treatment.
5. P2 — The mobile menu button lacked an accessible name. Added `aria-label="Menu"`; verified open, Escape-to-close, and `aria-expanded` state changes.
6. P1 — At narrow desktop widths, the four-column Notes row exceeded the space left beside the preview image and visually crossed underneath it. Added a two-row Notes layout through 1280px, a single-column mobile transition at 900px, fluid preview sizing, and section overflow containment.

## Post-fix evidence

- Desktop and mobile images render without clipping or layout overflow in the tested viewports.
- Responsive boundary captures at `docs/qa/responsive-notes-1281.png`, `responsive-notes-1280.png`, `responsive-notes-901.png`, `responsive-notes-900.png`, and `responsive-notes-390.png` show clean transitions on both sides of each breakpoint.
- Measured document width matches viewport width at 1281, 1280, 1181, 1000, 901, 900, 768, 560, 390, and 320px; the 1488px desktop root is also contained at exactly 1488px.
- The note preview changes from the winter image to `Changjiang.jpg` on the third row's hover/focus state.
- The mobile menu opens, reports `aria-expanded="true"`, closes with Escape, and returns to `aria-expanded="false"`.
- Browser console check returned no warnings or errors.
- Remaining P3 variance: the available road photograph and generated vine have different exact silhouettes from the flattened reference, while preserving its composition, warmth, density, and visual role.
- No unresolved P0, P1, or P2 issues remain.

final result: passed
