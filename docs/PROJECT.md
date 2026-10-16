# Decadence Arcade

- Canonical source: `https://github.com/Strategamma/Arcade.git`, branch `main`.
- Production homepage: `https://decadenceinc.com`, deployed with GitHub Pages from `dist/`.
- Treat the GitHub repository as the source of truth. Pull or inspect `origin/main` before edits and push approved homepage changes there so Pages redeploys.
- The arcade is a static site: `dist/index.html` plus artwork under `dist/assets/`.
- Brand direction: a platform bringing LAN gaming back through warm home game nights where people gather in one room, share Wi-Fi, and play together on their own devices. Keep claims general unless a game's networking behavior is verified.
- Live games:
  - StackUp: `https://stackup.decadenceinc.com`
  - Barrier Knights: `https://strategamma.github.io/BarrierKnights/`
  - Sakura Showdown: `https://strategamma.github.io/SakuraShowdown/`
  - Spies in Disguise: `https://strategamma.github.io/SpiesInDisguise/`
  - Scarlet Seal: `https://scarlet-seal.onrender.com/` (Render free service; initial wake may be slow)
  - Bones: `https://strategamma.github.io/Bones/` (3–6-player bluffing game; LAN and internet tables use separate servers)
  - Heir of Despair: `https://heir-of-despair.onrender.com/` (4–10-player same-room social deduction; hosted mode requires Internet)
- Scarlet Seal (`https://github.com/Strategamma/Scarlet-Seal`) is a Love Letter-inspired hidden-information game for 1–6 players with bots and same-Wi-Fi rooms.
- Game cards use `.status.live` and `.play` links. Keep the header's live-game count aligned with enabled cards.
- Catalog capacity classes use each game's maximum table size: `duel` for two-player games, `table` for 3–5, and `party` for 6+. Cards carry `data-category`; the accessible filter controls depend on it.
- This checkout may have read-only `.git` metadata. If the remote cannot be saved locally, clone the canonical repository into a writable checkout before committing or pushing; do not publish through ChatGPT Sites.

- Space Case: `https://space-case-ygl3.onrender.com/`, 6–15 player social deduction. Card uses the official logo beside its wordmark over a red glow, with a plain-text title. Health/homepage verified; physical-device and hosted restart/recovery QA remain open. Current file storage may lose rooms/points on Render restarts.
