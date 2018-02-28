const headerText= document.querySelector(".ws__header--text");
let licznik = 0;
const teksty = ["Lubię to!",
"Tworzę to!",
"Żyję tym!",
"Jestem w tym!",];
setInterval(function(){
    // cube1.innerHTML = teksty[licznik]
    
    headerText.innerHTML = teksty[licznik];
    
    if(licznik == teksty.length-1){
        licznik = 0;
    }
    licznik++;
    
},3000)