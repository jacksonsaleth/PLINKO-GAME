const Engine=Matter.Engine;  
const World=Matter.World; 
const Bodies=Matter.Bodies; 
   var engine,world;
   var g1,a1,a2,a3,a4,a5,a6;
  var particle=[]; 
  var plinko=[];
 
   
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
   
g1=new Ground(240,800,width,10);
a1=new Ground(100,705,10,250);
a2=new Ground(200,705,10,250);
a3=new Ground(300,705,10,250);
a4=new Ground(400,705,10,250);
a5=new Ground(0,705,10,250);
a6=new Ground(480,705,10,250);

 for (var i=15;i<width;i=i+70){
  plinko.push(new Plinko(i,100));
 }
  for (var i=20;i<width;i=i+70){
    plinko.push(new Plinko(i,200));
  }
    for (var i=5;i<width;i=i+70){
      plinko.push(new Plinko(i,300));
    }
      for (var i=25;i<width;i=i+70){
        plinko.push(new Plinko(i,400));
      }
      for (var i=10;i<width;i=i+70){
        plinko.push(new Plinko(i,500));
      }






}


function draw() {
  Engine.update(engine);
  background("black");  
  g1.display();
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  
for (var i=0;i<plinko.length;i++){
  plinko[i].display();
}

if(frameCount%10===0){
  particle.push(new Particle(random(100,300),10,10));
}

for (var h=0;h<particle.length;h++){
  particle[h].display();
}


drawSprites();
}