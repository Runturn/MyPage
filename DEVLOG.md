# Development Log

## 2026-08-30 — Sunlit homepage redesign

- Rebuilt the homepage around the selected warm editorial reference: cream paper texture, high-contrast serif typography, muted green controls, gold accents, a sunlit road hero, and a compact recent-notes section.
- Reused Runtong's existing `path.jpg`, `Snowing.jpg`, and `Changjiang.jpg` photography instead of replacing personal imagery with generated substitutes.
- Added a project-local transparent botanical illustration for the hero and notes decoration.
- Added restrained motion: staged page entrance, image and vine parallax, scroll reveals, mobile navigation, button and note-row states, and hover/focus-driven note preview changes.
- Kept reduced-motion behavior and keyboard focus as first-class accessibility paths.

### Responsive follow-up

- Reflowed Recent Notes into a two-row tablet layout before its preview image can squeeze the text columns, then preserved the existing single-column mobile layout below 900px.

## 2026-08-30 — Full-site visual and profile update

- Extracted public-safe profile facts and selected individual photographs from the updated BACS presentation; omitted onboarding, employer-training, driver-license, and other short-lived personal details.
- Added graduation, construction-site, JPHACKS, and paper imagery with descriptive local filenames and alt text.
- Replaced the old Bootstrap-era About, post, tags, and 404 presentation with shared sunlit layouts, navigation, footer, typography, page heroes, and responsive behavior.
- Rewrote About around the civil-engineering-to-cyber-security journey, accepted Vibe Coding research, collaborative intrusion-detection work, QuickScribe, student-community leadership, and broader interests.
- Updated the homepage focus strip and note entries to match the new portfolio content; refreshed the first historical note without changing its original date.
- Verified Jekyll build output, desktop and mobile overflow, image loading, navigation state, and browser console output. Fixed a long-container reveal regression found during visual QA.

## 2026-08-30 — Hero vine and motion annotation

- Shifted the desktop botanical vine fully into the text panel so the image split no longer clips its right side; reduced the mobile edge offset as well.
- Expanded pointer parallax from the road image alone to the full hero, allowing the title, buttons, status strip, and image regions to drive the same coordinated motion.
- Verified opposite-direction pointer response across both hero halves, zero horizontal overflow at desktop/comment/mobile viewports, and a clean browser console.
