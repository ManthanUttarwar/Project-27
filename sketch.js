
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new Bob(160,500,200/2);
	bobObject2 = new Bob(260,500,200/2);
	bobObject3 = new Bob(360,500,200/2);
	bobObject4 = new Bob(460,500,200/2);
	bobObject5 = new Bob(560,500,200/2);

	roof = new Roof(400,70,720,50);
	
     rope1 = new Rope(bobObject1.body,roof.body,-BobDiametre*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  roof.display();
}



