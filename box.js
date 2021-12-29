class Box{
    
    constructor(x,y,w,h){
        var rectangle_options ={
            restitution: 1.0
        }                
    this.rectangle = Bodies.rectangle(x,y,w,h, rectangle_options);
    this.w=w;
    this.h=h;
    World.add(world,this.rectangle);
    }
     
    display(){
    
        rectMode(CENTER);
        rect(this.rectangle.position.x, this.rectangle.position.y, this.w, this.h);
                                                                                                                                                                
    }


}