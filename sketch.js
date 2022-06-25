var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg,bombImg,coinImg,energyDrinkImg;
var score;
var i;


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png")
  

}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//crear sprite de niño corriendo
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

  

leftBoundary=createSprite(0,0,100,800);

 //leftBoundary.invisible = false;
leftBoundary.visible = true;
 //leftBoundary.invisible = true;
 //leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
score = 0;
}

function draw() {
  background(0);
  
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo


  if(path.y > 400 ){
    path.y = height/2;
  }

if(path.y > 400 ){
   
  path.y = height/2;
  }

if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){path.y = height/2;}
bombs();
coins();
bebidasenergeticas();
  
  drawSprites();
}

function bombs(){
  if (frameCount %90 === 0){
    bomb = createSprite(100,18,20,20);
 bomb.x  = Math.round(random(20,350));
bomb.addImage(bombImg);
bomb.velocityY = 4;
bomb.scale = .09;


bomb.lifetime = 134;

boy.depth = bomb.depth;
bomb.depth = bomb.depth +1;


  }
}

function coins(){
  if (frameCount %50 === 0){
    coin = createSprite(180,1,10,10);
    coin.x = Math.round(random(100,320));
    coin.addImage(coinImg);
    coin.velocityY = 4;
coin.scale = .5;

coin.depth = boy.depth;
boy.depth = boy.depth +6;
  }
}
function bebidasenergeticas(){
if (frameCount %420 ===0){
  refresco = createSprite(240,1,10,10);
  refresco.x = Math.round(random(100,320));
  refresco.addImage(energyDrinkImg);
  refresco.velocityY = 4;
  refresco.scale = .09;
}

}