function Bricks(){

	this.text = [ 	//English
					{'letter' :'H', 'px':540, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'a', 'px':580, 'py':200, 'tSize': 30,'isFont': fontJP}, 
					{'letter' :'p', 'px':615, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'p', 'px':645, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'y', 'px':680, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'N', 'px':720, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'e', 'px':754, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'w', 'px':786, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'Y', 'px':835, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'e', 'px':868, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'a', 'px':898, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'r', 'px':934, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'!', 'px':960, 'py':200, 'tSize': 30,'isFont': fontJP},
					{'letter' :'!', 'px':972, 'py':200, 'tSize': 30,'isFont': fontJP},

				// // // Chinese
					{'letter' :'新', 'px':640, 'py':300, 'tSize': 30, 'isFont': fontCN},
					{'letter' :'年', 'px':700, 'py':300, 'tSize': 30, 'isFont': fontCN},
					{'letter' :'快', 'px':760, 'py':300, 'tSize': 30, 'isFont': fontCN},
					{'letter' :'乐', 'px':820, 'py':300, 'tSize': 30, 'isFont': fontCN},
					{'letter' :'!',  'px':860, 'py':300, 'tSize': 30, 'isFont': fontCN},
					{'letter' :'!',  'px':880, 'py':300, 'tSize': 30, 'isFont': fontCN},

				// // Japanese	
					{'letter' :'ハ', 'px':540, 'py':380, 'tSize': 25,'isFont': fontJP},
					{'letter' :'ッ', 'px':580, 'py':380, 'tSize': 25,'isFont': fontJP},
					{'letter' :'ピ', 'px':615, 'py':380, 'tSize': 25,'isFont': fontJP},
					{'letter' :'ー', 'px':660, 'py':380, 'tSize': 25,'isFont': fontJP},
					{'letter' :'二', 'px':700, 'py':380, 'tSize': 25,'isFont': fontJP},
					{'letter' :'ュ', 'px':740, 'py':380, 'tSize': 25,'isFont': fontJP},
					{'letter' :'ー', 'px':775, 'py':380, 'tSize': 25,'isFont': fontJP},
					{'letter' :'イ', 'px':820, 'py':380, 'tSize': 25,'isFont': fontJP},
					{'letter' :'ヤ', 'px':860, 'py':380, 'tSize': 25,'isFont': fontJP},
					{'letter' :'ー', 'px':900, 'py':380, 'tSize': 25,'isFont': fontJP},
					{'letter' :'!',  'px':930, 'py':380, 'tSize': 30,'isFont': fontJP},
					{'letter' :'!',  'px':945, 'py':380, 'tSize': 30,'isFont': fontJP},
				// korean	새해 복 많이 받으세요
					 {'letter' :'새', 'px':510, 'py':470, 'tSize': 28,'isFont': fontKR},
					 {'letter' :'해', 'px':550, 'py':470, 'tSize': 28,'isFont': fontKR},
					 {'letter' :'복', 'px':620, 'py':470, 'tSize': 28,'isFont': fontKR},
					 {'letter' :'많', 'px':690, 'py':470, 'tSize': 28,'isFont': fontKR},
					 {'letter' :'이', 'px':730, 'py':470, 'tSize': 28,'isFont': fontKR},
					 {'letter' :'받', 'px':800, 'py':470, 'tSize': 28,'isFont': fontKR},
					 {'letter' :'으', 'px':840, 'py':470, 'tSize': 28,'isFont': fontKR},
					 {'letter' :'세', 'px':880, 'py':470, 'tSize': 28,'isFont': fontKR},
					 {'letter' :'요', 'px':920, 'py':470, 'tSize': 28,'isFont': fontKR},
					 {'letter' :'!', 'px':960, 'py':470, 'tSize': 28,'isFont': fontKR},
					 {'letter' :'!', 'px':970, 'py':470, 'tSize': 28,'isFont': fontKR}
					 ];
	this.you = false;
	this.result = 0;
	
// -------------------------------------------------------------------------------------------

	this.display =()=>{	
		for(let i = 0; i < this.text.length; i++){
			//guide of the letter
			// fill(2,100);
			// rect(this.text[i].px, this.text[i].py,20,30);

			noStroke();
			textFont(this.text[i].isFont);
			fill(random(255),random(255),random(255));
			textSize(this.text[i].tSize);
			text(this.text[i].letter, this.text[i].px+45, this.text[i].py);

			if( ball.pos.x + ball.d>this.text[i].px && 
				ball.pos.x - ball.d<this.text[i].px+20&&
				ball.pos.y + ball.d>this.text[i].py-20&&
				ball.pos.y - ball.d<this.text[i].py){
				this.text[i].px = 2000;
				if(ball.pos.y>0) ball.vel.y *= -1;

				if(this.text[i].px === 2000) {
					this.result++;
				 	if(this.result+1> this.text.length) this.you = true;
				}
			}		
		}
	}
}	

	