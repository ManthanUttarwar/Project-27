class Rope{
    constructor(body1,body2,offsetX,offsetY)
    {
       this.offsetX = offsetX;
       this.offsetY = offsetY;
       
        var option={
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX,y:this.offsetY}
       }  
    this.rope = Constraint.create(option)  

    World.add(world,this.rope)
    }
    display(){
        this.rope.bodyA = bodyA;
                                                                                                                                                                                                                                                                                                                                                                                                                         
        line(bodyA.position.x,bodyA.position.y,)
    }
}