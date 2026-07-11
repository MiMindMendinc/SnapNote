# SnapNote Offline Dependency Checklist

Use this checklist before describing SnapNote as "offline" or "private" in a specific deployment.

---

## Bundled locally (finished release)

These assets ship in the repository and are cached by the service worker:

| Asset | Path | Purpose |
|-------|------|---------|
| App shell | `index.html` | Main UI |
| Styles | `assets/css/app.css` | Layout & design (no Tailwind CDN) |
| OCR library | `assets/vendor/tesseract.min.js` | Tesseract.js entry |
| OCR worker | `assets/vendor/worker.min.js` | Web worker |
| OCR core | `assets/vendor/tesseract-core.wasm.js` | WASM engine |
| Language data | `assets/vendor/eng.traineddata.gz` | English OCR model (~11 MB) |
| PWA manifest | `manifest.json` | Install metadata |
| Service worker | `sw.js` | Offline app shell |
| Icons | `icon-192.png`, `icon-512.png` | Home screen icons |

---

## Pre-flight checklist

Before claiming offline operation, verify each item:

- [ ] **All assets load from same origin** — open DevTools → Network, reload, confirm no external script requests
- [ ] **Service worker registers** — Application tab shows `sw.js` active
- [ ] **OCR works airplane-mode** — after first full load + cache, disable network and run OCR on a test image
- [ ] **No analytics tags** — confirm no Google Analytics, Hotjar, etc. were added
- [ ] **HTTPS in production** — required for service workers on most hosts
- [ ] **GitHub Pages base path** — if hosted at `/SnapNote/`, confirm relative paths resolve (live demo handles this)

---

## What still requires network (if misconfigured)

| Dependency | When needed | Fix |
|------------|-------------|-----|
| External CDN scripts | Only if local bundle removed | Restore `assets/vendor/` files |
| First visit | Must download ~16 MB OCR bundle once | Expected; then cached |
| Font stack | Uses system fonts only | No action needed |

---

## GitHub Pages live demo

**URL:** https://mimindmendinc.github.io/SnapNote/

After the first visit, the service worker caches the app shell and vendor assets. OCR language data is loaded from the bundled `assets/vendor/` folder — not a third-party CDN.

---

## Self-hosting

```bash
git clone https://github.com/MiMindMendinc/SnapNote.git
cd SnapNote
npx --yes serve .
# Open http://localhost:3000
```

Any static file server works. Ensure `assets/vendor/` is deployed intact.

---

## Smoke test

```bash
node scripts/smoke-test.js
```

Confirms required files exist, manifest is valid, and local asset references are present.
