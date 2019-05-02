//Get all the connected clients and forward the message along.
self.addEventListener('message', function(event) {

  var promise = self.clients.matchAll()
  .then(function(clientList) {

//event.source.id contains the ID of the sender of the message.
    var senderID = event.source.id;

    clientList.forEach(function(client) {

      //Skip sending the message to the client that sent it.
      if (client.id === senderID) {
        return;
      }
      client.postMessage({
        client: senderID,
        message: event.data
      });
    });
  });

  //If event.waitUntil is defined, use it to extend the lifetime of the Service Worker.
  if (event.waitUntil) {
    event.waitUntil(promise);
  }
});

//Immediately claim any new clients. This is not needed to send messages, but makes for a better experience since the user does not need to refresh.
self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});


//someday we'll be able to get the local clinet's ID to add on as a feature?
// self.addEventListener('fetch', function(event) {
//   // console.log(event.clientId);
//   event.respondWith(event.clientId)
// ​});
