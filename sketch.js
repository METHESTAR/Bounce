
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
var box1;

 
function setup() {
    createCanvas(800, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(400, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
 Ground1=new Ground(400,350,800,10);





}
 
function mousePressed() {
    if (mouseY < 350 ) {
      boxes.push(new Box(mouseX,mouseY,random(10,40),random(20,50)) );



      //  box1=new Box(mouseX,mouseY,random(10,40),random(20,50));
    }

 


}
 
function draw() {
    background(51);
    Engine.update(engine);
   var fVal = gSlider.value();
 Ground1.display();
 
 for(var i=0;i<boxes.length;i++){
 boxes[i].display();

 }






}
 

