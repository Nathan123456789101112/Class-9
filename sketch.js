var Cube
function setup() {
  createCanvas(400,400);
 Cube= createSprite (200,200,10,10)
}

function draw() 
{
  background("black");
  if(keyDown("Right")){
Cube.x= Cube.x +2
  }
  if(keyDown("left")){
    Cube.x= Cube.x -2
    
     }
     if(keyDown("up")){
      Cube.y= Cube.y -2
      
       }
       if(keyDown("down")){
        Cube.y= Cube.y +2
        
         }
 drawSprites ()
}




