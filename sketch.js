var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(200, 200, 30, 30)
}

function draw() 
{
  background(30);

  if(keyDown("D")){
    box.position.x = box.position.x + 5
  }
  if(keyDown("A")){
    box.position.x = box.position.x - 5
  }
  if(keyDown("S")){
    box.position.y = box.position.y + 5
  }
  if(keyDown("W")){
    box.position.y = box.position.y - 5
  }



  drawSprites();
}




