function loadStyle(){
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style'+winWidth+"_"+winHeight+'.css';
    document.head.appendChild(link);
}