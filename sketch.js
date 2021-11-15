x=50;

function preload(){
  bottleimg=loadImage("images/Bottle.png")
  tableimg=loadImage("images/table.png")
  wallimg=loadImage("images/room background.jpg")
  aircoolerimg=loadImage("images/air cooler.jpg")
  bookshelfimg=loadImage("images/book shelf.png")
  chairimg=loadImage("images/chair.png")
  cupboardimg=loadImage("images/cupboard.png")
  tablelampimg=loadImage("images/table lamp.png")
  tableimg=loadImage("images/table.png")
}

function setup() {
  createCanvas(1200,600);
  

  bottle= createSprite(20,200,20,30);
  bottle.addImage(bottleimg)
  bottle.scale=0.1
  table= createSprite(50,250,100,20);
  angle=0
  obstacleGroup=new Group()
  
  for (x=50; x<=3000; x=x+250){
    y=Math.round(random(200,500))
    obstacle=createSprite(x,y,160,20)
    obstacleGroup.add(obstacle)
    
  }
  
}

function draw() {
  background(0);
  image(wallimg,0,0,width,height)
  if(wallimg.x<0){
    image(wallimg,0,0,width,height)
  }
  bottle.velocityY=bottle.velocityY + 0.5;
  if(bottle.isTouching(table)||bottle.isTouching(obstacleGroup)){
    bottle.velocityX= 0
    bottle.rotation=angle;
    bottle.rotationSpeed=0;
  }
  bottle.collide(table);
  bottle.collide(obstacleGroup)
  if(keyDown('up')){
    bottle.velocityY= -10
    bottle.velocityX= 3
    bottle.rotation=angle;
    bottle.rotationSpeed=15;
  }  
  
  bottle.collide(obstacleGroup)
  camera.x=bottle.x
  camera.y=height/2
  drawSprites();
}

