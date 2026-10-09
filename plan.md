# Goal
Make Scarlet Seal playable from the arcade using its verified production deployment.

# Scope
- Preserve the responsive catalog and other game links.
- Promote Scarlet Seal from development to live.
- Keep its capacity classification aligned with the current six-seat game.

# Approach
- Verify the production health endpoint and homepage.
- Point the card and navigation directly to the live Render service.
- Reclassify Scarlet Seal as Party because the current repository supports six seats.

# Risks
- The Render free service can have a noticeable cold-start delay.
- The intended custom domain is not yet resolvable, so use the verified Render URL.

# Verification
- Run Scarlet Seal's tests and production build.
- Verify its live health/page response plus arcade links, live count, and Party classification.
