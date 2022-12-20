class Atraction {
    contructor(){
        this.pos = createVector(170, 290);
        this.c = color(255,0,0);
        this.w = 20;
    }

    show(){
        fill(this.c);
        ellipse(this.pos.x, this.pos.y, this.w, this.w);
    }
}
