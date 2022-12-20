class Movingtraveler{
    constructor(){
      this.tvx = 1;
      this.tvy = 0.1;
      this.pos = createVector(170, 280);
      this.vel = createVector(0.5,0.1);
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
      if(this.pos.x == 420){
        this.tvx = 1;
      }
      if(this.pos.x < 420){
        this.ttvy = -0.1;
      }
    }
    
    show(){
      tint(255,this.tt);
      image(traveler, this.pos.x, this.pos.y, this.w, this.w);
    }
  }