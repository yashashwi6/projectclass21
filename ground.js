class Ground{

    constructor(x,y,w,h)
    {
        var goptions={
            isStatic:true
        }
        this.tground= Bodies.rectangle(x,y,w,h,goptions)
        World.add(world,this.tground)

        this.w=w;
        this.h=h;
    }
    show(){
         push();
         strokeWeight(6)
         fill("yellow")
         rectMode(CENTER)
         rect(this.tground.position.x,this.tground.position.y,this.w,this.h)
         pop();
    }
}