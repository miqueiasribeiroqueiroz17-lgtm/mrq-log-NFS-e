// Service worker mínimo, só pra habilitar a instalação do app (PWA).
self.addEventListener("install", function(event){
  self.skipWaiting();
});

self.addEventListener("activate", function(event){
  self.clients.claim();
});

self.addEventListener("fetch", function(event){
  // Sem cache especial: sempre busca da rede.
  event.respondWith(fetch(event.request));
});
