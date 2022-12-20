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
        if(this.pos.x >= 345 && this.pos.x < 400){
            this.vel.y = -0.2;
            this.tt = 255;
          }
          if(this.pos.x >= 400 && this.pos.x < 460){
            this.vel.x = 0.55;
            this.vel.y = -0.6;
            this.tt = 255;
          }
          if(this.pos.y >= 170 && this.pos.y <= 245){
            this.vel.x = -1;
            this.vel.y = 0.15;
            this.tt = 255;
          }
          if(this.pos.x <= 170){
            this.tt = 0;
          }
    }
    
    show(){
      tint(255,this.tt);
      image(traveler, this.pos.x, this.pos.y, this.w, this.w);
    }
  }