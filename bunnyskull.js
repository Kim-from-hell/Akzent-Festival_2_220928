let bunny;
let skull;
let createColorPicker;
let font;

let angle=0;

function preload(){
  bunny= loadModel("bunny.obj");
  skull= loadModel("skull.obj");
  clock= loadModel("clock.obj")
  font = loadFont('AgrandirWideLight.otf');

}


function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  textFont(font);
  textSize(60);
  textAlign(CENTER, LEFT);
}



function draw() {

  let x = -(mouseX-windowWidth/2);
  let y= -(mouseY-windowHeight/2);

  let sinWave =sin(angle);
  let z = sinWave*400;

 //orbitControl();
  background(255,0,0);
  noStroke();


push();
translate(-20,-((windowHeight/2)-700),z)
fill(255,255);
rotateY(frameCount*0.02);
text('One pill makes you larger,', x, y);
pop();


  push();
  translate(0,windowHeight/2,z)
  fill(255,255);
  rotateY(frameCount*0.01);
  text('And one pill makes you small...', x, y);
  pop()



ambientMaterial(255,255,255);

push();
translate(0,-((windowHeight/4)-50),x,y);
directionalLight(0,0,255,x,y,0)
rotateX(frameCount*0.01);
rotateY(frameCount *0.01);
rotateZ(frameCount*0.001);
scale(2000);
model(bunny);
pop();

push();
directionalLight(255,0,0,x,y,0)
pointLight(255, 0, 0, windowWidth/2, 0,0,)
translate(y,x);
rotateX(frameCount*0.0001);
rotateY(frameCount *0.01);
rotateZ(frameCount *0.01);
scale(40);
model(skull);
pop();

angle+=0.001;

}
