function populateMode(type,time,inc){
    let fortype=document.getElementById("fortype");
    let mode=document.createElement("div");
    mode.innerHTML=`${type}`;
    fortype.appendChild(mode);
}
function setMiddleButton(){
    
}
function mainV2(){
    
    const URL=new URLSearchParams(window.location.search);
    const type=URL.get("type");
    const time=URL.get("time");
    const inc=URL.get("increment"); 
    
    populateMode(type,time,inc);
    setMiddleButton();
}
window.onload = mainV2;