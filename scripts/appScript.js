
// Skrypt dla stron
const strony = [];
for(let i = 0; i< document.querySelectorAll(".web__website").length;i++){
    strony[i] = document.querySelectorAll(".web__website")[i];
    strony[i].addEventListener("click",e=>{
        for(let i = 0; i<strony.length;i++){
           e.target.classList.add("duzaStrona");
           e.target.classList.remove("malaStrona");
            if(strony[i].classList.contains("duzaStrona") == false){
                strony[i].classList.add("malaStrona");
           }else{
            strony[i].classList.remove("duzaStrona");
            e.target.classList.add("duzaStrona");
           }
            
            
        }
        

    })
}

// skrypt dla aplikacji
const apps = [];
for(let k = 0; k< document.querySelectorAll(".app__application").length;k++){
    apps[k] = document.querySelectorAll(".app__application")[k];
    apps[k].addEventListener("click",e=>{
        for(let k = 0; k<apps.length;k++){
           e.target.classList.add("duzaApka");
           e.target.classList.remove("malaApka");
            if(apps[k].classList.contains("duzaApka") == false){
                apps[k].classList.add("malaApka");
           }else{
            apps[k].classList.remove("duzaApka");
            e.target.classList.add("duzaApka");
           }
            
            
        }
        

    })
}