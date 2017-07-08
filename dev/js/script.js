  
$( document ).ready(function() {

$ ("#hidden_iframe").load(function(){

  if(submitted){
   
     $('#myModal2').modal('show');
     $('#ajaxform').trigger( 'reset' );
     submitted=false; 
     ga('send', 'event', 'Регистрация', 'семинар/вебинар', 'День бухгалтера 2017');
  }
 
});


      wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      mobile:       false,       // default
                    }
                    )
                    wow.init();

   jQuery(function($){
   $("#Number").mask("+38(999) 999-9999");
   });



});
