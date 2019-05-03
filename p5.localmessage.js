console.log("%c p5.localmessage Loaded ", "color:yellow; background:black; ");


  //Only setup if service workers are supported.
  //registerServiceWorker
 if (navigator.serviceWorker) {

    p5.prototype.registerServiceWorker =  function(path){
      navigator.serviceWorker.register(path);
    }

  }else{
    console.error('service workers are not supported in this browser, try using chrome!')
  }

  //listenMessage
  p5.prototype.listenMessage =  function(callback){

    //Listen for any messages from the service worker.
    navigator.serviceWorker.addEventListener('message', function(event) {

      // var clientId = event.data.client;
      // var message = event.data.message;

      // A message has been received, now do the callback with it's data.
      if(typeof callback == 'function'){ callback(event.data) };


     });
  }

  // sendMessage('message to send')
  p5.prototype.sendMessage = function(messageToPost){

   //There isn’t always a service worker to send a message to. This can happen when the page is force reloaded.
    if (!navigator.serviceWorker.controller) {
      console.error('no service worker controller, try again, or try another browser')
      return;
    }

    //Send the message to the service worker.
    navigator.serviceWorker.controller.postMessage(messageToPost);

  };
