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
      this.checktraveler();
    }
    
    checkatt1(){
      if(this.pos.y == 260){
        this.tt = 0;
      }
      if(this.pos.y < 260){
        this.tt = 255;
      }
    }

    checktraveler(){
      if(travelermove.pos.x <= 170 && travelermove.pos.y >= 272){
        this.pos.x = 140;
        this.pos.y = 255;
        this.tt = 255;
        if(this.pos.x >= 140){
          this.pos.add(this.vel);
        }
      }
    }
    
    show(){
      tint(255,this.tt);
      image(airplane, this.pos.x, this.pos.y, this.w, this.w);
    }
  }