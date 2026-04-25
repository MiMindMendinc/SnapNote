# SnapNote

**Privacy-first photo-to-notes and summarization prototype.**

SnapNote is a Michigan MindMend Inc. portfolio project exploring how families, caregivers, students, and community workers can turn photos or documents into cleaner notes, summaries, and question-answering workflows with a privacy-first design.

The goal is simple: make everyday information easier to understand without default cloud harvesting.

---

## What It Demonstrates

- Photo/document-to-text workflow design
- Browser-first product prototyping
- OCR + summarization / Q&A direction
- Privacy-first UX for families and caregivers
- Simple installable PWA-style experience
- Clear product communication for non-technical users

---

## Features Direction

- **Photo-to-text extraction** for images and simple documents
- **Clean note generation** from extracted text
- **Summary and key-takeaway workflow** for long notes
- **Question-answering direction** over captured text
- **Local/browser-first design direction** where supported by the chosen model/runtime
- **Family/caregiver-friendly UX** for private everyday documents

Implementation details should be verified per deployment. If external CDNs, remote models, or hosted assets are used, the deployment should not be described as fully offline until those dependencies are removed or locally bundled.

---

## Architecture Direction

```text
Image / Document
   ↓
OCR extraction
   ↓
Clean text notes
   ↓
Summary / Q&A workflow
   ↓
User saves or copies results
```

---

## Quick Start

```bash
git clone https://github.com/MiMindMendinc/SnapNote.git
cd SnapNote
# Open index.html in a modern browser
```

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

- [ ] Add screenshots or short demo GIF
- [ ] Add a clear offline dependency checklist
- [ ] Bundle required assets locally where possible
- [ ] Add simple browser smoke test
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
