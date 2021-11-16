x=50;
gameState=1
function preload(){
  bottleimg=loadImage("images/Bottle.png")
  wallimg=loadImage("images/room background.jpg")

  tableimg=loadImage("images/table.png")
  aircoolerimg=loadImage("images/air cooler.jpg")
  bookshelfimg=loadImage("images/book shelf.png")
  chairimg=loadImage("images/chair.png")
  cupboardimg=loadImage("images/cupboard.png")
  tablelampimg=loadImage("images/table lamp.png")
  
}

function setup() {
  createCanvas(1200,600);
  bg=createSprite(600,300)
  bg.addImage(wallimg)
  bg.scale=0.2
  bottle= createSprite(20,200,20,30);
  bottle.addImage(bottleimg)
  bottle.scale=0.1
  angle=0

  obstacleGroup=new Group()
  for (x=20; x<=3000; x=x+250){
    y=Math.round(random(200,500))
    obstacle=createSprite(x,y,160,20)
    obstacleGroup.add(obstacle)
    var i=Math.round(random(1,6))
    switch(i){
      case 1: obstacle.addImage(tableimg)
      obstacle.scale=0.04
    
      break;
      case 2: obstacle.addImage(aircoolerimg)
      obstacle.scale=0.03
      break;
      case 3: obstacle.addImage(bookshelfimg)
      obstacle.scale=0.06
      break;
      case 4: obstacle.addImage(chairimg)
      obstacle.scale=0.1
      break;
      case 5: obstacle.addImage(cupboardimg)
      obstacle.scale=0.06
      break;
      case 6: obstacle.addImage(tablelampimg)
      obstacle.scale=0.2
      break;
      default: break;
    }
    //obstacle.y=height-(obstacle.height/2)
    
  }
  
}

function draw() {
  background(0);
  if(gameState===1){
    bottle.velocityY=bottle.velocityY + 0.5;
    if(bottle.isTouching(obstacleGroup)){
      bottle.velocityX= 0
      bottle.rotation=angle;
      bottle.rotationSpeed=0;
    }
  
    bottle.collide(obstacleGroup)
    if(keyDown('up') && bottle.velocityX===0){
      bottle.velocityY= -15
      bottle.velocityX= 4
      bottle.rotation=angle;
      bottle.rotationSpeed=15;
    }  
    
    camera.x=bottle.x
    bg.x=bottle.x
    camera.y=height/2
    
    drawSprites();
    if(bottle.y>580){
      gameState=0
      bottle.velocityX=0
    }
  }
  else if(gameState===0){
    textSize(60)
    textFont('Helvetica');
    fill('yellow')
    text("Game Over", bottle.x-200, 300)
  }
 
 
}

