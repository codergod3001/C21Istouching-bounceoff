
var fixedRect, movingRect;
var Object1, Object2, Object3,Object4;

function setup() {
  createCanvas(1200,800);
 
 
  Object1 = createSprite(800, 400,80,30);
  Object1.shapeColor = "green";

  Object2 = createSprite(100, 100, 50, 50);
  Object2.shapeColor = "green";
  
  Object3 = createSprite(200,200,90,40) ;
  Object3.shapeColor  = "red";
  Object3.velocityY= 3;

Object4= createSprite(200,600,90,40);
Object4.shapeColor="cyan";
Object4.velocityY = -3;
}

function draw() {
  background("white");  
  Object1.x = World.mouseX;
  Object1.y = World.mouseY;

  if(isTouching(Object1, Object2)){
      Object1.shapeColor = "blue";
      Object2.shapeColor = "blue";
  }
  
  else {
    Object1.shapeColor = "green";
   
    Object2.shapeColor = "green";
  }
 
  bounceOff(Object3, Object4);

//bounceOff(movingRect,fixedRect)
  drawSprites();
}
                                                                                                         

