const navBox = document.querySelector(".nav");
const navButton = document.querySelector(".hamburger-icon");
let buttonFlag = 0;
let open = false;

function showCloseNav(){
    if(buttonFlag == 0 || buttonFlag%2 == 0 ){
    navBox.style.right = 0;
    navButton.style.right = 250+"px";
    buttonFlag++;
    open = true;
    
    }else{
        navBox.style.right = -250+"px";
        navButton.style.right = 0+"px";
        buttonFlag++,open = false;
        open = false;
        
        
    }
    this.classList.toggle('close');
    
   
    }


navButton.addEventListener("click",showCloseNav);