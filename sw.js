importScripts('./node_modules/workbox-sw/build/workbox-sw.js')
const staticAssets = [
  './',
  './index.js',
  './styles.css',
  './sweetalert.min.js',
  './audios'
  ];

  const wb = new WorkboxSW()
  wb.precache(staticAssets)