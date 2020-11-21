'use strict'

if ('serviceWorker' in navigator) {
  const success = () => console.log('[Service Worker] registered');
  const failure = () => console.log('[Service Worker] registration failed');

  navigator.serviceWorker
    .register('sw.js')
    .then(success)
    .catch(failure);
}