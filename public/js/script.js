$(function() {

  $('#loader').delay(2000).fadeOut(200);

  var currentSect = "#section1";
  resize();

    $('#leftSide').css('height',$(window).height());
    $('#rightSide').css('height',$(window).height());
    $('.section').css('min-height',$(window).height());


      function resize(){
   		var width = window.innerWidth;
    	var height = window.innerHeight;
      $('#leftSide').css('height',$(window).height());
      $('#floatingMenu').css('height',$(window).height());
      $('#rightSide').css('height',$(window).height());

    	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      		//isMobile = true;
    	}
      	//$('#floatingMenu').css('height',$(window).height());
      	
      }

     
    $( window ).resize(function() {
        
        resize();
    });

    $('contactButton').click(function(event){
        $('.section').css('height',$(window).height());
    });

    $('.dateExp').click(function(event){
        if($(event.target).parent().attr('data') == 'cl'){
         $(event.target).parent().css('max-height','1000px');
         $(event.target).parent().attr('data','op')
        }else{
          $(event.target).parent().css('max-height','40px');
          $(event.target).parent().attr('data','cl')
        }
    })

    $('.skills span').click(function(event){
      console.log($(event.target).parent());
      $(event.target).parent().css('max-height','400px');
      $(event.target).css('opacity','0');
    })

    $(document).keypress(function( event ) {

    });

    var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],  
    n = 0;  
    $(document).keydown(function (e) {  
    if (e.keyCode === k[n++]) {  
        if (n === k.length) {  
                  $('#contactPhoto').css('opacity','0');
                  setTimeout(function(){
                    $('#contactPhoto').attr('src','img/easter.gif');
                    $('#contactPhoto').css('opacity','1');
          
                  },1000);

                  setTimeout(function(){
                    $('#contactPhoto').css('opacity','0');
                     
                     setTimeout(function(){
                      setTimeout(function(){
                        $('#contactPhoto').css('opacity','1');
                      },500);
                        $('#contactPhoto').attr('src','img/photo.png');
                     },1000);
                  },1800);

                  
               
            return !1  
        }  
    } else k = 0  
    });  

    $('#leftSide ul li').click(function(event){
      $('#rightSide').css('opacity','0');
      
      setTimeout(function() {
        $('#rightSide #contentRight').html($(event.target).parent().attr('data'));
        $('#rightMenu').html('<ul><li><a href="#section1">PROJECT</a></li><li><a href="#section2">CONCEPT</a></li><li><a href="#section3">TECH USED</a></li><li><a href="#section4">USEFUL LINK</a></li></ul>');
        $('#rightSide').css('opacity','1');
      }, 1000);

    });

     $('#contactButton').click(function(event){
        $('#rightSide').css('opacity','0');

        setTimeout(function() {
        $('#rightSide #contentRight').html($(event.target).attr('data'));
        $('#rightMenu').html('<ul><li><a href="#section1">ABOUT ME</a></li><li><a href="#section2">MY SKILLS</a></li><li><a href="#section3">EXPERIENCE</a></li><li><a href="#section4">CONTACT ME</a></li></ul>');
        $('#rightSide').css('opacity','1');
      }, 1000);
     });

    $('#rightMenu ul li a').click(function(event){
          $('#rightSide').stop();
          $('#rightSide').animate({

                      scrollTop:$($.attr(event.target, 'href') ).offset().top
          }, 'slow');

    })

    $('#hideButton').click(function(event){
      $('#hideButton').css('opacity','0');
      $('#showButton').delay( 3000 ).css('opacity','1');
      $('#leftSide').addClass('leftPush');
      $('#floatingMenu').addClass('leftPush');
      $('#rightSide').addClass('rightSidePush');
      $('#rightMenu').addClass('rightMenuPush');

    })

    $('#showButton').click(function(event){
      $('#showButton').css('opacity','0');
      $('#hideButton').delay( 3000 ).css('opacity','1');
       $('#leftSide').removeClass('leftPush');
      $('#floatingMenu').removeClass('leftPush');
      $('#rightSide').removeClass('rightSidePush');
      $('#rightMenu').removeClass('rightMenuPush');

    })


    $('.menuElement a').click(function(event){



    	$('.selector').stop();
         $('#selectorLeft').animate({
              top:$(event.target).parent().position().top+'px',
              height:$(event.target).parent().height()
          }, 2000,"easeInOutQuad",function(){
              //$('#leftSide').scrollTop(800);
          		 var nb;
          		 var content = "";
               var data = $(event.target).parent().attr('data');
               $('#leftSide').animate({  
                  scrollTop:$("#"+data).offset().top  
                }, 'slow');

                 

		         switch(data){
		         	case "app":
		         	break;
		         	case "exp":
		         	break;
		         	case "sit":
		         	break;
		         	case "jeu":
		         	break;
              case "con":
              
              break;
		         }

/*		         $('#leftSide ul').css('height',$(window).height()-130);
		         $('#leftSide ul li').css('height',100/nb +'%');*/




          });
         $('#selectorRight').animate({
              top:$(event.target).parent().position().top+'px',
              height:$(event.target).parent().height()
          }, 3000,"easeInOutQuad");

    
          
        

         


    })

    var addLi = function(nom,image){
    	var li = "<li><img src='img/"+image+".png'></img></li>";
    	return li;
    }


 });