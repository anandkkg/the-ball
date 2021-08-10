var swich , swich_Img

var win;

var yellow ,yellew_Img
var monkey , monkey_running
var terer ,terer_Img, obstacle,obstacle1, obstacle2, obstacleImage
var wall , wall_Img,obstacleGroup

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var wall_Img1,wall_Img2,wall_Img3wall_Img4,wall_Img5,wall_Img6,wall_Img7,wall_Img8,wall_Img9;
var score, ground
var survivalTime

var star,star_Image;

function preload(){
  
  wall_Img=loadImage("briks1.png");
  wall_Img1=loadImage("briks1.png");
   wall_Img=loadImage("briks1.png");
  wall_Img1=loadImage("briks1.png");
 // wall_Img2=loadImage("bricks.png")
  //wall_Im3=loadImage("bricks.png");
  //wall_Img4=loadImage("bricks.png")
  //wall_Im5=loadImage("bricks.png")
  //wall_Img6=loadImage("bricks.png")
  //wall_Img7=loadImage("bricks.png")
  //wall_Im8=loadImage("bricks.png")
  //wall_Img9=loadImage("bricks.png")
  
 // monkey_running = loadAnimation("man.png","man.png","man.png","man.png","man.png","man.png","man.png","man.png","man.png","man2.png","man2.png","man2.png","man2.png","man2.png","man2.png","man2.png","man3.png","man3.png","man3.png","man4.png","man4.png","man4.png")
  
  swich_Img = loadImage("swich.png");
  
  
  black_Img = loadImage("black.png");
  
  
terer_Img = loadImage("ball1.png");
  
  yellow_Img = loadImage("yellow.png");
  
   brick_Img = loadImage("brick.png");
  
  obstaceImage = loadImage("obstacle.png");
  
    star_Image = loadImage("swich.png");
 
 // FoodGroup= new Group()
  //obstacleGroup= new Group()
  
}



function setup() {
  
  createCanvas(500,400);
  
  text("win"+win,200,200);
  
  score=0
   swich=createSprite(490,200,10,30)
  swich.addImage("moving",swich_Img) 
  //survivalTime=0
   wall5=createSprite(250,2,500,5)
   wall6=createSprite(2,500,5,1000)
   wall7=createSprite(499,500,5,1000)
   wall8=createSprite(250,995,500,5)
 
       obstacle1=createSprite(200,160,300,30)
obstacle1.addImage("moving",obstaceImage)
  obstacle1.scale=0.05
  
  
        black1=createSprite(50,70,300,30)
black1.addImage("moving",black_Img)
  black1.scale=0.4
  
obstacle=createSprite(250,370,300,30)
obstacle.addImage("moving",obstaceImage)
  obstacle.scale=0.06
  
    
brick=createSprite(350,370,300,30)
brick.addImage("moving",brick_Img)
  brick.scale=0.2
  
  wall2=createSprite(100,100,10,30)
  wall2.addImage("moving",wall_Img)
  
   wall17=createSprite(330,310,10,30)
  wall17.addImage("moving",wall_Img)
  
    wall18=createSprite(180,310,10,30)
  wall18.addImage("moving",wall_Img)
  
    wall19=createSprite(90,380,10,30)
  wall19.addImage("moving",wall_Img)
  
    wall20=createSprite(200,380,10,30)
  wall20.addImage("moving",wall_Img)
 
  wall14=createSprite(230,250,10,30)
  wall14.addImage("moving",wall_Img)
  
   wall15=createSprite(490,250,10,30)
  wall15.addImage("moving",wall_Img)
  
    wall16=createSprite(330,220,10,30)
  wall16.addImage("moving",wall_Img)
  
  
   wall3=createSprite(250,100,10,30)
  wall3.addImage("moving",wall_Img)
  
    wall9=createSprite(270,170,300,30)
  wall9.addImage("moving",wall_Img1)
  
    wall10=createSprite(220,170,300,30)
  wall10.addImage("moving",wall_Img1)
  
   wall11=createSprite(420,170,300,30)
  wall11.addImage("moving",wall_Img1)
  //wall1.scale=0.8
  
   wall12=createSprite(85,250,300,30)
  wall12.addImage("moving",wall_Img1)
  
   wall1=createSprite(300,100,300,30)
  wall1.addImage("moving",wall_Img1)
  
   wall4=createSprite(80,100,300,30)
  wall4.addImage("moving",wall_Img1)
  
    wall21=createSprite(340,390,300,30)
  wall21.addImage("moving",wall_Img1)
  
  star=createSprite(320,370,300,30)
  star.addImage("moving",star_Image)
  
  
    terer=createSprite(50,60,300,30)
terer.addImage("moving",terer_Img)
  
  terer.scale=0.2
  
    yellow=createSprite(350,375,300,30)
  yellow.addImage("moving",yellow_Img)
    yellow.scale=0.109;
  
  
     obstacle3=createSprite(300,85,300,30)
obstacle3.addImage("moving",obstaceImage)
  obstacle3.scale=0.06
   

 // ground=createSprite(0,400,1500,10)
  
  // monkey=createSprite(50,70,10,10)
  //monkey.addAnimation("monkey_running",monkey_running)
 // monkey.scale=0.3
  
  
  

  }
function draw() {
  
  terer.bounceOff(wall1)
  terer.bounceOff(wall2)
   terer.bounceOff(wall3)
  terer.bounceOff(wall4)
   terer.bounceOff(wall5)
    terer.bounceOff(wall6)
   terer.bounceOff(wall7)
   terer.bounceOff(wall8)
  terer.bounceOff(wall9)
   terer.bounceOff(wall10)
  terer.bounceOff(wall11)
    terer.bounceOff(wall12)
  terer.bounceOff(wall14)
  terer.bounceOff(wall15)
  terer.bounceOff(wall16)
  terer.bounceOff(wall17)
  terer.bounceOff(wall18)
  terer.bounceOff(wall19)
  terer.bounceOff(wall20)
  terer.bounceOff(wall21)
  terer.bounceOff(brick)
 
 
 
  terer.bounceOff(wall1)

  terer.bounceOff(wall4)
   
  
   //terer.bounceOff(wall11)
  
  
   
   terer.bounceOff(wall4)
  background("white")
  
  if(keyDown("d"))  {
    terer.velocityX=3; 
  }
    if(keyDown("a"))  {
    terer.velocityX=-3; 
  }
  
   if(keyDown("w"))  {
   terer.velocityY=-3; 
  }
  //terer.velocityY = terer.velocityY + 0.3
  
  
   if(keyDown("s"))  {
    terer.velocityY=0; 
     terer.velocityX=0; 
  }
  
  // if(keyDown("space")&&monkey.y >= 350){
    //terer.velocityY=-10
  //}
  terer.velocityY = terer.velocityY + 0.3
  
 //monkey.velocityX =0.5;
  //dmonkey.collide(ground)
  
  
  //ground.velocityX = -7 
 //ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
   // fruits()
 }
  
  if(terer.isTouching(obstacle)){
    terer.x=10
    
     terer.y=100
      swich.x= 490
     swich.y=200
  }
   if(terer.isTouching(obstacle1)){
    terer.x=10
      terer.y=100
       swich.x= 490
     swich.y=200
  }
   if(terer.isTouching(obstacle3)){
    terer.x=10
     terer.y=100
    swich.x= 490
     swich.y=200
  }
   if(terer.isTouching(swich)){
    wall15.y=300
  }
  
   if(terer.isTouching(brick)){
    win.y=300
  }
  
  if(terer.isTouching(star)){
    star.x=490
    
     star.y=200
    yellow.y=80
      yellow.x=20
  }
  
  //if(World.frameCount%300===0){
    //stones()
// }
  
  //if(monkey.isTouching(FoodGroup)){
    // FoodGroup.destroyEach()
   // score=score+1
     // }
  
 
 drawSprites()
  fill("white") 
  text("win: "+ win, 500,50);
  
  fill("black")
//  var survivalTime=Math.round(getFrameRate()/1);
  //text("Survival Time: "+ survivalTime,350,50)
  
}

//function fruits(){
 // banana=createSprite(670,Math.round(random(170,230)),10,10)
 // terer.addImage(terer_Img)
  //terer.scale=0.1
  //terer.velocityX=-3
  //FoodGroup.add(terer)
//








