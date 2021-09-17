const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	var ball_options = {
		restitution: 1.1,
		
		
	  }
	  // line1
	ball = Bodies.circle(320,300,20);
 	 World.add(world,ball);
	  ellipseMode(RADIUS);
	con=Matter.Constraint.create({
		pointA:{x:320,y:100},
		bodyB:ball,
		length:150,
		stiffness:0.9
	  });
	 World.add(world,con)
	 //line2
	 ball1= Bodies.circle(360,300,20,ball_options)
	 World.add(world,ball1)
	 ellipseMode(RADIUS)
	  con1=Matter.Constraint.create({
		  pointA:{x:360,y:100},
		  bodyB:ball1,
		  length:150,
		stiffness:0.9
		
	  });
	  World.add(world,con1)
	  //line3
	  ball2=Bodies.circle(400,310,20,ball_options)
	  World.add(world,ball2)
	   ellipseMode(RADIUS)
	   con2=Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball2,
		length:150,
	  stiffness:0.9
	});
	World.add(world,con2)
	//line 4
	ball3=Bodies.circle(440,300,20,ball_options)
	World.add(world,ball3)
	 ellipseMode(RADIUS)
	 con3=Matter.Constraint.create({
	  pointA:{x:440,y:100},
	  bodyB:ball3,
	  length:150,
	stiffness:0.9
  });
  World.add(world,con3)
  ball4=Bodies.circle(490,300,20,ball_options)
	World.add(world,ball4)
	 ellipseMode(RADIUS)
	 con4=Matter.Constraint.create({
	  pointA:{x:490,y:100},
	  bodyB:ball4,
	  length:150,
	stiffness:0.9
  });
  World.add(world,con4)

btn2 = createImg('up.png');
btn2.position(20,30);
btn2.size(50,50);
btn2.mouseClicked(vforce);
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  
  push()
  strokeWeight(2)
  stroke("#33005f")
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y)
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y)
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y)
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y)
 
  pop()
  //create ellipse shape for multiple bobs here
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20)
  ellipse(ball2.position.x,ball2.position.y,20)
 ellipse(ball3.position.x,ball3.position.y,20)
 ellipse(ball4.position.x,ball4.position.y,20)

 
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function vforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.07,y:-0.03})
	
}