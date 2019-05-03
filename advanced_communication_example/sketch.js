//this is the controller sketch, it just takes input and sends it to the secondsketch.js

//make some empty data where we will store stuff before sending
let packedData = {}


function setup() {
  createCanvas(windowWidth,windowHeight)

  //register the service worker with a relative path to the service worker file to the sketch.js file
  registerServiceWorker('../service-worker.js')


  input = createInput();
  input.position(100, 300);

  button = createButton('submit');
  button.position(input.x + input.width, 300);
  button.mousePressed(greet);

  greeting = createElement('p', 'what text should we relay to the display sketch?');
  greeting.position(100, 250);

}

function greet(){
  //add the greeting to the packedData which will be sent every frame.
  packedData.greeting = input.value();

  //send the message
  sendMessage(packedData)


}

function draw(){
  background(100)

  //try moving this and the sendMessage to the draw() loop!

  //only send if the mouse is pressed
  if(mouseIsPressed){
    //pack up the mouse data into JSON
      packedData.x = mouseX
      packedData.y = mouseY

      //send ot to the secondsketch.js
      // you want to do this at the right time, your most frequent sending function is likely best
      //or just put it in draw so it's sending all the time for constant communication, although this can cause issues.
      sendMessage(packedData)

  }



}
