// this is the display sketch it will not work without opening the controller sketch!

//set up a place to relay the incoming message down into the draw function.
let mouseData;


function setup() {
  createCanvas(windowWidth,windowHeight)

  //register the service worker with a relative path to the service worker file to the sketch.js file
  registerServiceWorker('../service-worker.js')

  //only listening to messages sent from other clients (it ignores itself.)
  listenMessage(function(incomingData){

    //the incoming data has 2 keys, clinet and message
    //client is the id# of the specific clinet that sent the message eg. 955a9982-7a12-4dae-babc-18789401f141
    //message is the message that the client sent with sendMessage().
    // console.log(incomingData.message);
    // console.log(incomingData.client);

    //store the incoming data in the mouseData global variable.
    mouseData = incomingData.message

  })


}

function draw(){
  background(0,10)

  //prevent rendering before any data has arrived. Only if somthing exists in the render variable, do the following.
  if(mouseData){

    //these keys are the same as we defined in the drawingdata object when we sent the message.
    fill(255)
    noStroke()
    ellipse(mouseData.x,mouseData.y,100,100)

  }

}
