let myArray= []
let adding = true


  
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  background(255, 255, 255);
  
  frameRate();
}

function draw() {
  background(0);
  
  strokeWeight(1);
  stroke(255)


  let wave= cos(radians(frameCount*6));
  let posx1= (height/2 + wave*300);

  myArray.unshift(posx1);
  

  for (let i = 0; i < 25;i+=1.5){
  
  pointLight(0, 0, 255, -windowWidth/1, 1, 1,)
  pointLight(255, 0, 0, windowWidth/1, 1, 1,)

  ambientMaterial(255,0,255);

  let x = -(mouseX-windowWidth/2);
  let y= -(mouseY-windowHeight/2);

  noFill();
  rotateX(frameCount* 0.002);
  //rotateY(frameCount* 0.002);
  rotateZ(frameCount* 0.001);
  box (50, x, y, 2);

  }
  
 
}
