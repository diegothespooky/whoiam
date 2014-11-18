$(document).ready(function() {
	$('.adjective').textillate( {
									loop: true,
									  in: {
											effect: 'rollIn',
											delayScale: 1.5,
											delay: 40,
											sync: true,
											shuffle: false,
											reverse: false,
											
										  },
									   out: {
											effect: 'hinge',
											delayScale: 1.5,
											delay: 40,
											sync: false,
											shuffle: true,
											reverse: false,
											callback: changeAdjective
										  },

																			
								});
	
}); 

var intAdjectiveCounter = 0;
var adjectives = ["Java","Javascript","Self-Taught","HTML5/CSS3","Really Cool",".NET","Back-end","Friendly","Front-end"]; 
var changeAdjective = function() { 
	var strNewAdjective = adjectives[intAdjectiveCounter];
	$(".adjective ul li").text(strNewAdjective);
	intAdjectiveCounter++;
	if(intAdjectiveCounter >= adjectives.length){
		intAdjectiveCounter=0;
	}
}