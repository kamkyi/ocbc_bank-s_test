$(document).ready(function(){
	   //vars
	   var location='Merina bay sand , Merlion , Jurong West Street 63 , 606566  <i class="fas fa-map-marker-alt"></i>';
	   var webContent="Let's hit the road again as OCBC Cycle Singapore 2011 rides into town! Join us for the cycling event of the year as the fun goes on for three days in a row ,starting form 4  March! Adding to the thrill is the Professional Criterisum";

	   //website onclick event
	  $('.click-info').on('click',function(){
          // window.alert();
          $('.pop-up').fadeIn();
          //check the data
          if($(this).attr('data')=='cycle'){
                    $('#text').html(location);
          }else{
          	       $('#text').html(webContent);
          }
	  });

	  //pop up and esc enter
	  $('.pop-up').on('click',function(){
	  	$(this).fadeOut();
	  });

	  $(window).on('keydown',function(e){
	  	  if(e.keyCode==27){
	  	  	  $('.pop-up').fadeOut();
	  	  }
	  });
});