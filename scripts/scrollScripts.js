const napis = document.querySelector(".ws__header");
const navDesktopItem = document.querySelectorAll(".navDesktop__item");

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
   if(wScroll>=document.querySelector(".am").offsetTop && wScroll <=document.querySelector(".web").offsetTop){
    navDesktopItem[0].style.borderBottom = "2px solid black";
   }
   else{
    navDesktopItem[0].style.borderBottom = "none";
   }
})