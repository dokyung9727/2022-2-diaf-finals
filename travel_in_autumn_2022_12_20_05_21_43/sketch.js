let mapimg;
let airplane;

let place;
let airmove;

function setup() {
  createCanvas(600, 600);
  mapimg = loadImage('busan map.jpg');
  airplane = loadImage('airplane.png');

  airmove = new Movingair();
  place = new Attraction();
}

function draw() {
  background(220);
  image(mapimg,0,0, 600,600);
  image(airplane, 50, 300, 50, 50);

  airmove.update();
  airmove.show();
  place.update();
  place.show();
}