var car, wall, thickness;
var speed, weight;  

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);

  car.shapeColor = "white";
  wall.shapeColor = color(80, 80, 80);

}

function draw() {
  background(255,255,255);  
  
  car.velocityX = speed; 

  if(hascollided(car, wall){
    car.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
    if(damage > 10){
      wall.shapeColor = color(255, 0, 0);
    }
  
  if(damage < 10){
    wall.shapeColor = color(0, 255, 0);
  }

  }

  
  drawSprites();
}
function hascollided(lcar, lwall){
 carRightEdge = lcar.x + lcar.width;
 wallLeftEdge = lwall.x;

 if(carRightEdge >= wallLeftEdge){
   return true;
 }
 retrun false;
}