class Movingair {
    constructor(){
      this.pos = createVector(100,0);
      this.vel = createVector(0,0);
      this.acc = createVector(0.1,1);
      this.w = 70;
    }
    
    update(){
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      
      this.acc.set(0,0);
      
      this.checkatt1();
    }
    
    checkatt1(){
      if(this.pos.y == 260){
        this.tt = 0;
      }
      if(this.pos.y < 260){
        this.tt = 255;
      }
    }
    
    show(){
      tint(255,this.tt);
      image(airplane, this.pos.x, this.pos.y, this.w, this.w);
    }
  }