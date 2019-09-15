var fixedRect,movingRect;
var gameobj1,gameobj2,gameobj3,gameobj4;

function setup() {
  createCanvas(1200,800);
 
 fixedRect =  createSprite(200, 200, 50, 80);
 movingRect = createSprite(400,200,80,30);
 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";

 gameobj1 = createSprite(100,100,50,50);
 gameobj2 = createSprite(200,100,50,50);
 gameobj3 = createSprite(300,100,50,50);
 gameobj4 = createSprite(400,100,50,50);
 gameobj1.shapeColor = "green";
 gameobj2.shapeColor = "green";
 gameobj3.shapeColor = "green";
 gameobj4.shapeColor = "green";

}

function draw() {
  background(0,0,0);
  bounceOff(movingRect,fixedRect);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if (isTouching(movingRect,gameobj1,gameobj2,gameobj3,gameobj4)){

  movingRect.shapeColor = "blue";
   fixedRect.shapeColor = "blue";
    gameobj1.shapeColor = "blue";
    gameobj2.shapeColor = "blue";
    gameobj3.shapeColor = "blue";
    gameobj4.shapeColor = "blue";
  }
   else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  gameobj1.shapeColor = "green";
  gameobj2.shapeColor = "green";
  gameobj3.shapeColor = "green";
  gameobj4.shapeColor = "green";
  
}

  drawSprites();
}



