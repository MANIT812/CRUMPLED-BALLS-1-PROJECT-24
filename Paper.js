class paperBall{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'restitution':0.8,
            'friction':0.5,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        var pos =this.body.position;
        fill("yellow");
        ellipse(pos.x,pos.y,this.radius);
    }
}