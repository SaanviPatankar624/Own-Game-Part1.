class Asteroids{
    constructor(x, y, r){
        var options = {
            'isStatic': false,
            'restitution': 0,
            'friction': 1,
            'density': 1.2,
            'speed':4
        }
        var rand = Math.round(random(1,2));
        switch(rand){
	
        case 1:  this.image  = loadImage("asteroids-2.jpg");
                 
        break;
         
        case 2:  this.image = loadImage("asteroids-3.jpg");
                 
        break;

        default: break;
     }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);

        World.add(world, this.body);
    }
     
    display(){
        var pos = this.body. position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 900, 0, this.r, this.r);
        pop();
    }

    
}