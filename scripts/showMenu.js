if(window.innerWidth){
const navBox = document.querySelector(".nav");


const navButton = document.querySelector(".hamburger__icon");
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

    const navLink = [];
    for(let i = 0; i< document.querySelectorAll(".nav__block").length;i++){
        navLink[i] = document.querySelectorAll(".nav__block")[i];
        navLink[i].addEventListener('click',(e)=>{
            showCloseNav();
            
        })
    }
navButton.addEventListener("click",showCloseNav);
}

