var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100,100,235);
  //sirve para otra cosa: frameRate(10);
}

function draw() {
  d = random (10,100);
  noStroke()
  fill(250,d)
ellipse(mouseX, mouseY,d,d);
}
