class Atraction {
    contructor(){
        this.pos = createVector(170, 290);
        this.c = color(255,0,0,150);
        this.w = 20;
    }

    update(){
        this.checkmouse();
    }

    checkmouse(){
        this.attdist = dist(this.pos.x, this.pos.y, mouseX, mouseY);
        if(this.attdist < 20){
            this.c = color(255, 0, 0);
        } 
        if(this.attdist > 20){
            this.c = color(255,0,0,150);
        }
    }

    show(){
        fill(this.c);
        ellipse(this.pos.x, this.pos.y, this.w, this.w);
    }
}
