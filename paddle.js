function Paddle(){
	this.pos = createVector(width/2, height - 90);
	let w = 140;
	let h = w / 7;
	let step = 20;
	this.isMovingLeft = false;
	this.isMovingRight = false;

//----------------------------------------------------------------------

	this.display = ()=>{
		noStroke();
		fill(51);
		rect(this.pos.x, this.pos.y, w, h);
	}

	this.move = (step)=>{
	 	this.pos.x += step;
	}

	this.update = ()=>{
		if(this.isMovingLeft)  this.move(-step);
		else if(this.isMovingRight) this.move(step);
	}

	this.repelBall=()=>{
		if(	this.pos.x < ball.pos.x &&
			this.pos.y < ball.pos.y + ball.d/2 &&
			this.pos.x + w> ball.pos.x){
			ball.vel.y *= -1;

			if(ball.vel.x<0 || this.isMovingLeft===true) {
				ball.vel.x += -1.1;
			} else if (ball.vel.x>0 || this.isMovingRight===true){
				ball.vel.x += 1.1;
			}
		} 
	}

	this.checkEdge=()=>{
		if (this.pos.x < 15) {
			this.pos.x = 15;
		} else if(this.pos.x> width - w-15) {
			this.pos.x = width - w-15;
		}
 
	}

}