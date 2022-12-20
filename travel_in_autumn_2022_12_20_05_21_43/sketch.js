let mapimg;
let airplane;
let airplane2;
let traveler;

let place;
let airmove;
let travelermove;

function setup() {
  createCanvas(600, 600);
  mapimg = loadImage('busan map.jpg');
  airplane = loadImage('airplane.png');
  traveler = loadImage('traveler.png');
  airplane2 = loadImage('airplane2.png')

  airmove = new Movingair();
  place = new Attraction();
  travelermove = new Movingtraveler();
}

function draw() {
  image(mapimg,0,0, 600,600);

  airmove.update();
  airmove.show();
  if(airmove.tt == 0){
    travelermove.update();
    travelermove.show();
  }
  place.update();
  place.show();
}