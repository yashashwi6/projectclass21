
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball;
var groundObj, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;
   
	var boptions={
		isStatic: false,
		restitution:0.3,
		friction: 0,
		density:1.2
		
	}
	ball = Bodies.circle(200,200,40,boptions);
	World.add(world,ball)
   console.log(ball)
	
   groundObj =new Ground(width/2,670,width,20)
   leftSide =new Ground(1100,600,40,120)
   rightSide =new Ground(900,600,40,120)
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  
  ellipse(ball.position.x,ball.position.y,40,40)

  groundObj.show()
  leftSide.show()
  rightSide.show()
  Engine.update(engine);
  
  
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		 
		Matter.Body.applyForce(ball,ball.position,{x:170,y:-200})
	}
}

