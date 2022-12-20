let mapimg;
let airplane;
let traveler;

let place;
let airmove;
let travelermove;

function setup() {
  createCanvas(600, 600);
  mapimg = loadImage('busan map.jpg');
  airplane = loadImage('airplane.png');
  traveler = loadImage('traveler.png');

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
  if(travelermove.pos.x == 170 && travelermove.pos.y == 272){
    airmove.pos.x = 100;
    airmove.pos.y = 260;
    airmove.tt = 255;
  }
  place.update();
  place.show();
}