var movingrect, fixedrect




function setup() {
  createCanvas(800,400);  
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="brown"

  fixedrect=createSprite(100, 250, 10, 25);
  fixedrect.shapeColor="white"
  

//HEY CODE YOUR UGLY
}

function draw() {
  background(255,255,255);  
 movingrect.x=mouseX 
 movingrect.y=mouseY
 
 if (BOI (movingrect,fixedrect)){
 movingrect.shapeColor="Gold"
fixedrect.shapeColor="silver"


 }
else {
movingrect.shapeColor="brown"
fixedrect.shapeColor="white"

}

  drawSprites();
}





//such a mean code