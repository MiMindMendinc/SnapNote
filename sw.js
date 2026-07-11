const CACHE = 'snapnote-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './icon-192.png',
  './icon-512.png',
  './assets/css/app.css',
  './assets/vendor/tesseract.min.js',
  './assets/vendor/worker.min.js',
  './assets/vendor/tesseract-core.wasm.js',
  './assets/vendor/eng.traineddata.gz'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() =>
      new Response('Offline – resource not cached', { status: 503, headers: { 'Content-Type': 'text/plain' } })
    ))
  );
});
