let bunny;
let skull;
let createColorPicker;
let font;

let angle=0;

function preload(){
  bunny= loadModel("bunny.obj");
  skull= loadModel("skull.obj");
  clock= loadModel("clock.obj")
  font = loadFont('GTHaptik.otf');

}


function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  //textFont(font);
  //textSize(100);
  //textAlign(CENTER, CENTER);
}



function draw() {

    let sinWave =sin(angle);
    let z = sinWave*400;

 orbitControl();
  background(255,0,0);
  noStroke();

//push();
//translate(0,-((windowHeight/2)-700),z)
//fill(255,255);
//text('between', 0, 0);
//pop();

let x = -(mouseX-windowWidth/2);
let y= -(mouseY-windowHeight/2);


ambientMaterial(255,255,255);

push();
translate(0,-((windowHeight/2)-100),z);
directionalLight(0,0,255,x,y,0)
rotateX(frameCount*0.001);
rotateY(frameCount *0.01);
rotateZ(frameCount*0.01);
scale(2000);
model(bunny);
pop();

push();
directionalLight(255,0,0,x,y,0)
pointLight(255, 0, 0, windowWidth/2, 0, 0,)
translate(-((windowWidth/2)-200),z);
rotateX(frameCount*0.01);
rotateY(frameCount *0.01);
rotateZ(frameCount *0.01);
scale(30);
model(skull);
pop();

push();
directionalLight(0,255,255,x,y,0)
pointLight(0, 255, 255, windowWidth/2, 0, 0,)
translate((windowWidth/2)-200,z);
rotateX(frameCount*0.01);
rotateY(frameCount*0.001);
rotateZ(frameCount*0.001);
scale(30);
model(clock);
//sphere(4);
pop();

angle+=0.001;

}
