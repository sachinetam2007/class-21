var fixedRect, movingRect;
var myRect1,myRect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  myRect1=createSprite(100,600,70,70);
  myRect1.shapeColor="yellow";
  myRect1.velocityX=3;
  myRect2=createSprite(800,600,70,70);
  myRect2.shapeColor="yellow";
  myRect2.velocityX=-3;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounce1(movingRect,fixedRect);
 bounce1(myRect1,myRect2) ;
  drawSprites();
}

