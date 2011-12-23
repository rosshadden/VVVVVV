var Player = function(){
	var self = this;
	self.image = new Image();
	self.image.src = 'img/megaman.png';
	
	self.sprites = {
		'run-horizontal': [
			{
				x:	188,
				y:	12,
				w:	24,
				h:	22
			},{
				x:	218,
				y:	10,
				w:	16,
				h:	24
			},{
				x:	239,
				y:	12,
				w:	21,
				h:	22
			}
		]
	};
	self.width = 24;
	self.height = 24;
	self.sprite = 'run-horizontal';
	
	self.speed = 1;
	self.position = {
		at: {
			x:	0,
			y:	0
		}
	};
	self.isMoving = false;
	
	self.numFrames = 3;
	self.currentFrame = 0;
	self.interval = 0;
	self.intervalCap = 8;
	
	self.setPosition = function(x,y){
		if(typeof x === 'object'){
			self.position.at.x = x.x;
			self.position.at.y = x.y;
		}else{
			self.position.at.x = x;
			self.position.at.y = y;
		}
	};
	
	self.draw = function(){
		if(!self.isMoving){
			self.currentFrame = 0;
		}
		draw.image({
			image:	self.image,
			source: {
				x:		self.sprites[self.sprite][self.currentFrame].x,
				y:		self.sprites[self.sprite][self.currentFrame].y,
				width:	self.sprites[self.sprite][self.currentFrame].w,
				height:	self.sprites[self.sprite][self.currentFrame].h
			},
			destination: {
				x:		self.position.at.x,
				y:		self.position.at.y,
				width:	self.sprites[self.sprite][self.currentFrame].w,
				height:	self.sprites[self.sprite][self.currentFrame].h
			}
		});
		if(self.interval === self.intervalCap - 1){
			self.currentFrame = (self.currentFrame + 1) % self.numFrames;
		}
		self.interval = (self.interval + 1) % self.intervalCap;
	};
};