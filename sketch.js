var movingRect, fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4; 
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(800, 400, 80, 30);
  fixedRect.shapeColor = "gold";
  movingRect.shapeColor = "orange";
  movingRect.velocityX = -5;
  fixedRect.velocityX = 5;
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);

  gameObject1.shapeColor = "brown";
  gameObject2.shapeColor = "silver";
  gameObject3.shapeColor = "magenta";
  gameObject4.shapeColor = "lime";
}

function draw() {
  background(255,255,255);
  gameObject3.x = World.mouseX;
  gameObject3.y = World.mouseY;

  if (isTouching(gameObject1,gameObject3)) {
  gameObject1.shapeColor = "green";
  gameObject3.shapeColor = "red";
  }
  else {
  gameObject1.shapeColor = "blue";
  gameObject3.shapeColor = "purple";
  }
  bounceOff(fixedRect,movingRect);
  drawSprites();
}