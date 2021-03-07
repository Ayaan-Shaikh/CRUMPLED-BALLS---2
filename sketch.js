
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var ground;
var crumple;
var dustbin,dustbinImg


function preload()
{
  dustbinImg=loadImage("dustbin.png")
	
}

function setup() {
	createCanvas(1050, 450);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
  dustbin=createSprite(775,325)
  dustbin.scale=0.5
  dustbin.addImage(dustbinImg);
  
  dustbin1=new Dustbin(775,400,110,5);
	dustbin2=new Dustbin(722,335,5,145);
	dustbin3=new Dustbin(830,335,5,145);
	ground  =new Ground(500,420,1100,20);
  paper   =new Papper(100,280,50,50);
   

  

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("#DCDCDC");
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground  .display();
  paper .display();
  keyPressed();
  drawSprites();

}
function keyPressed(){
  if(keyCode===UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-8})
         }
    }
 


