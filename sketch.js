var bullet,wall,speed,weight,deformation,thickness,damage

function setup() {
  createCanvas(1600,400);
 
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = "grey";
  bullet = createSprite(50,200,50,25);
  bullet.shapeColor = "white";

  bullet.velocityX = speed;

  deformation = 0.5*weight*speed*speed/22500;

  damage = 0.5*weight*speed*speed/thickness,thickness,thickness;
}

function draw() {

  background("black");  
  drawSprites();

  if (hasCollided(bullet,wall)) {


    if (deformation < 100) {

      bullet.shapeColor = "red";
   
     }
   
     else if (deformation > 100 && deformation < 180 )
   
     {
   
      bullet.shapeColor = "yellow";
   
     }
   
     else if (deformation > 180)
   
     {
   
       bullet.shapeColor = "green";
   
     }
   
    bullet.velocityX = 0;
   

    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage > 10 )
    {
      wall.shapeColor = "red"
    }
    
    if (damage < 10 )
    {
      wall.shapeColor = "green"
    }

  }

}

function hasCollided(lbullet,lwall) 
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge) 
  {
    return true
  }
 return false;

}
