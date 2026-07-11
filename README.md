# SnapNote

[![CI](https://github.com/MiMindMendinc/SnapNote/actions/workflows/ci.yml/badge.svg)](https://github.com/MiMindMendinc/SnapNote/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-teal.svg)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-0f766e)](manifest.json)
[![Privacy First](https://img.shields.io/badge/Privacy-First-1e3a8a)](README.md#privacy-model)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](index.html)
[![OCR](https://img.shields.io/badge/OCR-Tesseract.js-blue)](https://github.com/naptha/tesseract.js)
[![Version](https://img.shields.io/badge/Version-Next%20Gen-brightgreen)](index.html)

**Privacy-first photo-to-notes and summarization — Next Gen edition.**

SnapNote is a Michigan MindMend Inc. portfolio project exploring how families, caregivers, students, and community workers can turn photos or documents into cleaner notes, summaries, and question-answering workflows with a privacy-first design.

The goal is simple: make everyday information easier to understand without default cloud harvesting.

---

## What's New in Next Gen

- **Achievement badges** — unlock 6 badges as you use SnapNote (First Snap, Text Master, Smart Ask, Pro User, Installed, Power User)
- **Pro Mode** — auto-generated headlines and Spanish translation summaries
- **Export & copy** — copy any section or download a `.txt` export
- **PWA icons** — installable app shell with proper 192/512 icons
- **CI smoke tests** — automated checks on every push and PR
- **Cleaner codebase** — single-page app, no duplicate legacy HTML

---

## What It Demonstrates

- Photo/document-to-text workflow design
- Browser-first product prototyping
- OCR + summarization / Q&A direction
- Privacy-first UX for families and caregivers
- Installable PWA-style experience with achievements
- Clear product communication for non-technical users

---

## Features

- **Photo-to-text extraction** for images and simple documents (Tesseract.js OCR)
- **Clean note generation** from extracted text
- **Summary and keyword extraction** for long notes
- **Question-answering** over captured text (local keyword matching)
- **Pro Mode** — headlines + Spanish translation (offline dictionary)
- **Achievement badges** — gamified progress stored in localStorage
- **Export** — download notes as plain text
- **Installable PWA** — add to home screen on mobile and desktop

Implementation details should be verified per deployment. If external CDNs, remote models, or hosted assets are used, the deployment should not be described as fully offline until those dependencies are removed or locally bundled.

---

## Architecture

```text
Image / Document
   ↓
OCR extraction (Tesseract.js)
   ↓
Clean text notes + summary + keywords
   ↓
Pro Mode: headline + translation (optional)
   ↓
Q&A workflow + export
   ↓
Achievement badges (localStorage)
```

---

## Quick Start

```bash
git clone https://github.com/MiMindMendinc/SnapNote.git
cd SnapNote
# Open index.html in a modern browser, or serve locally:
npx --yes serve .
```

### Run smoke tests

```bash
node scripts/smoke-test.js
```

---

## Achievements

| Badge | How to unlock |
|-------|---------------|
| 📸 First Snap | Upload your first photo |
| 📝 Text Master | Extract text with OCR |
| ❓ Smart Ask | Ask a question about your note |
| ⭐ Pro User | Enable Pro Mode and process a note |
| 📲 Installed | Install SnapNote as a PWA |
| 🏆 Power User | Unlock all other badges |

---

## Privacy Model

SnapNote is designed toward local-first processing. Before using it with sensitive documents, verify the exact deployment path:

- whether OCR assets are loaded locally or remotely
- whether AI models are bundled locally or fetched from a CDN
- whether any analytics, hosting logs, or third-party scripts are present
- whether documents ever leave the device

---

## What It Does Not Claim

SnapNote does **not** currently claim:

- guaranteed 100% offline operation in every deployment
- medical, legal, or financial advice
- perfect OCR accuracy
- certified privacy/security compliance
- safe handling of regulated records without review

---

## Professional Roadmap

- [x] Add simple browser smoke test
- [x] Add PWA icons (192/512)
- [x] Add achievement badges
- [x] Add CI workflow with badge
- [ ] Add screenshots or short demo GIF
- [ ] Add a clear offline dependency checklist
- [ ] Bundle required assets locally where possible
- [ ] Add `docs/PRIVACY.md`
- [ ] Add live demo link if available
- [ ] Add example use cases for school, family, and caregiver workflows

---

## Built By

**Lyle Perrien II**  
Founder, **Michigan MindMend Inc.**  
Owosso, Michigan

Building privacy-first, offline-capable AI tools for families, communities, and trust-sensitive environments.

## License

MIT
