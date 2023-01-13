'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0fde2dcebb03acef2b683fd81b2f1f59",
".git/config": "b36d25a43ba61346f942e4c9d209c838",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2fec0f1025333305b26b36a2aaa7cf80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "32bffaca985b19cecb2c4147ab460abc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91ddc1d6b307d7243e7a2c3df4546b37",
".git/logs/refs/heads/main": "457a4403320f3c38d976a981951d2278",
".git/logs/refs/remotes/origin/main": "e0d972da850a4374c1fcb71dfd32c6b1",
".git/objects/0c/9648b3390db4eee46da3323506615493198d55": "7eafae95dc72dbc46d82699eb2821675",
".git/objects/0e/e602677973d292699f0739de5a001ad0dd2498": "54b84dba1778e3f05fac49f3544db1ac",
".git/objects/11/e5b756a3737db134fb773ca6e694283658ca6e": "d4ec5efcb2546d16ddddae572de58dd2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2e/400d9f4a19eed3e46f4d47f0aafed471b823cc": "c563a41b7fe215f3637a3a887ae90152",
".git/objects/30/dc84cf353d9279df93990d41d1aec701881a81": "5a5688b000794d46b5ed1333e5f51d15",
".git/objects/32/b7b6c9a6678d3dc6a739f522f220f7b304cc23": "2bd888e7e6011c52301cc6aa42ae7f9d",
".git/objects/39/c2f85d336b3ba316d8891050a226e251cf262a": "de769e01bf1ac94c4f0f982c8807133f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/83148730a785a96dde9a8e975a499056e2b5bb": "da1e287b0e7f61d3c77948a650ab9c88",
".git/objects/41/87034843d74f6ac2a97c6f2a1a19e0f6fea7b3": "c43d9b2d2d47f8622262441695197393",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/55/6722d6d98905dcc9dc352be8ed4361eb28dd30": "dfa5a85d06dd2f8fc7b1da677d36f661",
".git/objects/59/2c749762c6afadd7a17939fcedc11983175f70": "08acae81b247844e61bd04503a347cbe",
".git/objects/62/faf4dde5d44992b8612e4ba43c97031336784c": "2e5ed13e34afdae2de9046b32086cfe0",
".git/objects/65/86d9eabaf29c44a0aff928bcd67b013b7e0711": "dfa7044c2efd578b949749b57f058e8b",
".git/objects/65/8eb6e0dbefd398fdd888fa860460311b0dcfca": "fdee201db3c2ec2ce05912d503363986",
".git/objects/72/ecba9ef87c9989e56adb2a17bbfd3f51556489": "c51860d2d4c8ee5a9acdb86fc0dd4b83",
".git/objects/74/033e01580bbc33c83dbef2cd2e9f53ff3e3b01": "88be0089309483873a4090b391d79a47",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/6e8d765a50936d54c9dfb22476fd64eb588b50": "19ac8958f5932e0b5f54c5a3c87a76f3",
".git/objects/80/2335257b37372c3b77cb5b10df98f3eb9b6c0b": "c3149480f169991a05483cbd30f0c8fe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/905b00990df6efcd433767b20f8e24ddfdb689": "e2e10c4916de6365d5d743101972a007",
".git/objects/93/9ffd97bbad229d58a69ed1ad85047004e03f5b": "9477ec0370b974b359a8fc2afff8e82e",
".git/objects/93/fbb3c98a6944a3d8b85bc4366ac07810f92b0e": "18b09b84e43351feb8aa81cc9b460bfb",
".git/objects/94/a3b7b1f70fb8f0665db5da1f12b28dfa795857": "7cbeab53dccee82a10a4451281eb2bfc",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/ca1af5a13a20543a862db367dc7d13cc02529b": "89538d283bbbbb036937a3916ccb4dcd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/ca42b350d43a45574d3bd46cec4245af7711db": "b794cacab89bd748e1f87708e3325859",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/bef7aada3a7e46328ec12854ffff8ce16b8676": "35630bdefb0a6ef13edfebca823370a3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/475c93f07330e21c2094ecc1e56a516389ca48": "fa68a2a16dba5b0b77ec77e999c5facb",
".git/objects/c3/53c04c1ff8dcd76791330427ec746bbb534838": "feb5488139cdafa70799b24bf80e9504",
".git/objects/c7/42406510eba5cf230864f9f26982b5b587b5ab": "217dc71a33bce34f7052f20f6fc129df",
".git/objects/cb/7d0aeed33c0bf8cd8c3bd300cb39d2be896fbc": "8e72d518ad87fc8c5878ff4d5db052ff",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/a9c34aada135fe1669c6bde8dde7f5e3eafa28": "90a4c0554a102644759618ac9d5919a7",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/17786c8a14872e58e67615313edcd012f0ab86": "3e0e437c2d1831d69716ad7597bf5958",
".git/objects/e3/e39cc1aadbf2378994e5fc345b0662f0bec691": "553bee73f1e37d0996452babd5e28e4a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/43bc573bfa56e53c84d416edb1059dd49c570c": "fcbeb890b6403330f7f282997371b281",
".git/objects/ee/3f3dc1f0b9bed3c21381fc802f6f1a357602ba": "0219f885e5d3dacfd33d1123cb0091fe",
".git/objects/f3/ed6d6b58009bc3f0ee94c885b1569adb3c826d": "f6b9cfddcba20b68a24f2fda6570ccc4",
".git/objects/f5/c59e49ccaf8668f4a19d0903308f23f7606ad3": "7c4b73aa46ac15badb47222e6334e4cd",
".git/objects/fc/d28f5b1645a816b2e8fbd30be20fef54f640c7": "5875c2489f560aabaa2cf6c3e14d20a6",
".git/refs/heads/main": "b624243a4a96b30a9a33100519440b31",
".git/refs/remotes/origin/main": "b624243a4a96b30a9a33100519440b31",
"assets/AssetManifest.json": "c235bb507afc7aca7a29f687b8a1b56e",
"assets/assets/icons/cross.svg": "7898f5c9404878b97d7229e74acd06ec",
"assets/assets/icons/facebook.svg": "a0d54e7c84c4a100c7460b0b250c497a",
"assets/assets/icons/google.svg": "fd5488da1f69d97a6cceab0e97b5f455",
"assets/assets/icons/instagram.svg": "e7449d3dd1eea545fdefecfad43f7223",
"assets/assets/icons/location.svg": "7992b5e9db89b8add297a42e46a7e213",
"assets/assets/icons/lock.svg": "d9f45a5bf9fa968d92d04247a9bfaec7",
"assets/assets/icons/phone.svg": "273bf81e10494633c0a6e1eb0aefdb06",
"assets/assets/icons/search.svg": "fd8ca78e886ea36183af451317e6f8e8",
"assets/assets/icons/settings-sliders-thin.svg": "91a08b23deabab5aa96c52b5df642081",
"assets/assets/icons/share.svg": "8b9cbad24c422e088fc8f79dc0946c08",
"assets/assets/icons/ticket.svg": "daf5ebc627952b8600393db6c3abad2b",
"assets/assets/images/bg-mobile.jpg": "15a4b28350f3656eed8f0e23ac2948e4",
"assets/assets/images/bg.jpg": "24f6d94951a4a493428f2ec2a52e4337",
"assets/assets/images/man-driving-electric-scooter-mobile.jpg": "cce93a4ccb4b91e70a53d2ab5c052260",
"assets/assets/images/man-driving-electric-scooter.jpg": "aea8080e5b7fe42a18fd5b330d76208b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0738e6e6e32cb37d8cab68662a9a0df9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "2f4d67614e19a3945612a16d9c1ba422",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "285f6eeaea3d0ad9a4661cbdab569f73",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "22d1ae3979c2631246e31f35f44c3147",
"icons/Icon-512.png": "285f6eeaea3d0ad9a4661cbdab569f73",
"index.html": "802920ecedd49541303d72d005694407",
"/": "802920ecedd49541303d72d005694407",
"main.dart.js": "ab85ae323f12624bddb4fb1abfa9cceb",
"manifest.json": "b82a62e0f94e256a4fde8fdb9408abab",
"version.json": "8d931dbc0c8f3c4709960e7dbec58732"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
