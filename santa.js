class santa
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.5,
			friction:2,
			density:1
			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("images/santa.png");
		this.body=Bodies.circle(this.x, this.y, (this.r), options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}

}