var speed, weight, wall, car, deformation;

function setup() {
  createCanvas(800, 400);
  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));
  stroke("green");
  textSize(20);
  car = createSprite(200, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(700, 200, 50, 200);

  deformation = 0.5*weight*speed*speed/22500;
  console.log(deformation);
}

function draw() {
  background("lightGray");  
  car.collide(wall);
  if(deformation<100 && car.x>645){
    car.shapeColor = ("green");
  }
  if(deformation>180 && car.x>645){
    car.shapeColor = ("red");
  }
  if(deformation>100 && deformation<180 && car.x>645){
    car.shapeColor = ("yellow");
  }


  text("Speed: "+speed, 15, 25);
  text("Weight: "+weight, 120, 25);
  
  drawSprites();
}