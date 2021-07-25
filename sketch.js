const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var engine,world,ball,rock,wall,ground;

function setup(){
  createCanvas(400,400);

   engine=Engine.create();
   world=engine.world;

   var ball_options={
     restitution:0.95,
     frictionAir :0.01
   }
  
 ball=Bodies.circle(100,10,20,ball_options);
 World.add(world,ball);

 var ground_options={
   isStatic:true
 }
 
 ground=Bodies.rectangle(200,390,400,20,ground_options);
 World.add(world,ground);

var rock_options={
  restitution:1
}

rock=Bodies.circle(330,20,15,rock_options)
World.add(world,rock);

var wall_options={
isStatic:true
}

wall=Bodies.rectangle(300,200,200,15,wall_options)
 World.add(world,wall)
}

function draw(){
  background(51);
  Engine.update(engine);
   rectMode(CENTER);
   ellipseMode(RADIUS);
   fill("yellow");
   ellipse(ball.position.x,ball.position.y,20);
   fill("brown");
   rect(ground.position.x,ground.position.y,400,20);
  fill('cyan')
  ellipse(rock.position.x,rock.position.y,15)
  fill("lime")
  rect(wall.position.x,wall.position.y,200,15)
}
