const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;


	ground = new Ground(600,height, 1200, 20);

	dustbin1 = new Dustbin(800, 1000, 200, 20);
	dustbin2 = new Dustbin(700, 950, 100, 20);
	dustbin2 = new Dustbin(700, 950, 100, 20);
	
    paper1 = new Paper(200, 580, 20);

	Engine.run(engine);
  
}
function keyPressed() {
	if(keykeyCode === UP_ARROW) {
		matter.Body.applyForce(paperObject.body, paperObject.body,position,{x:85,y:-85});
	}
}


function draw() {

  background(255, 255, 0);
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dunstin3.display();
  drawSprites();
 
}