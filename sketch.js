var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	

	packageSprite=createSprite(400, 80, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(400, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground = createSprite(400,650,800,10);
	ground.shapeColor="White"

	
  
}


function draw() {
  
  background(0);
  if(keyDown("DOWN_ARROW")){
    packageSprite.velocityY=+4
	}
	packageSprite.collide(ground)
  drawSprites();
 
}

