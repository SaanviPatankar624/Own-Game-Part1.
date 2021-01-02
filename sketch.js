
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var asteroids, asteroids_img1, asteroids_img2;
var back_img, spacecraft_img, spacecraft;

function preload(){
	 
	asteroids_img1 = loadImage("asteroids-2.jpg");
	asteroids_img2 = loadImage("asteroids-3.jpg");
	back_img = loadImage("background-2.jpg");
	spacecraft_img = loadImage("s-3.jpg");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	  
	asteroids = new Asteroids(100, 200, 70);
	asteroids.velocityX = -4;
	asteroids.velocityY = 4;

	spacecraft = new Spacecraft(100, 300, 200);
     
}


function draw() {
  rectMode(CENTER);
  background(back_img);

  Engine.update(engine);
  
  asteroids.display();

  spacecraft.display();



  
}




