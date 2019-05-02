// Open the JS console and your sketch in at least 2 tabs, then click on one page and look in the console & browser window of the other.

//set up a place to relay the incoming message down into the draw function.
let render;


function setup() {
  createCanvas(windowWidth,windowHeight)

  //register the service worker with a relative path to the service worker file to the sketch.js file
  registerServiceWorker('../service-worker.js')

  //only listening to messages sent from other clients (it ignores itself.)
  listenMessage(function(incomingData){

    //the incoming data has 2 keys, clinet and message
    //client is the id# of the specific clinet that sent the message eg. 955a9982-7a12-4dae-babc-18789401f141
    //message is the message that the client sent with sendMessage().
    console.log(incomingData.message);
    console.log(incomingData.client);


    //store the incoming data in the render global variable.
    render = incomingData.message

  })


}

function draw(){

  //prevent rendering before any data has arrived. Only if somthing exists in the render variable, do the following.
  if(render){

    //these keys are the same as we defined in the drawingdata object when we sent the message.
    fill(render.r, render.g, render.b)
    ellipse(render.x,render.y,render.size,render.size)

  }

}



function mouseClicked(){

  //this will only go to the other clients that are connected (not itself).

  //try moving this and the sendMessage to the draw() loop!
  let drawingdata = {
    "x": random(500),
    "y": random(500),
    "size": random(200),
    //you cant send a p5 color object over the message, so i'll send them independently
    "r": random(255),
    "g": random(255),
    "b": random(255)
  }

  sendMessage(drawingdata)

}
