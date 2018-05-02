$(document).ready(function(){
	var audio = new Audio('http://soundbible.com/grab.php?id=1377&type=mp3');

function beep() {

  audio.play();
}
	
	var count = parseInt($('#sessionLength').html());
	var breakTime = parseInt($('#breakLength').html());
	$('#reset').hide();
	$('#start').click(function(){
		count *= 60;
		breakTime *= 60;
		$('#start, #hideMe').hide();
		$('#reset').show();
		var counter = setInterval(timer, 1000);
		
		function timer(){
			count -=1;
			
			if(count === 0){
				beep();
				clearInterval(counter);
				var startBreak = setInterval(breakSession, 1000);
				
			}
			if(count % 60 >= 10){
				$('#display').html('Session Time: ' + Math.floor(count/60) + ':' +(count % 60));
			} else{
			   	$('#display').html('Session Time: ' + Math.floor(count/60) + ':' +'0'+(count % 60));
			   }
			   
			 
		
			
		function breakSession(){
			
			breakTime -= 1;
			
			if (breakTime === 0){
				beep();
			clearInterval(startBreak);
		}
			if(count % 60 >= 10){
				$('#display').html('Break Time: ' + Math.floor(breakTime/60) + ':' +(breakTime % 60));
			} else{
			   	$('#display').html('Break Time: ' + Math.floor(breakTime/60) + ':' +'0'+(breakTime % 60));
			   }
			   
		
	}	
		
		}
		
		
	
	});
	
	
	$('#reset').click(function(){
		location.reload();
	});
	
	
	$('#minus1').click(function(){
		if(count > 1){
			count -=1;
		$('#sessionLength').html(count);	
		}
	});
	
	$('#add1').click(function(){
			count +=1;
		$('#sessionLength').html(count);	
		
	});
	
	$('#minus2').click(function(){
		if(breakTime > 1){
			breakTime -=1;
		$('#breakLength').html(breakTime);	
		}
	});
	
	$('#add2').click(function(){
			breakTime +=1;
		$('#breakLength').html(breakTime);	
		
	});
	
	
});