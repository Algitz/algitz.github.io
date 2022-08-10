let player = {
  x: 400, y: 400,
  size: 60,
  dx: 0, dy: 0
};
let action = {
  accelLeft: false, accelRight: false,
  decelLeft: false, decelRight: false,
  jump: false,
  wallBounce: false
};
let keys = {
  A: false,
  D: false
};

let lrParam = {
  movingSpeed: 5,
  accelTime: 5
};
let jumpParam = {
  height: 100,
  jumpTime: 30,
  jumpDistance: 0, // variable
};
let wallBounce = {
  bounceMultiplier: 1.2
}
let worldParam = {
  groundHeight: 40
}

function setup() {
  createCanvas(800, 600);
  defaultCanvas0.style.margin = 'auto';
  defaultCanvas0.style.display = 'block';
  //frameRate(10);
  player.y = 600 - worldParam.groundHeight - player.size / 2
}

function draw() {
  background(240);

  if(keys.A == keys.D){
    if(player.dx < 0){
      player.dx += lrParam.movingSpeed/lrParam.accelTime;
      action.accelLeft = false;
      if(!action.wallBounce){player.dx = 0;}
    }
    else if(player.dx > 0){
      player.dx -= lrParam.movingSpeed/lrParam.accelTime;
      action.accelRight = false;
      if(!action.wallBounce){player.dx = 0;}
    }
  }
  else if(keys.D){
    if(player.dx < lrParam.movingSpeed){
      player.dx += lrParam.movingSpeed/lrParam.accelTime;
      action.accelRight = true;
    }
  }
  else if(keys.A){
    if(player.dx > -lrParam.movingSpeed){
      player.dx -= lrParam.movingSpeed/lrParam.accelTime;
      action.accelLeft = true;
    }
  }

  if(keys.space && !action.jump){
    player.dy = -4 * jumpParam.height / jumpParam.jumpTime;
    action.jump = true;
  }

  if(action.jump){
    if(player.dy < 4 * jumpParam.height / jumpParam.jumpTime - 8 * jumpParam.height / jumpParam.jumpTime ** 2){player.dy += 8 * jumpParam.height / jumpParam.jumpTime**2;}
    else{
      action.jump = false;
      player.dy = 0;
      player.y -= jumpParam.jumpDistance;
      jumpParam.jumpDistance = 0;
    }
  }
  
  if(player.x - player.size / 2 <= 0 || player.x + player.size / 2 >= 800){
    if(!action.wallBounce){
      player.dx *= -wallBounce.bounceMultiplier;
      player.x += player.dx
      action.wallBounce = true;
    }
  }
  else if(action.wallBounce){action.wallBounce = false;}

  player.x += player.dx;
  player.y += player.dy;
  jumpParam.jumpDistance += player.dy;
  
  fill(230, 199, 149);
  noStroke();
  rect(player.x-player.size/2, player.y-player.size/2, player.size);
  
  fill(84, 71, 50);
  rect(0, 600 - worldParam.groundHeight, 800, worldParam.groundHeight);
}

window.onkeydown = function(e){
  if(e.keyCode == 68){keys.D = true;}
  else if(e.keyCode == 65){keys.A = true;}
  else if(e.keyCode == 32){keys.space = true;}
};
window.onkeyup = function(e){
  if(e.keyCode == 68){keys.D = false;}
  else if(e.keyCode == 65){keys.A = false;}
  else if(e.keyCode == 32){keys.space = false;}
};
