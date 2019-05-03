//this is the controller sketch, it just takes input and sends it to the secondsketch.js

function setup() {
  createCanvas(windowWidth,windowHeight)

  //register the service worker with a relative path to the service worker file to the sketch.js file
  registerServiceWorker('../service-worker.js')

}

function draw(){
  background(100)

  //try moving this and the sendMessage to the draw() loop!

  //only send if the mouse is pressed
  if(mouseIsPressed){
    //pack up the mouse data into JSON
    let mouseData = {
      "x": mouseX,
      "y": mouseY
    }

    //send ot to the secondsketch.js
    sendMessage(mouseData)

  }

}
