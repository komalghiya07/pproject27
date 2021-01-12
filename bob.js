class Bob{
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:0,
            density:1.5
        }
        this.body=Bodies.circle(x,y,25,options);
        this.r=25;
        World.add(world,this.body); 
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill("purple");
        //rotate(angle);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
            
    }
    
}