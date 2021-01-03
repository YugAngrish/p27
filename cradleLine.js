class CradleLine {

    constructor(bodyA,pointB){
//this.offsetX = this.offsetX;
//this.offsetY = this.offsetY;
        var options = {
            bodyA : bodyA,
            length: 10,
            pointB :pointB,
            stiffness : 0.04,
            restitution : 1
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
         this.pointB = pointB;
    }
    display(){
        push();
       // if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      //  }
        pop();
    }
    //fly(){
       // this.chain.bodyA = 1
 //   }
}