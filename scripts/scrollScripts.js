const napis = document.querySelector(".ws__header");
const navDesktopItem = document.querySelectorAll(".navDesktop__item");
const navDesktopCircle = document.querySelectorAll(".navDesktop__item--circle");

document.addEventListener("scroll",function(){
    let wScroll = window.scrollY;
    napis.style.transform = "translateY("+wScroll/2+"px)";

    if(wScroll > window.innerHeight* 0.55){
        for(let i = 0; i< navDesktopItem.length; i++){
        navDesktopItem[i].style.color = "black";}
    }else{
        for(let i = 0; i< navDesktopItem.length; i++){
            navDesktopItem[i].style.color = "white";}
    }

    // Ustawienia, zeby menu sie rozszerzylo
   if(wScroll>=document.querySelector(".am").offsetTop-100) {
    
    document.querySelector(".navDesktop").style.height="75%";;
    document.querySelector(".navDesktop").style.top="12.5%";
   }
   else{
    navDesktopItem[0].style.borderBottom = "none";
    document.querySelector(".navDesktop").style.height="30%";
    document.querySelector(".navDesktop").style.top="55%";
   }
   // Ustawienia kolorowania kulek w zaleznosci od sekcji w ktorej jest scroll
        //1 kropka: kropka przy o mnie
   if(wScroll>=document.querySelector(".am").offsetTop && wScroll<document.querySelector(".web").offsetTop){
    navDesktopCircle[0].style.backgroundColor = "#9400D3";
   }else{
    navDesktopCircle[0].style.backgroundColor = "white";
   }
        //2 kropka: kropka przy websites
    if(wScroll>=document.querySelector(".web").offsetTop && wScroll<document.querySelector(".app").offsetTop){
        navDesktopCircle[1].style.backgroundColor = "	#9400D3";
       }else{
        navDesktopCircle[1].style.backgroundColor = "white";
       }
         //3 kropka: kropka przy websites
    if(wScroll>=document.querySelector(".app").offsetTop && wScroll<document.querySelector(".skills").offsetTop){
        navDesktopCircle[2].style.backgroundColor = "	#9400D3";
       }else{
        navDesktopCircle[2].style.backgroundColor = "white";
       }
         //4 kropka: kropka przy websites
    if(wScroll>=document.querySelector(".skills").offsetTop && wScroll<document.querySelector(".contact").offsetTop){
        navDesktopCircle[3].style.backgroundColor = "	#9400D3";
       }else{
        navDesktopCircle[3].style.backgroundColor = "white";
       }
         //5 kropka: kropka przy websites
    if(wScroll>=document.querySelector(".contact").offsetTop ){
        navDesktopCircle[4].style.backgroundColor = "	#9400D3";
       }else{
        navDesktopCircle[4].style.backgroundColor = "white";
       }
    
})