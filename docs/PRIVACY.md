# SnapNote Privacy Policy

**Last updated:** July 2026  
**Applies to:** SnapNote browser app (Next Gen edition)

SnapNote is built by **Michigan MindMend Inc.** with a privacy-first design. This document explains what data the app touches, where processing happens, and what you should verify before using it with sensitive documents.

---

## Summary

| Topic | SnapNote behavior |
|-------|-------------------|
| Account required | No |
| Cloud upload of your photos | No — images stay in your browser session |
| OCR processing | Runs in your browser via Tesseract.js |
| Summaries & Q&A | Computed locally from extracted text |
| Achievement badges | Stored in your browser (`localStorage`) |
| Analytics / tracking | None built into SnapNote |
| Third-party CDNs | **Bundled locally** in the finished release (see [OFFLINE.md](OFFLINE.md)) |

---

## What SnapNote Processes

When you use SnapNote, the following happens **on your device**:

1. **Image upload** — your photo is read into browser memory (FileReader). It is not sent to a SnapNote server because there is no SnapNote server in the default deployment.
2. **OCR** — Tesseract.js extracts text from the image in-browser.
3. **Summary, keywords, Q&A, Pro Mode** — derived locally from the extracted text using JavaScript.
4. **Export** — creates a `.txt` file download from browser memory.
5. **Badges** — unlock timestamps saved in `localStorage` on your device only.

---

## What SnapNote Does Not Do

- Does not require sign-in or collect email, name, or profile data
- Does not sell or share your documents
- Does not provide medical, legal, or financial advice
- Does not guarantee perfect OCR accuracy
- Does not claim HIPAA, FERPA, or other compliance certifications

---

## Hosting & Deployment Considerations

If you self-host or fork SnapNote, privacy depends on **your** deployment:

| Check | Why it matters |
|-------|----------------|
| Are all JS/WASM/lang assets served from your domain? | Prevents third-party CDN leakage |
| Is HTTPS enabled? | Protects assets in transit |
| Are server access logs enabled? | Hosting providers may log IP/URL requests |
| Are analytics scripts added? | Would change the privacy model |
| Is a backend API added? | Would change where documents go |

Use [OFFLINE.md](OFFLINE.md) as a deployment checklist.

---

## Data Retention

- **Photos & extracted text:** held in page memory until you refresh or start a new photo. Not persisted to disk by default.
- **Badges:** persist in `localStorage` until you clear site data.
- **Service worker cache:** stores app shell files (HTML, CSS, JS, icons) for faster/offline loading — not your photos.

To remove badge data: clear browser storage for the SnapNote site.

---

## Children's Privacy

SnapNote does not knowingly collect personal information from anyone. Parents and caregivers should supervise use with children's documents and verify the deployment meets their comfort level.

---

## Changes

We may update this policy as SnapNote evolves. Material changes will be reflected in the repository changelog.

---

## Contact

**Lyle Perrien II**  
Founder, Michigan MindMend Inc.  
Michigan

For privacy questions about a specific deployment, contact the person or organization hosting that deployment.
