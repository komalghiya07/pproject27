class Rope{
    constructor(bodyA, bodyB,x,y){
        this.x=x;
        this.y=y;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length:400,
            stiffness:1.5,
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x+this.x, pointB.y+this.y);
    }
    
}