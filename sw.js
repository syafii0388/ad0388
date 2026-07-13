self.addEventListener('install', (e) => {
    console.log('[Service Worker] Terinstal');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Aktif');
});

self.addEventListener('fetch', (e) => {
    // Membiarkan browser mengambil data dari internet seperti biasa
    return;
});