
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	stone = new Stone(10,10);
	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	slingshot = new SlingShot(stone.body,{x:240,y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();

  groundObject.display();
  stone.display();
  slingshot.display();
}
function mouseDragged(){

    Matter.body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}