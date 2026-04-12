# SnapNote: Offline Photo-to-Notes & AI Summarizer

**Turn any photo into clean notes, summaries, and instant answers—100% offline and private.**

`SnapNote` is a powerful, privacy-first tool designed to help families and caregivers digitize and understand information instantly. Developed by **Michigan MindMend Inc.**, it uses on-device OCR and AI to process images directly in your browser, ensuring your sensitive data never leaves your device.

## 🎯 Features

- **Photo-to-Text (OCR)**: High-accuracy text extraction from any image or document.
- **Offline AI Q&A**: Ask questions about your notes and get instant answers without an internet connection.
- **Smart Summarization**: Automatically generate concise summaries and key takeaways from long documents.
- **Privacy-First Design**: 100% offline processing—no data is ever uploaded to a server.
- **PWA Ready**: Installable on any device for rapid, offline access.
- **Mental Health Focus**: Designed to help caregivers manage documentation with ease and privacy.

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/MiMindMendinc/SnapNote.git
cd SnapNote
# Open index.html in any modern browser
```

### Basic Usage

1. **Open SnapNote**: Launch the `index.html` file in your browser.
2. **Upload Photo**: Select or take a photo of the document you want to digitize.
3. **Extract & Summarize**: The AI will automatically extract text and provide a summary.
4. **Ask Questions**: Use the Q&A feature to dive deeper into the content.

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│   User Image / Document                 │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│   SnapNote (Offline PWA)                │
│  ┌───────────────────────────────────┐  │
│  │ OCR Engine (Tesseract.js)         │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │ AI Engine (Xenova Transformers)   │  │
│  │ - BERT-based Q&A                  │  │
│  │ - Summarization                   │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
               │
               ▼
        Digital Notes & AI Insights
```

## 🔒 Privacy & Security

- ✅ 100% Offline: All processing happens in your browser's memory.
- ✅ Zero Data Collection: We don't track, store, or see your documents.
- ✅ Secure by Default: No server-side components to exploit.

## 📄 License

MIT - Built for the people, not the platforms.

---

**Built by Michigan MindMend Inc.** | Privacy-first AI for families | [Website](https://github.com/MiMindMendinc)
