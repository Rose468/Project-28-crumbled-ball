
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball,ground,piece1,piece2,piece3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paper(300,200,60);
	ground = new Ground(600,height,2000,20)
    piece1 = new Bin(900,320,160,20);
	piece2 = new Bin(940,320,20,120);
	piece3 = new Bin(820,319,20,120);
  
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background("green");
  ground.display();
  paperball.display();
 piece1.display();
 piece2.display();
 piece3.display();
  
 





  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.position,{x:160,y:-130})
	}
}

