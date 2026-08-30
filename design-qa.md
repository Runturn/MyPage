# Design QA — Sunlit portfolio

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

## Full-site unification — 2026-08-30

- Source visual: the existing sunlit homepage at `docs/qa/unified-reference-home.png` (1280 × 720).
- Preserved faceless after-state evidence: `unified-after-post-desktop.png`, `unified-after-tags-desktop.png`, and `unified-after-404-desktop.png`, all captured at a 1280 × 720 viewport, plus `unified-after-home-mobile.png` at 390 × 844.
- Privacy note: earlier About before/after captures embedded identifiable photography. They were removed from the repository and its local history rather than retained as historical QA evidence.

### Unification findings and fixes

1. P1 — A reveal animation was attached to the entire long-form article. Because the element was taller than the viewport, its intersection threshold could not be reached and the content remained invisible. Removed the long-container reveal attribute and retained motion on bounded hero elements.
2. P2 — About, post, tags, and 404 pages inherited the legacy Beautiful Jekyll header and Bootstrap visual system. Added shared sunlit header, footer, base, page, and post layouts using the homepage tokens and typography.
3. P2 — The previous About page exposed low-value personal measurements and an outdated current-student statement. Replaced them with public portfolio material: journey, research, project, community, interests, and language context.
4. P2 — Six desktop navigation links became crowded before the mobile breakpoint. Added an intermediate spacing rule, then verified the menu conversion and `aria-expanded` behavior at 390px.
5. P2 — Homepage status and note rows did not represent the new portfolio. Updated them to cyber security, LLM security, network security, civil-to-computing journey, Vibe Coding research, and QuickScribe.

### Full-site verification

- Jekyll production build completes successfully.
- Homepage, About, post, tags, and 404 routes load with complete images and zero horizontal overflow at 1280px.
- Homepage and About have zero horizontal overflow at 390px; the About hero stacks cleanly and the homepage notes collapse to one column.
- The mobile menu opens visibly and reports `aria-expanded="true"`.
- Browser console check returned no warnings or errors.
- The final side-by-side comparison preserves the homepage's paper texture, serif hierarchy, olive-and-gold palette, straight-edged image treatment, restrained rules, and spacious editorial rhythm across the inner pages.

## Browser annotation follow-up — vine position and pointer range

- Source visual truth: `docs/qa/vine-motion-before-1280.png` (1280 × 720), captured before the annotation change.
- Rendered implementation: `docs/qa/vine-motion-after-1280.png` (1280 × 720), captured after the change at the same viewport, page state, and device density.
- Full-view comparison: `docs/qa/vine-motion-comparison.png` places both captures on the same canvas; no focused crop was needed because the affected vine and full hero interaction region are clearly visible at this scale.
- Supplemental comment-viewport evidence: `docs/qa/vine-motion-after-1921.png` at 1921 × 1066.

### Finding, fix, and post-fix evidence

1. P2 — The hero vine extended 81.9px beyond the copy panel at 1280px and was clipped at the image boundary. Changed its desktop inset from `right: -12%` to `right: 2.5%`; the post-fix vine ends 16.7px before the panel edge at 1280px and 25.0px before it at 1921px.
2. P2 — Pointer parallax listened only on the road-image figure, so the left half of the hero felt inert. Moved the interaction root to the entire `.sunlit-hero`; pointer tests in the left and right halves now produce opposite vine rotation and image translation values.
3. P3 — The small-screen vine was still excessively offset from the right edge. Tightened the decorative mobile offset from `-60px` to `-24px` while preserving clipping containment and zero document overflow.

### Annotation verification

- Typography, spacing, palette, image crop, and copy remain unchanged from the accepted homepage.
- Zero horizontal document overflow at 1280 × 720, 1921 × 1066, and 390 × 844.
- At 1280px, moving the pointer over the left copy panel sets `--vine-x: -3.4px` and `--image-x: 4.2px`; moving it over the right image sets `--vine-x: 3.4px` and `--image-x: -4.2px`.
- Browser console check returned no warnings or errors.

## Post-graduation content architecture — 2026-08-30

- Visual sources: `docs/qa/reference-shan-about.png`, `reference-shan-projects.png`, `reference-shan-blog.png`, and `reference-shan-timeline.png`, each captured from the matching SHAN-VERSE route at a 1280 × 720 viewport.
- Matched implementation states retained here use only faceless imagery. Earlier About, Projects, and Story hero captures containing identifiable people were removed under the privacy-first photography policy.
- Below-fold desktop evidence: `postgrad-projects-content-viewport.png`, `postgrad-story-content-viewport.png`, `postgrad-notes-content-viewport.png`, and `postgrad-connections-content-viewport.png`.
- Responsive evidence: 390 × 844 captures for the Projects hero and publication content, About experience section, Story rail, Notes list, Connections cards, and open mobile menu.

### Content-architecture findings and fixes

1. P1 — The portfolio still described Runtong as a University of Aizu graduate student. Updated the homepage and About page to state graduation and joining BACS as a new graduate in June 2026, without inventing a role title.
2. P2 — Journey, Research, Projects, Notes, and Friends mixed section anchors with an external link and had no coherent inner-page hierarchy. Replaced them with dedicated About, Story, Notes, Projects, and Connections routes.
3. P2 — A SHAN-VERSE-style detailed timeline would disclose more personal detail than intended. Kept the year-led rail but limited it to broad education, fieldwork, research, community, graduation, and employment milestones; added an explicit privacy note.
4. P2 — The previous Resources/Friends concepts did not distinguish relationships from generic bookmarks. Added a curated Connections grid, made Partner the first and visually accented card, and included only SHAN-VERSE, Su Laboratory, BACS, and the University of Aizu.
5. P2 — The About page repeated portfolio sections instead of presenting a profile. Reorganised it into education, experience, research, skills, languages, and interests while maintaining the warm paper, olive, gold, serif, and straight-edged visual system.
6. P2 — There was no true Notes index or publication index. Added a dynamic Jekyll Notes list and a Projects page with both Runtong-authored papers, accurate venue/status labels, publication links only where public, QuickScribe, and civil-engineering foundations.

### Post-fix verification

- Jekyll production build completes successfully with all six primary routes returning HTTP 200.
- Matched source/implementation captures preserve SHAN-VERSE's structural ideas—profile hierarchy, category routes, year rail, and post list—while intentionally keeping Runtong's accepted warm-light design language.
- Long publication titles, external-link controls, the privacy timeline, note cards, and connection cards remain contained at 1280 × 720 and 390 × 844.
- The mobile menu opens visibly and reports `aria-expanded="true"`; the browser console reports no warnings or errors.
- No unresolved P0, P1, or P2 visual or interaction issues remain.

## Privacy-first photography — 2026-08-30

- Desktop evidence: `docs/qa/privacy-about-desktop.png`, `privacy-story-desktop.png`, and `privacy-projects-desktop.png` at 1280 × 720.
- Responsive evidence: `docs/qa/privacy-about-mobile.png` and `privacy-projects-mobile.png` at 390 × 844.
- The About, Story, and Projects heroes now use Wuhan landscape, snowy path, and botanical seedling imagery respectively; no identifiable face is present in any current page asset or retained QA capture.
- Homepage preview states use the same faceless image set, while publication previews continue to use the paper image.
- All five replacement captures were checked for complete image loading, contained layout, and zero horizontal document overflow.
- Every replacement image completed loading with a non-zero natural size; no failed image resource was observed.

## Nature cursor trail — 2026-08-30

- Baseline: `docs/qa/leaf-trail-before.png`, captured at 1280 × 720 with the pointer effect absent.
- Implemented state: `docs/qa/leaf-trail-after.png`, captured at the same viewport after one continuous diagonal pointer path.
- Same-input visual comparison confirms the trail remains legible across both the cream copy panel and the detailed road photograph without hiding navigation, buttons, or status content.

### Trail findings and verification

1. P2 — The initial density felt too sparse relative to the requested “group of leaves.” Increased the shape size and lifetime, shortened the distance/time emission gates, and allowed up to four interpolated leaves per movement while retaining a hard 48-element cap.
2. P2 — A single repeated silhouette would look stamped. The final trail randomises four Font Awesome botanical silhouettes, five palette-matched olive/gold tones, scale, rotation, cross-path drift, fall distance, and duration.
3. P1 — Cursor decoration must not block interaction or create persistent DOM growth. Every particle is `pointer-events: none`, removes itself after animation, and clears when the page is hidden; 44 leaves were active during the density capture and the count returned to 0 after expiry.
4. P1 — Decorative motion must not affect users on touch devices or with motion sensitivity. Creation is skipped for coarse pointers and `prefers-reduced-motion`; CSS also force-hides any leaf particle under reduced motion.

- Site-wide verification produced 8 active leaves on the Projects page after a short pointer path, confirming the shared layout script applies the effect beyond the homepage.
- Browser console check returned no warnings or errors.
- No unresolved P0, P1, or P2 issues remain.

final result: passed
