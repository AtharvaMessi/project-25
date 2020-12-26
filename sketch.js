
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(400,690,800,20);
   paper = new Paper(200,100,30);
   dustbin1 = new Dustbin(width/2,height-55,200,20)
   dustbin2 = new Dustbin(width/2-100,height-90,20,100)
   dustbin3 = new Dustbin(width/2+100,height-90,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();
  paper.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW) {

      Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

      Matter.Body.setStatic(circleBody,false);

    }


}



