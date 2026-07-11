#!/usr/bin/env node
/**
 * SnapNote smoke tests — validates app shell, PWA assets, and next-gen features.
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

// Required files
const requiredFiles = [
  'index.html',
  'manifest.json',
  'sw.js',
  'icon-192.png',
  'icon-512.png',
  'LICENSE',
  'README.md'
];

for (const file of requiredFiles) {
  if (exists(file)) ok(`File exists: ${file}`);
  else fail(`Missing file: ${file}`);
}

// Manifest validation
try {
  const manifest = JSON.parse(read('manifest.json'));
  if (manifest.name && manifest.short_name) ok('manifest.json has name fields');
  else fail('manifest.json missing name fields');
  if (manifest.icons && manifest.icons.length >= 2) ok('manifest.json has icons');
  else fail('manifest.json missing icons');
  if (manifest.theme_color === '#0f766e') ok('manifest.json theme_color correct');
  else fail('manifest.json theme_color unexpected', manifest.theme_color);
} catch (e) {
  fail('manifest.json parse error', e.message);
}

// HTML structure
const html = read('index.html');
const htmlChecks = [
  ['Single DOCTYPE', (html.match(/<!DOCTYPE html>/gi) || []).length === 1],
  ['No disabled duplicate page', !html.includes('superseded prototype')],
  ['Achievement badges', html.includes('BADGES') && html.includes('badgeGrid')],
  ['OCR processing', html.includes('processImage') && html.includes('Tesseract')],
  ['Pro Mode', html.includes('proMode') && html.includes('translateToSpanish')],
  ['Q&A feature', html.includes('askQuestion')],
  ['PWA install', html.includes('beforeinstallprompt')],
  ['Service worker registration', html.includes("register('/sw.js')")],
  ['Export notes', html.includes('exportNotes')],
  ['Theme color meta', html.includes('theme-color')],
];

for (const [label, result] of htmlChecks) {
  if (result) ok(label);
  else fail(label);
}

// Service worker
const sw = read('sw.js');
if (sw.includes('snapnote-v2')) ok('Service worker cache version v2');
else fail('Service worker cache version');
if (sw.includes('icon-192.png')) ok('Service worker caches icons');
else fail('Service worker missing icon cache');

// Icon sizes
for (const [file, minBytes] of [['icon-192.png', 100], ['icon-512.png', 100]]) {
  const stat = fs.statSync(path.join(ROOT, file));
  if (stat.size > minBytes) ok(`${file} has content (${stat.size} bytes)`);
  else fail(`${file} too small`);
}

// README badges
const readme = read('README.md');
const badgePatterns = ['actions/workflows/ci.yml/badge.svg', 'License-MIT', 'PWA-Ready', 'Privacy-First'];
for (const pattern of badgePatterns) {
  if (readme.includes(pattern)) ok(`README badge: ${pattern}`);
  else fail(`README missing badge: ${pattern}`);
}

console.log(`\nResults: ${passed} passed, ${failed} failed\n`);
process.exit(failed > 0 ? 1 : 0);
