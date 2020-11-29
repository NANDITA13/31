const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine, world;
var ground;
var division1;



function setup() {

  createCanvas(800,480);

  engine = Engine.create();
  world = engine.world;

    ground = new Ground(700,240,480,20);
    division1 = new Division (200,245,10,25);
  
}

function draw() {

  background(255,255,255);  

  ground.display();

  division1.display();
 
}