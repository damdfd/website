$(document).ready(main);

// animacion menu
var contador = 1;




function main (){
	$('.menu_bar').click(function(){





			if(contador == 1){

				

				$('nav').animate({
						right: '0'

				});





				contador = 0;
			}else {
				contador = 1;
				$('nav').animate({
					right:  '-100%'					 
				});


			 }


			});







};


document.getElementById('btnn').addEventListener('click', function(){
  var icon = document.getElementById('icon');
  icon.classList.toggle('fa-pause');
  icon.classList.toggle('fa-play');
})


