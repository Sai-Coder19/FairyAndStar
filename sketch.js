const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;


var engine,world;
var fairyIMG,fairySprite;
var starIMG,starSprite,starBody;
var starnightIMG;

function preload(){


   //preload the images here
   starnightIMG=loadImage("images/starnight.png")
   fairyIMG=loadAnimation("images/fairy1.png","images/fairy2.png")
   starIMG=loadImage("images/star.png")
}
function setup() {
	createCanvas(800, 750);
  engine=Engine.create();
  world=engine.world;
 
  fairySprite=createSprite(130,520,10,10)
  fairySprite.addAnimation("fairyFlying",fairyIMG);
  fairySprite.scale=0.25

  starSprite=createSprite(750,300,10,10)
  starSprite.addImage(starIMG)
  starSprite.scale=0.2
  starBody=Bodies.circle(650,30,5,{restitiution:0.5,isStatic:true})

  World.add(world,starBody)

Engine.run(engine);
}


function draw() {
  background(starnightIMG);
  starSprite.x=starBody.position.x
  starSprite.y=starBody.position.y

  if (starSprite.y>470&&starBody.position>470){
    Matter.Body.setStatic(starBody,true)
  }
  drawSprites();
}

function keyPressed(){
	if (keyCode===LEFT_ARROW){
	 fairySprite.x=fairySprite.x-20;
  }

 if (keyCode===RIGHT_ARROW){
		fairySprite.x=fairySprite.x+20;
	}

 if (keyCode===DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
	}
}
