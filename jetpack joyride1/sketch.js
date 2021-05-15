var player, playerImage;
var bg, bgImage

function preload(){
  playerImage = loadImage("images/character1.png");
  bgImage = loadImage("images/bg.png");
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  background = createSprite(width/2,height/2);
  background.addImage(bgImage);
  background.scale = 1.5;
  player = createSprite(width/8,height/1.3);
  player.addImage(playerImage);
  player.scale = 0.5;
  
}


function draw(){
  drawSprites();

}
