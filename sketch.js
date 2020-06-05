
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	roof=new Roof(500,100,500,40);

	bob1=new Bob(300,550,100);
	bob2=new Bob(400,550,100);
	bob3=new Bob(500,550,100);
	bob4=new Bob(600,550,100);
	bob5=new Bob(700,550,100);

	rope1=new Rope(bob1.body,roof.body,-200,0);
	rope2=new Rope(bob2.body,roof.body,-100,0);
	rope3=new Rope(bob3.body,roof.body,0,0);
	rope4=new Rope(bob4.body,roof.body,100,0);
	rope5=new Rope(bob5.body,roof.body,200,0);
	
	Engine.run(engine);
  
}


function draw() {

  background("grey")
  Engine.update(engine);
  roof.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
 bob3.display();
  rope3.display();
   bob4.display();
  rope4.display();
   bob5.display();
  rope5.display();


 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-130,y:-175});

  
	}
}

