
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  

}

function setup(){
  createCanvas(600,200)
  trex = createSprite(50,180,20,50);
  //crear sprite de Trex
  trex.addAnimation("running", trex_running); 
  trex.scale = 0.5;
  trex.x = 50;
  ground = createSprite(200,180,400,20);

}

function draw(){
  background("white");
  //hacer que el Trex salte al presionar la barra espaciadora
   if(keyDown("space")) { 
    trex.velocityY = -10; 
  }
    trex.velocityY = trex.velocityY + 0.8 
   //evitar que el Trex caiga
    trex.collide(ground);
  drawSprites();

}
