# Development Log

## 2026-08-31 — Clearer clickable cursor state

- Kept the accepted compact olive-and-gold cursor palette and 18px base footprint.
- Enlarged the inner olive dot from roughly 4px to 7.2px over links, buttons, cards, and preview routes so the clickable state remains legible while preserving the same colour identity as the default cursor.
- Added four restrained one-pixel directional ticks inspired by SHAN-VERSE's clickable cursor and a smaller pressed-dot state for immediate click feedback.

## 2026-08-31 — Lighter leaf trail

- Reduced leaf size from 11–23px to 7–13px and shortened drift distance and lifetime, so particles read as texture rather than foreground decoration.
- Halved the active-particle cap from 48 to 24 and the per-movement burst from four leaves to two.
- Increased the required pointer distance and time interval between emissions, leaving more open space around the minimal dot-and-ring cursor.

## 2026-08-30 — Minimal botanical pointer

- Replaced the operating-system arrow on fine-pointer devices with a compact olive dot and thin gold ring, following SHAN-VERSE's restrained cursor scale without copying its star particles.
- Added only a subtle ring expansion and gold-dot change for links and buttons plus a compact pressed state, keeping the click hotspot centred and responsive without smoothing lag.
- Kept the existing varied-leaf trail as the nature-specific expression, allowing the persistent pointer itself to remain quiet and precise.
- Activates only after the custom cursor is mounted and only for devices reporting both hover and a fine pointer; touch/coarse-pointer devices retain their native behavior.
- Kept the cursor non-interactive and hidden from assistive technology, with reduced-motion rules collapsing its decorative transitions and disabling the leaf trail.

## 2026-08-30 — Privacy-first photography

- Removed all identifiable face photographs from the live site and replaced them with landscapes, botanical imagery, and publication material already present in the project.
- Removed portrait-dependent metadata, captions, preview states, and visual-regression captures so the repository no longer needs a personal headshot or event photograph.
- Adopted a faceless-image default for future updates: prefer nature, places, objects, work samples, and abstract details unless an identifiable portrait is deliberately approved.
- Rewrote local Git history to remove the original face-photo blobs and screenshots that embedded them; remote history remains a separate publication decision.

## 2026-08-30 — Nature cursor trail

- Added a site-wide mouse trail made from four Font Awesome botanical silhouettes rather than emoji or custom cursor artwork.
- Varied leaf shape, scale, olive/gold tone, rotation, lateral drift, fall distance, and lifetime so the trail feels organic instead of stamped or repetitive.
- Limited emission by pointer distance, time interval, and an active-element cap; expired leaves remove themselves and clear when the page is hidden. The cap was tightened further in the 2026-08-31 density refinement.
- Disabled the effect for coarse pointers and `prefers-reduced-motion`, while keeping every leaf non-interactive and hidden from assistive technology.

## 2026-08-30 — Post-graduation information architecture

- Updated the homepage status and About page to reflect University of Aizu graduation and joining BACS as a new graduate in June 2026, without inventing a job title or publishing workplace details beyond the requested public summary.
- Replaced the former Journey/Research/Friends navigation with separate Story, Notes, Projects, and Connections pages while preserving the warm editorial visual system across the full site.
- Built a privacy-conscious timeline with broad milestones rather than precise personal dates, routines, or relationship history.
- Added a dynamic Jekyll Notes index, a Projects page containing Runtong's ISPEC 2025 and ICICS 2026 papers plus QuickScribe, and a curated Connections page for SHAN-VERSE, Su Laboratory, BACS, and the University of Aizu.
- Reframed About around education, experience, research, skills, languages, and interests, following the structural rhythm of SHAN-VERSE without copying its dark visual treatment.

## 2026-08-30 — Sunlit homepage redesign

- Rebuilt the homepage around the selected warm editorial reference: cream paper texture, high-contrast serif typography, muted green controls, gold accents, a sunlit road hero, and a compact recent-notes section.
- Reused Runtong's existing `path.jpg`, `Snowing.jpg`, and `Changjiang.jpg` photography instead of replacing personal imagery with generated substitutes.
- Added a project-local transparent botanical illustration for the hero and notes decoration.
- Added restrained motion: staged page entrance, image and vine parallax, scroll reveals, mobile navigation, button and note-row states, and hover/focus-driven note preview changes.
- Kept reduced-motion behavior and keyboard focus as first-class accessibility paths.

### Responsive follow-up

- Reflowed Recent Notes into a two-row tablet layout before its preview image can squeeze the text columns, then preserved the existing single-column mobile layout below 900px.

## 2026-08-30 — Full-site visual and profile update

- Extracted public-safe profile facts from the updated BACS presentation; omitted onboarding, employer-training, driver-license, and other short-lived personal details.
- Added portfolio and paper imagery with descriptive local filenames and alt text; identifiable portraits were later removed under the privacy-first photography policy.
- Replaced the old Bootstrap-era About, post, tags, and 404 presentation with shared sunlit layouts, navigation, footer, typography, page heroes, and responsive behavior.
- Rewrote About around the civil-engineering-to-cyber-security journey, accepted Vibe Coding research, collaborative intrusion-detection work, QuickScribe, student-community leadership, and broader interests.
- Updated the homepage focus strip and note entries to match the new portfolio content; refreshed the first historical note without changing its original date.
- Verified Jekyll build output, desktop and mobile overflow, image loading, navigation state, and browser console output. Fixed a long-container reveal regression found during visual QA.

## 2026-08-30 — Hero vine and motion annotation

- Shifted the desktop botanical vine fully into the text panel so the image split no longer clips its right side; reduced the mobile edge offset as well.
- Expanded pointer parallax from the road image alone to the full hero, allowing the title, buttons, status strip, and image regions to drive the same coordinated motion.
- Verified opposite-direction pointer response across both hero halves, zero horizontal overflow at desktop/comment/mobile viewports, and a clean browser console.
