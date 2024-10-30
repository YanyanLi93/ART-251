// let offset = 0;

function setup() {
    createCanvas(800, 800);
    frameRate(1); //颜色变化和移动的速度
  }
  
  function draw() {
    background(0);
    strokeWeight(4);
    stroke(255); 
    
    // while(x <= width) {
    //   fill(random(255), 200, 255);
    // ellipse(x, 100, 25, 25);
    // x +=50;
    // }
    
    for (let x = 0; x <= mouseX / 2; x+=50) {
    for (let y = 0; y <= mouseY * 2; y+=50) {
      fill(255, 100, random(255));
      // ellipse(x, offset, 25, 25);
      rect(x, y, 50, 50);
    }
    // offset = offset + 5;
   
      // fill(random(255), random(255), 200);
      // rect(200, y, 50, 50);
    }
  }
  