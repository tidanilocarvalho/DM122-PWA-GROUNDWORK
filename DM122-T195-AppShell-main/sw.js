self.addEventListener('install', event => {
  console.log('[Service Worker] Installing service worker...');

  event.waitUntil(
      caches.open('app-shell-v1')
        .then(cache => {
            return cache.addAll([
              "offline.html"
            ])
        })
    );

  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating service work...')
})

self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetch event...', event)
});