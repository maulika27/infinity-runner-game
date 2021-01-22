var fishImg, wormImg;
var backgroundImg;


var foodGroup 





function preload(){
 
  
  
  fishImg = loadImage("fish.png")
  
  wormImg = loadImage("worm.jpg")
  backgroungImg = loadImage("sea floor.jpg")
}


function setup() {
  canvas = createCanvas(displayWidth - 30, displayHeight-20);
  
 
  
  fish = createSprite(10, 100, 50, 50)
  fish.addImage("FishImg", fishImg);
  fish.scale = 0.15
  
  

  

  foodGroup = createGroup ();

  
 /* banana = createSprite(550, 100, 20, 20)
  banana.addImage(bananaImage)
  banana.add(bananaGroup);
  bananaGroup.scale = 0.2;
  bananaGroup.velocityX = -2
  
  stone = createSprite(550, 250, 20, 20)
  stone.addImgage(stoneImage);
  stone.add(obstaclesGroup);
  obstaclesGroup.scale = 0.2;
  obstaclesGroup.velocityX = -2
*/
  
  
}
 

function draw(){
 background(backgroungImg); 

  
  
  if (background.x < 0){
      background.x = background.width/2;
}



for (var i = 0; i<foodGroup.length; i++){
  if(foodGroup.get(i).isTouching(fish)){
    foodGroup.get(i).destroy();
    
  }
}

 
camera.position.y = displayHeight/2;
camera.position.x = fish.x


  fish.velocity.x = 5





spawnWorm();

      
drawSprites();


  
  
}

function spawnWorm(){
 if(frameCount % 60 === 0 ){
    var worm = createSprite(displayWidth, 50, 50,50);
    worm.addImage(wormImg);
    
    worm.scale = 0.1;
    worm.lifetime = 200;
    foodGroup.add(worm);
  }
}

