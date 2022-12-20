class Attraction {
    constructor() {
      this.pos1 = createVector(170, 290);
      this.pos2 = createVector(420, 330);
      this.pos3 = createVector(372, 340);
      this.pos4 = createVector(485, 260);
      this.w = 20;
      this.attline = 1;
    }
  
    update() {
      this.checkmouse();
    }
  
    checkmouse() {
      this.attdist1 = dist(this.pos1.x, this.pos1.y, mouseX, mouseY);
      this.attdist2 = dist(this.pos2.x, this.pos2.y, mouseX, mouseY);
      this.attdist3 = dist(this.pos3.x, this.pos3.y, mouseX, mouseY);
      this.attdist4 = dist(this.pos4.x, this.pos4.y, mouseX, mouseY);
      if (this.attdist1 < 20) {
        this.c1 = color(255, 0, 0);
      }
      if (this.attdist1 > 20) {
        this.c1 = color(255, 0, 0, 150);
      }
      
      if (this.attdist2 < 20) {
        this.c2 = color(255, 0, 0);
      }
      if (this.attdist2 > 20) {
        this.c2 = color(255, 0, 0, 150);
      }
      
      if (this.attdist3 < 20) {
        this.c3 = color(255, 0, 0);
      }
      if (this.attdist3 > 20) {
        this.c3 = color(255, 0, 0, 150);
      }
      
      if (this.attdist4 < 20) {
        this.c4 = color(255, 0, 0);
      }
      if (this.attdist4 > 20) {
        this.c4 = color(255, 0, 0, 150);
      }
    }
  
    show() {
      fill(this.c1);
      strokeWeight(this.attline);
      ellipse(this.pos1.x, this.pos1.y, this.w, this.w);
      fill(this.c2);
      strokeWeight(this.attline);
      ellipse(this.pos2.x, this.pos2.y, this.w, this.w);
      fill(this.c3);
      strokeWeight(this.attline);
      ellipse(this.pos3.x, this.pos3.y, this.w, this.w);
      fill(this.c4);
      strokeWeight(this.attline);
      ellipse(this.pos4.x, this.pos4.y, this.w, this.w);
    }
  }
  
