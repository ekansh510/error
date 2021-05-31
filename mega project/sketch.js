var mangoimg,bananaimg,wmimg,appleimg,mango1
var bmg,swordimg,banana1,apple1,wmelon1,sword
var score=0
var appleGroup,bananaGroup,wmGroup,mangoGroup
var p1,p2,p3,p4
var sword1,sword2,sword3,p
var database


function preload(){
bmg=loadImage("jm.jpg")
swordimg=loadImage("sword.png")
mangoimg=loadImage("mango.png")
appleimg=loadImage("apple.png")
wmimg=loadImage("watermelon.png")
bananaimg=loadImage("banana.png")
sword1=loadImage("sword2.jpg")
sword2=loadImage("sword 3.jpg")
sword3=loadImage("sword4.png")
var game

}
function setup() {
  database=firebase.database()
 game=new Game()
  createCanvas(2000,1600);
  sword=createSprite(320,500,20,20)
  sword.addImage(swordimg)

  sword.scale=0.4
  sword.shapeColor="red"
  
  appleGroup=new Group()
  bananaGroup=new Group()
  wmGroup=new Group()
  mangoGroup=new Group()
}

function draw() {
  background("white"); 
  sword.x=World.mouseX
  sword.y=World.mouseY
  textSize(20)
  text("score: "+score,500,30)
  
  mango()
  banana()
  apple()
  wmelon()
  appleGroup.setVelocityXEach((Math.round(random(2,4))))
  appleGroup.setVelocityYEach((Math.round(random(2,4))))

  mangoGroup.setVelocityXEach((Math.round(random(2,4))))
  mangoGroup.setVelocityYEach((Math.round(random(2,4))))

  bananaGroup.setVelocityXEach((Math.round(random(2,4))))
  bananaGroup.setVelocityYEach((Math.round(random(2,4))))
  
  wmGroup.setVelocityXEach((Math.round(random(4,6))))
  wmGroup.setVelocityYEach((Math.round(random(4,6))))

  if(sword.isTouching(appleGroup)){
    score=score+1
    appleGroup.destroyEach()
  }else 
  if(sword.isTouching(bananaGroup)){
    score=score-1
    bananaGroup.destroyEach()
  }else if(sword.isTouching(mangoGroup)){
    score=score+0
    mangoGroup.destroyEach()
  }else if(sword.isTouching(wmGroup)){
    score=score+5
    wmGroup.destroyEach()
  }
  if(score===100){
    game.update(2)
  }
  drawSprites();
}

function mango(){
  if(frameCount%200===0){
  mango1=createSprite(400, 200, 50, 50);
  mango1.addImage(mangoimg)
  mango1.scale=0.4
 
  mangoGroup.add(mango1)
}
}


function banana(){
  if(frameCount%120===0){
  banana1=createSprite(500, 300, 50, 50);
  banana1.addImage(bananaimg)
  banana1.scale=0.4

  bananaGroup.add(banana1)
}
}


function apple(){
  if(frameCount%100===0){
  apple1=createSprite(110, 100, 50, 50);
  apple1.addImage(appleimg)

  apple1.scale=0.4

  appleGroup.add(apple1)
}

}

function wmelon(){
  if(frameCount%300===0){
  wmelon1=createSprite(40, 250, 50, 50);
  wmelon1.addImage(wmimg)
  wmelon1.scale=0.4
 
  wmGroup.add(wmelon1)
}
}