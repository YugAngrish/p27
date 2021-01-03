class Cradle {

    constructor(x){
        var options = {
            density :10,
          //  stiffness:53,

            restituion :0.8,
            friction : 1,
          isStatic:true
        }
this.body = Bodies.rectangle(x,500,150,150,options);
this.width = 50;
this.height = 50;
//this.image = loadImage("cradle.png")
World.add(world,this.body)
    }
    display(){
        
        //ellipseMode(CENTER);
  fill("black")      
 
  ellipse(this.body.position.x,this.body.position.y,
    this.width,this.height) ; 
    }
}