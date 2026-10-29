const CACHE = 'decadence-arcade-v7';
const SHELL = [
  "./",
  "./index.html",
  "./pwa.js",
  "./manifest.webmanifest",
  "./assets/arcade-retro-32.png",
  "./assets/arcade-retro-180.png",
  "./assets/arcade-retro-192.png",
  "./assets/arcade-retro-512.png",
  "./assets/arcade-retro-maskable-512.png",
  "./assets/barrier-knights-3d.webp",
  "./assets/bones-platform-logo.png",
  "./assets/heir-of-despair-wordmark.png",
  "./assets/sakura-3d.webp",
  "./assets/scarlet-seal.png",
  "./assets/skull-king-wordmark.png",
  "./assets/space-case-logo.webp",
  "./assets/space-case-wordmark.webp",
  "./assets/spies-in-disguise-3d.webp",
  "./assets/stackup-3d.webp"
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key.startsWith('decadence-arcade-') && key !== CACHE)
      .map(key => caches.delete(key))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  const scope = new URL('./', self.location.href);
  const isHome = event.request.mode === 'navigate' &&
    (url.pathname === scope.pathname || url.pathname === scope.pathname + 'index.html');
  if (isHome) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const response = await fetch(event.request, { cache: 'no-store' });
        if (!response.ok) throw new Error('Homepage unavailable');
        await cache.put('./index.html', response.clone());
        return response;
      } catch (_) {
        return (await cache.match('./index.html')) || Response.error();
      }
    })());
  } else if (SHELL.some(path => new URL(path, scope).href === url.href)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      return (await cache.match(event.request)) || fetch(event.request);
    })());
  }
});
