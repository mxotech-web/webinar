'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2f18e6129ff1b7200e9f0a99d731d876",
"index.html": "2edcf2c2fac8d02f28c2f011083401c4",
"/": "2edcf2c2fac8d02f28c2f011083401c4",
"main.dart.js": "e899f17fe869137af949cb00a4cf8a18",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c3e137748ca80548368f6075fcb04370",
".git/config": "7c40f7a2317654ce00f35460b8c15a77",
".git/objects/57/b4f86714a239a4f619fdabc0f21abca2c0fc61": "4e7fd14289e75d7142e147f62bb17722",
".git/objects/9d/e06425fbf941c35f7c51ad0d4a527bbd3f3633": "b3edc94516803f18610c46a87f88e724",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/c9/8e371f8d6d947d63f8b4c7e2305045893439e0": "a7ed82432634fb4d2a3e0f02e0996d84",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fe/7ba2e68dbc1a04a314c8d17f8656f32be06a56": "ec2a1524bebf1b8d3a724728ebae77b3",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/eba1facccf0018acc7a67479d2020361eee1ec": "8048096686305d5f32136c8665a1dbdd",
".git/objects/8a/65652da2d2e19f1cf6ecce1662c149364d0d35": "d4c86f43dccab943f06b1ecfc13b563a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/1f1d6dcd06c5b4dcb86b87bec6e2b3059b3343": "2cd3eef0503eb6f511cb00d5ebf03fee",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/5f99607b9966e134dc3f900054a04d1995351d": "3ed14d9a2064b98bf6ae1e0d98ded594",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5e/44d5d9b593aa2522f74173c1d894c0941908d3": "6969417de461a60bb3b5ad571824626b",
".git/objects/6c/f94a5c08bf17cd884fa59fd90db0fef8575c90": "18573621f278c5e5b6185b2120267b08",
".git/objects/39/cda4bccffc49c91309b7eda059de2385df46bb": "85679606ab7c561b4d3b640390a3f4d0",
".git/objects/ba/d82127128ddacf1bcb471076e5d5f6d3cf0ab0": "76a04f0715d2440be7600c8b4bba5006",
".git/objects/aa/735f3a0c0c3d717a0e6acd3ab0ff2c8cf3ae24": "8cc826914047d172bf68a412abf71e4d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/8d/0889cc9847e268fc3626432f46623df9f627a6": "c488f790f3140a832a30f94cbda1c4ae",
".git/objects/12/8484bd62ded7c41b3528a0387ed720817c32fc": "70e6fa44f7f7ba2bc0af6dc6bbbf088d",
".git/objects/1c/31f626d38d93fca6b608f17710dbb66a61c540": "cffffd913b692dd9a201318adfdc03c3",
".git/objects/49/ece2b1940d7e223dead37ec25c3515afe4527e": "48bc56a75f161496cd5c19aa2a039fa7",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/25/0f042cb99f787dfa3e960123ff5ad286395410": "70935af209bed948f7d9d09ac700f8a7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c9507cbd1c20b544bfca7137935eb23",
".git/logs/refs/heads/main": "bd93dfa3f948c2e86fa4451930b75cd3",
".git/logs/refs/remotes/origin/main": "7dd331e07b82750c0e9a82bcc6e3fd90",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "4681f0df53c44d242f157fa59c44160e",
".git/refs/remotes/origin/main": "4681f0df53c44d242f157fa59c44160e",
".git/index": "5f2e6716ddb6861a3739bf0769845979",
".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/FETCH_HEAD": "4444f5653dc954188db1d12100702dc3",
"assets/AssetManifest.json": "240e0d1829f08b38c99f54bca13f2d54",
"assets/NOTICES": "5b981a5266584030736d7d17c24f2e51",
"assets/FontManifest.json": "1dcd982abeb498bd8dd5e379c5e29deb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/design.png": "2ad4ec20a4a7f0c0c6adbb8eb44cb00a",
"assets/assets/kherel.jpeg": "99f9dd8177579d04c587c4feb8a175a3",
"assets/assets/background.jpg": "4c1fba91f21e05b2350e9e55d0fa6f93",
"assets/assets/fonts/FunIcons.ttf": "206fca859bf446735dd95ddc1fcfc826"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
