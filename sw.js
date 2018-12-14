importScripts('./node_modules/workbox-sw/controllers/WorkboxSW.mjs')
const staticAssets = [
  './',
  './index.js',
  './styles.css',
  './sweetalert.min.js',
  './audios'
  ];

  const wb = new WorkboxSW()
  wb.precache(staticAssets)