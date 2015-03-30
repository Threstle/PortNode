$(function() {

  var isScrolling;
  var scrolltime;
  var currentSect;
  var oldSection;
  var currentProject;
 

  $( document ).ready(function(){
      $('.sousSection').css('height',$(window).height());
       $('#loader').delay(2000).fadeOut(200);
       $('#loader h1').css('marginTop',$(window).height()/2-50);
  });



  //Menu gauche

    $('nav').mouseover(function(){
        $('nav').addClass('navExpand');
        $('#rightSide').addClass('rightSideShrink');
        $('#menuRightSide').addClass('menuRightSideHidden');

    })

    $('nav ul li').mouseenter(function(){
      $(this).find('a').css('border-color','white');
    });

    $('nav ul li').mouseleave(function(){
      $(this).find('a').css('border-color','black');
    });

    $('nav').mouseleave(function(){
        $('nav').removeClass('navExpand');
        $('#rightSide').removeClass('rightSideShrink');
        $('#menuRightSide').removeClass('menuRightSideHidden');
    })

    $(window).scroll(function(){

     // $('#menuRightSide').addClass('menuRightSideHalfHidden');
      if (scrolltime) {
        clearTimeout(scrolltime);
      }
       //You consider 500 MS between scrolls to be "done" with scrolling.
      scrolltime = setTimeout(function(){
          var doc = document.elementFromPoint($(window).width()/2, $(window).height()/2);
          $('.section').each(function(){
            if($(this).has(doc).length){
              currentSect = "#"+$(this).attr('id');
             $(this).find('.sousSection').each(function(){
                 if($(this).has(doc).length){
                  currentProject = $(this).attr('id');
                }
             })
            }
          });

          
          //Highlight current project
          $('#menuRightSide ul li').removeClass('chosenProject');
          $('#menuRightSide ul li').each(function(){
            if($(this).attr('href')==currentProject){
              $(this).addClass('chosenProject');
            }
          })
          refillRightMenu(currentSect);
      //   $('#menuRightSide').removeClass('menuRightSideHalfHidden');
      }, 10);
      
     
    });

    var refillRightMenu = function(section){
      if(section != oldSection){
       $('#menuRightSide').addClass('menuRightSideHidden');
       
       setTimeout(function(){
       $('#menuRightSide ul').html('');
        var k = 0;
        if($(section).find('.sousSection').length > 1){
          $(section).find('.sousSection').each(function(){
            k++;
            $('#menuRightSide ul').append('<li '+'href="'+$(this).attr('id')+'">'+$(this).attr('title')+'</li><span class="rightMenuSeparator"></span>');

          });
        }
        setTimeout(function(){$('#menuRightSide').removeClass('menuRightSideHidden');},500);


        $('#menuRightSide ul li').click(function(){
           event.preventDefault();
           var full_url = "#"+$(this).attr('href');
           var target_offset = $(full_url).offset();
     
           var target_top = target_offset.top;
 
           $('html, body').animate({scrollTop:target_top-40}, 700, 'easeInOutQuint');
        });
        oldSection = section;
      },500);
     }
    }


    $('nav ul li').click(function(){
       event.preventDefault();
       var full_url = $(this).find('a').attr('href');
        //get the top offset of the target anchor
       var target_offset = $(full_url).offset();
       var target_top = target_offset.top;

        //goto that anchor by setting the body scroll top to anchor top
        currentSect = full_url;
        $('html, body').animate({scrollTop:target_top-40}, 700, 'easeInOutQuint');

       refillRightMenu(full_url);


    });


    var tabChar = ['ך','א','ב','ג','ד','ה','ו','ז','ח','ט','י','ך','כ','ל','ם'];

    setInterval(function(){


      var i = Math.floor($('p').length*Math.random());
  
      var text = $('p')[i].innerHTML;
      var index = text.length*Math.random();
      var letter = text.charAt(index);
    
      if(tabChar.indexOf(letter)==-1){
       $('p')[i].innerHTML = text.replaceAt(index, tabChar[Math.floor(tabChar.length*Math.random())]);
      }
      else{
          console.log(letter);
      }
     /* $('p').each(function(){
        var charSelected = $(this).find('a');
        var j = Math.floor(charSelected.length*Math.random());

       if(charSelected[j] != undefined){

        charSelected.addClass('sefsef');
         charSelected.css('marginTop','20px');
        }
       // $(this +'a:nth-child('+Math.floor(Math.random()*$(this+'a')+')')).css('lineHeight','50px');*/
      //})


    },1000);

    //Prototypes
    String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character +this.substr(index+character.length);
    }


  //Logo anim

/*

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




    
          
        

         


    })

    var addLi = function(nom,image){
    	var li = "<li><img src='img/"+image+".png'></img></li>";
    	return li;
    }*/


 });