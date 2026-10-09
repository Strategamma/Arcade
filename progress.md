Original prompt: 1. Change the theme of the site to something darker, with more red. 2. Add a new game called Spies in Disguise from https://github.com/Strategamma/SpiesInDisguise

- Read project memory and inspected the existing static homepage.
- Existing uncommitted homepage edits predate this task; preserve them.
- GitHub repository content is unavailable in this session, so avoid unsupported game-specific claims.
- The conventional GitHub Pages URL returns 404; the new card links to the supplied repository and is not labeled live.
- Implemented near-black/crimson theme, a two-by-two cabinet grid, new card/navigation entry, and original SVG mark.
- Playwright Chromium was installed in `/tmp`, but macOS sandboxing prevented launch; the built-in browser preview was also unavailable because browser access was declined.
- Static checks passed: homepage and new SVG return HTTP 200 locally, SVG parses, four cards/two Spies links/three live labels are present, memory remains under 500 words, and `git diff --check` is clean.
- TODO: visual browser verification remains unavailable in this environment; no known implementation issue remains.
- Spies in Disguise GitHub Pages deployment now returns HTTP 200; both links, card status, CTA, and live-game count were updated.
- Reframed the homepage around home game nights with a warm living-room palette, “same room, same Wi-Fi” hero, gather/connect/play explainer, and room-oriented lineup, manifesto, and footer copy.
- Browser preview remains unavailable because local-page access was declined; structural and static verification is used instead.
- Added Scarlet Seal as an in-development fifth game with an original envelope-and-wax-seal SVG mark; no dead play link or unsupported live status was added.
- Verified the supplied Scarlet Seal repository: 1–4 seats, bot play, and same-Wi-Fi rooms. Linked the card to the repository; a live game link still requires WebSocket-capable hosting.
- Added capacity classifications and filters: Duel (2 players), Table (3–5), and Party (6+). Reworked cards into a smaller 3/2/1-column grid for desktop/tablet/mobile, with compact phone cards and horizontally scrollable filter controls.
- Made the platform mission explicit across metadata, hero, manifesto, and footer: Decadence Arcade is bringing LAN gaming back.
- Verified Scarlet Seal production at `https://scarlet-seal.onrender.com/` (health HTTP 200), passed all 15 tests and the production build, and promoted its arcade card to live. The current six-seat version is classified as Party.
