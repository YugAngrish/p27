class Log {

    constructor(x){
        var options = {
            density :100,
           // restituion :2,
           // friction: 0.8,
            isStatic:true
        }
this.body = Bodies.rectangle(x,200,150,150,options);
this.width = 250;
this.height = 15;
//this.image = loadImage("cradle.png")
World.add(world,this.body)
    }
    display(){
 rectMode(CENTER);
  fill("brown")      
 
  rect(this.body.position.x,this.body.position.y,
    this.width,this.height)  
    }
}