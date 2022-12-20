class Movingtraveler{
    constructor(){
      this.tvx = 0.7;
      this.tvy = 0.15;
      this.pos = createVector(170, 280);
      this.vel = createVector(this.tvx, this.tvy);
      this.acc = createVector(0,0);
      this.w = 40;
    }
    
    update(){
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.set(0,0);
      
      this.checkatt2();
    }
    
    checkatt2(){
        if(this.pos.x >= 345){
            this.tvx = 0.7;
            this.tvy = -this.tvy;
          }
          if(this.pos.x < 345){
            this.tvx = 0.7;
            this.tvy = 0.15;
          }
    }
    
    show(){
      tint(255,255);
      image(traveler, this.pos.x, this.pos.y, this.w, this.w);
    }
  }