let mapimg; 

function setup() {
  createCanvas(600, 600);
  mapimg = loadImage('busan map.jpg');
}

function draw() {
  background(220);
  image(mapimg,0,0, 600,600);
}