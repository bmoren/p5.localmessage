// a basic example
// Open the JS console and your sketch in at least 2 tabs, then click on one page and look in the console of the other.

function setup() {

  //register the service worker with a relative path to the service worker file to the sketch.js file
  registerServiceWorker('../service-worker.js')

  //only listening to messages sent from other clients (it ignores itself.)
  listenMessage(function(incomingData){

    //the incoming data has 2 keys, clinet and message
    //client is the id# of the specific clinet that sent the message eg. 955a9982-7a12-4dae-babc-18789401f141
    //message is the message that the client sent with sendMessage().
    console.log(incomingData.client, incomingData.message)

  })


}

function mouseClicked(){

  //this will only go to the other clients that are connected (not itself).
  sendMessage('hello world! with a unique message: ' + random(100))

  //OR TRY THIS WITH SOME JSON!
  // let person = {
  //   "name": "amy",
  //   "height": "5.75",
  //   "skills": "programming"
  // }
  //
  // sendMessage(person)

}
