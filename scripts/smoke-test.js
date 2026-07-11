#!/usr/bin/env node
/**
 * SnapNote smoke tests — validates app shell, PWA assets, bundled vendor files, and docs.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
let passed = 0;
let failed = 0;

function ok(label) {
  passed++;
  console.log(`  ✓ ${label}`);
}

function fail(label, detail) {
  failed++;
  console.error(`  ✗ ${label}${detail ? `: ${detail}` : ''}`);
}

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function exists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

console.log('\nSnapNote smoke tests\n');

const requiredFiles = [
  'index.html',
  'manifest.json',
  'sw.js',
  'icon-192.png',
  'icon-512.png',
  'assets/css/app.css',
  'assets/vendor/tesseract.min.js',
  'assets/vendor/worker.min.js',
  'assets/vendor/tesseract-core.wasm.js',
  'assets/vendor/eng.traineddata.gz',
  'docs/PRIVACY.md',
  'docs/OFFLINE.md',
  'docs/USE-CASES.md',
  'docs/screenshots/app-home.png',
  'LICENSE',
  'README.md',
  '.github/workflows/ci.yml',
  '.github/workflows/pages.yml'
];

for (const file of requiredFiles) {
  if (exists(file)) ok(`File exists: ${file}`);
  else fail(`Missing file: ${file}`);
}

try {
  const manifest = JSON.parse(read('manifest.json'));
  if (manifest.name && manifest.short_name) ok('manifest.json has name fields');
  else fail('manifest.json missing name fields');
  if (manifest.icons && manifest.icons.length >= 2) ok('manifest.json has icons');
  else fail('manifest.json missing icons');
  if (manifest.start_url === './index.html') ok('manifest.json uses relative start_url');
  else fail('manifest.json start_url', manifest.start_url);
} catch (e) {
  fail('manifest.json parse error', e.message);
}

const html = read('index.html');
const htmlChecks = [
  ['Single DOCTYPE', (html.match(/<!DOCTYPE html>/gi) || []).length === 1],
  ['No CDN tailwind', !html.includes('cdn.tailwindcss.com')],
  ['Local tesseract bundle', html.includes('assets/vendor/tesseract.min.js')],
  ['Local CSS bundle', html.includes('assets/css/app.css')],
  ['Tesseract local worker paths', html.includes('workerPath') && html.includes('langPath')],
  ['Achievement badges', html.includes('BADGES') && html.includes('badgeGrid')],
  ['Pro Mode', html.includes('proMode') && html.includes('translateToSpanish')],
  ['Relative service worker', html.includes("register('sw.js')")],
  ['Export notes', html.includes('exportNotes')],
];

for (const [label, result] of htmlChecks) {
  if (result) ok(label);
  else fail(label);
}

const sw = read('sw.js');
if (sw.includes('snapnote-v3')) ok('Service worker cache version v3');
else fail('Service worker cache version');
if (sw.includes('eng.traineddata.gz')) ok('Service worker caches OCR language data');
else fail('Service worker missing lang data cache');

const readme = read('README.md');
const readmeChecks = [
  'actions/workflows/ci.yml/badge.svg',
  'mimindmendinc.github.io/SnapNote',
  'docs/PRIVACY.md',
  'docs/USE-CASES.md',
  'docs/screenshots/app-home.png'
];
for (const pattern of readmeChecks) {
  if (readme.includes(pattern)) ok(`README includes: ${pattern}`);
  else fail(`README missing: ${pattern}`);
}

const vendorSize = fs.statSync(path.join(ROOT, 'assets/vendor/eng.traineddata.gz')).size;
if (vendorSize > 1_000_000) ok(`OCR language data bundled (${Math.round(vendorSize / 1e6)} MB)`);
else fail('OCR language data too small');

console.log(`\nResults: ${passed} passed, ${failed} failed\n`);
process.exit(failed > 0 ? 1 : 0);
