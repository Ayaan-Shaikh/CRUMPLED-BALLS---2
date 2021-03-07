class Papper {

    constructor(x,y,width,height){

      var options={ 
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("paper.png");
        this.width=width
        this.height=height
        World.add(world,this.body)
  
        
        }


        display(){
        fill("#FF00FF")
        
       // ellipse(this.body.position.x,this.body.position.y,this.width,this.height)
       var pos=this.body.position
       var angle=this.body.angle
       push();
       translate(pos.x,pos.y)
       rotate(angle)
       // stroke("green")
       // strokeWeight(4)
       // fill(255)
        imageMode(CENTER);
       image(this.image,0,0,this.width,this.height)
       pop();


     

     
        }
        

      }

/*class BaseClass{
    constructor(x,y,width,height){
        var options=
        {restitution:0.5,friction:1}
        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("sprites/base.png");
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    // stroke("green")
    // strokeWeight(4)
    // fill(255)
     imageMode(CENTER);
    image(this.image,0,0,this.width,this.height)
    pop();
}
}
*/