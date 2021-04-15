
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone, launchObj;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	
	stone = new Stone(165,480);
	launchObj = new Launcher(stone.body,{x:165,y:480});
	
	
  
	  Engine.run(engine);
	
}


function draw() {
	
	background("lightblue");
	
	
	stone.display();
	launchObj.display();
	

	
}





