
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var cl1,cl2,cl3,cl4,cl5,log;
var c1,c2,c3,c4,c5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

log = new Log(400)

c1 = new Cradle(400)
c2 = new Cradle(450)
c3 = new Cradle(500)
c4 = new Cradle(350)
c5 = new Cradle(300)


 cl1 = new CradleLine(c1.body,{x:400 ,y:200});
 cl2 = new CradleLine(c2.body,{x:450 ,y:200});
 cl3 = new CradleLine(c3.body,{x:500 ,y:200});
 cl4 = new CradleLine(c4.body,{x:350 ,y:200});
 cl5 = new CradleLine(c5.body,{x:300 ,y:200});
 

	Engine.run(engine);


  
}


function draw() {
	Engine.update(engine);

	background("white");

c1.display();
c2.display();
c3.display();
c4.display();
c5.display();



drawSprites();
cl1.display()
cl2.display();
cl3.display();
cl4.display();
cl5.display();


 log.display()

  
}
function mouseDragged(c1){
Matter.Body.setPosition(c1.body,{x:mouseX,y:mouseY})
}
function mouseDragged(c2){
	Matter.Body.setPosition(c2.body,{x:mouseX,y:mouseY})
}
	function mouseDragged(c3){
		Matter.Body.setPosition(c3.body,{x:mouseX,y:mouseY})
	}
		function mouseDragged(c4){
			Matter.Body.setPosition(c4.body,{x:mouseX,y:mouseY})
		}
			function mouseDragged(c5){
				Matter.Body.setPosition(c5.body,{x:mouseX,y:mouseY})
			}

function mouseReleased(c1) {
	Matter.Body.applyForce(c1.body,c1.body.position,{x:185,y:-85})

}

/*function mouseDragged(){
	Matter.Body.setPosition(c1.body,{x:mouseX,y:mouseY})
	Matter.Body.setStatic(c1,false)
	Matter.Body.setStatic(c2,false)
	Matter.Body.setStatic(c3,false)
	Matter.Body.setStatic(c4,false)
	Matter.Body.setStatic(c5,false)
	
}*/

/*function mouseReleased() {
	Matter.Body.setStatic(c1,false)
	Matter.Body.setStatic(c2,false)
	Matter.Body.setStatic(c3,false)
	Matter.Body.setStatic(c4,false)
	Matter.Body.setStatic(c5,false)

	
	
}*/
