var draw = (function(){
	var screen = $('#game'),
		context = screen[0].getContext('2d'),
		dimensions = {
			width:	screen.width(),
			height:	screen.height()
		},
	
	init = function(){
		
	},
	
	background = (function(){
		context.fillStyle = '#000000';
		return function(){
			context.fillRect(0,0,dimensions.width,dimensions.height);
		};
	})(),
	
	paint = function(){
		background();
	},
	
	image = function(properties){
		context.drawImage(
			properties.image,
			properties.source.x,
			properties.source.y,
			properties.source.width,
			properties.source.height,
			properties.destination.x,
			properties.destination.y,
			properties.destination.width,
			properties.destination.height
		);
	};
	
	return {
		init:	init,
		paint:	paint,
		image:	image
	};
})();