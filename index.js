//Detectint button press
var noButtons =document.querySelectorAll(".drum").length;

for (var i = 0; i < noButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //alert ("i got clicked")
        //(this.style.color="white");
        var buttonInnerHTML=this.innerHTML;
          makeSound(buttonInnerHTML);
          buttonAnimation(buttonInnerHTML);
          });
        }
        //Detecting Key Pres
        document.addEventListener("keypress",function(event){
      makeSound(event.key);
      buttonAnimation(event.key);
        });
    function makeSound(key){
      switch(key){
        case "w":
        var tom4 =new Audio('tom-4.mp3');
          tom4.play();
          break;
        case "a":
        var tom3 =new Audio('tom-3.mp3');
          tom3.play();  
          break;
        case "s":
        var tom2 =new Audio('tom-2.mp3');
         tom2.play(); 
          break;
        case "d":
        var tom1 =new Audio('tom-1.mp3');
         tom1.play();
          break;
          case "j":
        var snare =new Audio('snare.mp3');
         snare.play();
          break;
        case "k":
        var kick =new Audio('kick-bass.mp3');
         kick.play();
          break;
        case "l":
        var crash =new Audio('crash.mp3');
         crash.play();
        default: console.log(buttonInnerHTML);
    }
    }
    function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed")
    },100);
    }

  

   
    
    



