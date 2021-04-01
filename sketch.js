const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14;
var block15, block16, block17, block18, block19, block20, block21, block22, block23;

var ground1, ground2, ground3;

var chain;
var hex;
var ball;
var hexImg;

function preload() {

  hexImg = loadImage("hexagon (1).png");

}

function setup() {

  createCanvas(1500,600);
  engine = Engine.create();
  world = engine.world;

  
  strokeWeight(2);

  block1 = new Block(600, 260, 30, 40);
  block2 = new Block(570, 260, 30, 40);
  block3 = new Block(540, 260, 30, 40);
  block4 = new Block(630, 260, 30, 40);
  block5 = new Block(660, 260, 30, 40);


  block6 = new Block(585, 220, 30, 40);
  block7 = new Block(555, 220, 30, 40);
  block8 = new Block(615, 220, 30, 40);
  block9 = new Block(645, 220, 30, 40);


  bolck10 = new Block(600, 170, 30, 40);
  block11 = new Block(570, 180, 30, 40);
  block12 = new Block(630, 180, 30, 40);


  block13 = new Block(600, 140, 30, 40);

  ground1 = new Ground(600,350,200,10);
  ground2 = new Ground(830, 300, 280, 10);
  ground3 = new Ground(750, 600, 1500, 20);


  block14 = new Block(850, 250, 30, 40);
  block15 = new Block(880, 250, 30, 40);
  block16 = new Block(820, 250, 30, 40);
  block17 = new Block(790, 250, 30, 40);
  block18 = new Block(910, 250, 30, 40);


  block19 = new Block(850, 200, 30, 40);
  block20 = new Block(880, 200, 30, 40);
  block21 = new Block(820, 200, 30, 40);
  block22 = new Block(850, 110, 30, 40);
  block23 = new Block(950,200,30,40);

  hex = new Hex(55, 190, 30, 30);

  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  chain = new Chain(this.ball,{x:150, y:160});

}

function draw() {

  background(rgb(1,23,64));

  Engine.update(engine);

  push();
  strokeWeight(4);
  textSize(30);
  text("Drag hexagon to beak the tower", 80, 50);
  pop();

  push();;
  strokeWeight(2.5);
  textSize(25);
  text("All the best", 1200, 500);
  pop();

  fill(rgb(87,137,3));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill(rgb(99,156,3));
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill(rgb(111,175,4));
  bolck10.display();
  block11.display();
  block12.display();

  fill(rgb (124,195,4));
  block13.display();

  fill(rgb(220,35,11));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill(rgb(212,43,4));
  block19.display();
  block20.display();
  block21.display();
  block23.display();

  fill("red");
  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(hexImg, ball.position.x, ball.position.y, 50, 45);

  chain.display();

}
function mouseDragged() {
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  chain.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(hex.body, {x:85, y:200})
		chain.attach(hex.body);
  }
  
}