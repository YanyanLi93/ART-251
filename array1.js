let num = 200;
//element order 0, 1, 2, 3
let nums  = [100, 25, 12, 72]; 

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);
  
  ellipse(100, 200, num, num);
  ellipse(200, 200, 25, 25);
  ellipse(300, 200, nums[0], nums[1]);
  ellipse(400, 200, nums[2], nums[3]);
}