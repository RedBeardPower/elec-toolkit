# Electrical Field Toolkit

A single-file web app with NEC calculators, reference tables, conduit bending, pull box design, and prefab ordering. Works fully offline once installed.

## Host it on GitHub Pages (one-time, ~5 minutes)

1. Go to [github.com/new](https://github.com/new) and create a repository (e.g. `elec-toolkit`). Public is fine.
2. On the new repo page, click **uploading an existing file** and drag in everything in this folder (`index.html`, `manifest.webmanifest`, `sw.js`, the three `icon-*.png` files, and this README). Commit.
3. In the repo: **Settings → Pages** → under "Build and deployment," set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Wait a minute or two. Your app is live at:
   `https://<your-username>.github.io/elec-toolkit/`

## Install on iPhone / iPad

1. Open that URL in **Safari**.
2. Tap the **Share** button → **Add to Home Screen** → Add.
3. Launch it from the icon — it runs full screen like a native app and works with no signal after the first load.

## Updating the app

Edit `index.html` (or replace it with a newer copy), commit to the repo, and the live site updates in about a minute. Installed phones pick up the new version the next time the app is opened with a connection (one relaunch may be needed).

## Notes

- Saved jobs/requesters (prefab ordering) are stored on each device.
- Order form PNGs save through the iOS share/download sheet; email opens the Mail app with the order text pre-filled.
