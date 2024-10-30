let words = ["pig", "tiger", "rabbit", "dragon"];
let index = 0;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);
fill(255);
textSize(32);
text(words[index], 12, 200);
}

function mousePressed(){
  index = index + 1;
  //循环
  if (index >= 4){  //或者把数字改成words.length如果有太多不好数
    index = 0;
  }
}