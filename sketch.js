//defining the sprites
var path,pathImg,RunnerImg;

function preload(){
  //pre-load image
  pathImage = loadImage(path.png);
  boyImg  = loadAnimation("runner-1.png", "runner-2.png");



  
  }



 


  
}

function setup(){
  createCanvas(400,400);

 // create path
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale =1.2;

  // crate runnerSprite
  boy = createSprite(180,300,30,30);
  boy.addAnimation("Runner-1.png","Runner-2.png");



  
}

function draw() {
  background(0);

  //move when key is pressed
  if(keyIsDown("right_arrow"))
  {
    runner-1.png.velocityX = 2;
  }
  runner-1.png = runner-1.velocityX + 0.5;


  if(keyIsDown("left_arrow"))
  {
    runner-2.png.velocityX = -2; 
  }
  runner-2.png = runner-2.velocityX - 0.5;

  //code to reset the background
   if(path.y > 400){
     path.y = height/2;
   }

   //creating edges
    edges=createEdgeSprites();
    boy.collide(screenLeft);
    boy.collide(edges);
    boy.collide(screenRight);

  



  
  drawSprites();

  



  }

}
