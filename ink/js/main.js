var me,
	main = function(){
			window.webkitRequestAnimationFrame
			&&	webkitRequestAnimationFrame(main)
		||	window.mozRequestAnimationFrame
			&&	mozRequestAnimationFrame(main)
		||	window.requestAnimationFrame
			&&	requestAnimationFrame(main);
		
		draw.paint();
		me.draw();
	},
	
	bind = function(){
		$(window).bind('keydown',function(){
			me.asdf(55);
		});
	},
	
	init = (function(){
		draw.init();
		
		me = new Player();
		
		bind();
		main();
	})();