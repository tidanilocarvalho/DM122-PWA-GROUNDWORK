self.addEventListener('install', event => {
  console.log('[Service Worker] Installing service worker...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating service work...')
})

self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetch event...', event)
});