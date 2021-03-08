const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
backgroundImg=loadImage(" Images/Hot Air Ballon-01.png")
hotAirBalloonImg=loadImage(" Images/Hot Air Ballon-02.png")

}


function setup() {

  createCanvas(800,650);
 backGround= createSprite(550, 350, 50, 50);
 backGround.addImage(backgroundImg)
 backGround.scale=0.45

 hotAirBalloon= createSprite(550, 350, 50, 50);
 hotAirBalloon.addImage(hotAirBalloonImg)
 hotAirBalloon.scale=0.45
}     

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown(LEFT_ARROW)){
    hotAirBalloon.x= hotAirBalloon.x-10;
  }

  else if(keyDown(RIGHT_ARROW)){
    hotAirBalloon.x= hotAirBalloon.x+10;
  }

  else if(keyDown(UP_ARROW)){
    hotAirBalloon.y= hotAirBalloon.y-10;
  }

  else if(keyDown(DOWN_ARROW)){
    hotAirBalloon.y= hotAirBalloon.y+10;
  }
} 