importScripts('./workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

const staticAssets = [
  './',
  './index.js',
  './styles.css',
  './sweetalert.min.js',
  './audios'
  ];

  const wb = new WorkboxSW()
  wb.precache(staticAssets)