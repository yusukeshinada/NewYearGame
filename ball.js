function Ball(){
	this.pos = createVector(500, 500);
	this.vel = createVector(random(-1,1), 5);
	this.d = 15;
	let button;

	this.display = ()=>{
		noStroke();
		fill(235,0,75);
		ellipse(this.pos.x, this.pos.y, this.d, this.d);
	}

	this.update = ()=>{
		this.pos.add(this.vel);

	} 

	this.checkEdge = ()=>{
		if (this.pos.x + this.d / 2 +15 > width || this.pos.x - this.d-15 / 2 < 0){
			this.vel.x *= -1;
		}

		if (this.pos.y - this.d / 2 -15 < 0){
			this.vel.y *= -1;
		}
	}
}