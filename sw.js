importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

// // self.importScripts('./node_modules/workbox-sw/build/workbox-sw.js')
// self.importScripts('./node_modules/workbox-sw/controllers/WorkboxSW.mjs')
// const staticAssets = [
//   './',
//   './index.js',
//   './styles.css',
//   './sweetalert.min.js',
//   './audios'
//   ];

//   const wb = new WorkboxSW()
//   wb.precache(staticAssets)