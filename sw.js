/* Electrical Field Toolkit - offline cache (stale-while-revalidate) */
var CACHE='elec-toolkit-v4';
var ASSETS=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET')return;
  e.respondWith(caches.open(CACHE).then(function(c){
    return c.match(e.request,{ignoreSearch:true}).then(function(cached){
      var fresh=fetch(e.request).then(function(resp){
        if(resp&&resp.status===200&&e.request.url.indexOf('http')===0)c.put(e.request,resp.clone());
        return resp;
      }).catch(function(){return cached;});
      return cached||fresh;
    });
  }));
});
