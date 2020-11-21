const cacheName = 'app-shell-v10';
const assetsToCache = [
    'offline.html', 'index.html'
];

async function cacheStaticAssets() {
    try {
        const cache = await caches.open(cacheName);
        return cache.addAll(assetsToCache);
    } catch (error) {
        console.log("Failed to install assets cache ", error);
    }
}

async function networkFirst(request) {
  try {
    return await fetch(request);
  } catch {
    const cache = await caches.open(cacheName);
    return cache.match('offline.html');
  }
}

function removeOldCache(cacheKey) {
  if (cacheKey !== cacheName) {
    console.log('[Service Worker] removing old cache');
    return caches.delete(cacheKey);
  }
}

async function cacheCleanUp() {
    const keyList = await caches.keys();
    return Promise.all(keyList.map(removeOldCache));
}

self.addEventListener('install', event => {
  console.log('[Service Worker] Installing service worker...');
  event.waitUntil(cacheStaticAssets());
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating service work...')
  event.waitUntil(cacheCleanUp());
  self.clients.claim();
})

self.addEventListener('fetch', event => {
  //console.log('[Service Worker] Fetch event...', event)
  event.respondWith(networkFirst(event.request));
});