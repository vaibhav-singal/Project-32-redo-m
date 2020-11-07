const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var stand1,stand2;
var block1;
var block2;
var block3;
var block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13, block14, block15, block16;
var block24, block25, block26, block27, block28, block29, block30, block31, block32;
var ball;
var rope;
var score = 0;
var bg = "bg1.png";


function setup() {
    createCanvas(1500,800);

    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(650,500,300,10);
	stand2 = new Ground(1000,325,300,10);

    
    block1 = new Box(550,475,30,50);
	block2 = new Box(580,475,30,50);
	block3 = new Box(610,475,30,50);
	block4 = new Box(640,475,30,50);
	block5 = new Box(670,475,30,50);
    block6 = new Box(700,475,30,50);
    block7 = new Box(730,475,30,50);
    block8 = new Box(580,425,30,50);
	block9 = new Box(610,425,30,50);
	block10 = new Box(640,425,30,50);
	block11 = new Box(670,425,30,50);
	block12 = new Box(700,425,30,50);
	block13 = new Box(610,375,30,50);
	block14 = new Box(640,375,30,50);
	block15 = new Box(670,375,30,50);
	block16 = new Box(640,325,30,50);


    block24 = new Box(930,300,30,50);
    block25 = new Box(960,300,30,50);
    block26 = new Box(990,300,30,50);
    block27 = new Box(1020,300,30,50);
    block28 = new Box(1050,300,30,50);
    block29 = new Box(960,250,30,50);
    block30 = new Box(990,250,30,50);
    block31 = new Box(1020,250,30,50);  
  block32 = new Box(990,190,30,50);

    ball = new Ball(150,400,60,60);

    rope = new Rope(ball.body,{x:150, y:400});


    // Engine.update();
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    text("Score: "+score,1300,100);

    stand1.display();
  
  stand2.display();
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();

 
  block24.display();
  block24.score();
  block25.display();
  block25.score();
  block26.display();
  block26.score();
  block27.display();
  block27.score();
  block28.display();
  block28.score();
  block29.display();
  block29.score();
  block30.display();
  block30.score();
  block31.display();
  block31.score();
  block32.display();
  block32.score();
    ball.display();
    
    rope.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    rope.fly();
}

function keyPressed() {

  if(keyCode == 32){
      rope.attach(ball.body);
  }

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
