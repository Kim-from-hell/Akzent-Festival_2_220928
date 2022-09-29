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
  

  for (let i = 0; i < 50;i+=1.5){
  
  //pointLight(0, 0, 255, -windowWidth/1, 1, 1,)
  //pointLight(255, 0, 0, windowWidth/1, 1, 1,)

  ambientMaterial(255,0,255);

  let x = -(mouseX-windowWidth/2);
  let y= -(mouseY-windowHeight/2);

  noFill();
  rotateX(frameCount* 0.0002);
  rotateY(frameCount* 0.0002);
  rotateZ(frameCount* 0.0001);
  ellipse(10, 10,300,300);
  rotateZ(frameCount* 0.0001);
  //ellipse(x, y,y,x);


  push();
  noFill();
  rotateX(frameCount* 0.0002);
  rotateY(frameCount* 0.002);
  //rotateZ(frameCount* 0.0001);
  ellipse(10, 10,400,400);
  //ellipse(x, y,y,x);
  pop();


  push();
  //fill(0,0,1);
  rotateX(frameCount* 0.002);
  //rotateY(frameCount* 0.002);
  //rotateZ(frameCount* 0.0001);
  ellipse(10, 10,400,400);
  //ellipse(x, y,y,x);
  pop();

  
  noFill();
  rotateX(frameCount* 0.0002);
  rotateY(frameCount* 0.0002);
  rotateZ(frameCount* 0.0001);
  ellipse(10, 10,100,100);
  //ellipse(x, y,y,x);
  pop();

  }
  
 
}
