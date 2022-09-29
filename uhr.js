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


  let wave= cos(radians(frameCount*1.5));
  let posx1= (height/2 + wave*300);

  myArray.unshift(posx1);
  

  for (let i = 0; i < 50;i+=1){
  
  pointLight(0, 0, 255, -windowWidth/2, 0, 0,)
  pointLight(255, 0, 0, windowWidth/2, 0, 0,)

  ambientMaterial(255,0,255);

  let x = -(mouseX-windowWidth/2);
  let y= -(mouseY-windowHeight/2);

  noFill();
  rotateX(frameCount* 0.001);
  rotateY(frameCount* 0.001);
  rotateZ(frameCount* 0.001);
  box (40, x, y, 0);

  }
  
 
}
