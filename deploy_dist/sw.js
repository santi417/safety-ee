// SAFETY-EE Service Worker — Offline support
const VERSION = 'safety-ee-v1';
const CORE = [
  './',
  './SAFETY_EE.html',
  './manifest.json',
  './icon.svg',
  './icon-maskable.svg',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== VERSION).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Never cache Google Apps Script POST calls — must always hit network
  if (url.hostname.includes('script.google.com')) return;
  if (e.request.method !== 'GET') return;

  // Cache-first for core; network-first fallback for everything else
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        // Cache successful GETs (basic + opaque from CDN)
        if (res.ok || res.type === 'opaque') {
          const clone = res.clone();
          caches.open(VERSION).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match('./SAFETY_EE.html'));
    })
  );
});
