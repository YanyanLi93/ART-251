var ball = {
    x: 300,
    y: 200,
    xspeed: 10,
    yspeed: -10,
  };
  
  function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
  
    move();
    bounce();
    display();
    // stroke(255);
    // strokeWeight(4);
    // fill(200, 0, 200);
    // ellipse(ball.x, ball.y, 24, 24);
  
    //bouncing
    // if (ball.x > width/ 2 || ball.x < 0) {
    //   ball.xspeed = ball.xspeed * -1;
    // }
  
    // if (ball.y > height/ 2 || ball.y < 0) {
    //   ball.yspeed = ball.yspeed * -1;
    // }
  
    //move
    // ball.x = ball.x + ball.xspeed;
    // ball.y = ball.y + ball.yspeed;
  
  }
  function move(){
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
  }
  
  function bounce(){
    if (ball.x > 400 || ball.x < 200) {
      ball.xspeed = ball.xspeed * -1;
    }
  
    if (ball.y >= 300 || ball.y < 100) {
      ball.yspeed = ball.yspeed * -1;
    }
  }
  
  function display(){
    stroke(255);
    strokeWeight(4);
    fill(200, 0, 200);
    ellipse(ball.x, ball.y, 24, 24);
  }