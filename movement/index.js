let player = {
  x: 400, y: 550,
  size: 60,
  dx: 0, dy: 0
};
let action = {
  accelLeft: false, accelRight: false,
  jump: false
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

function setup() {
  createCanvas(800, 600);
  defaultCanvas0.style.margin = 'auto';
  defaultCanvas0.style.display = 'block';
  //frameRate(10);
}

function draw() {
  background(240);

  if(keys.A == keys.D){
    if(player.dx < 0){
      player.dx += lrParam.movingSpeed/lrParam.accelTime;
      action.accelLeft = false;
    }
    else if(player.dx > 0){
      player.dx -= lrParam.movingSpeed/lrParam.accelTime;
      action.accelRight = false;
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
    console.log(player.y);
  }

  player.x += player.dx;
  player.y += player.dy;

  jumpParam.jumpDistance += player.dy;

  rect(player.x-player.size/2, player.y-player.size/2, player.size);
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
