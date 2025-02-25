function populateMode(type,time,inc){
    let fortype=document.getElementById("fortype");
    let mode=document.createElement("div");
    mode.innerHTML=`${type}`;
    fortype.appendChild(mode);
}
function setMiddleButton(){
    return;
}
class chessClock{
    constructor(time_white,increment_white,time_black,increment_black){
        console.log("CP-1");

        this.time_white=time_white;
        this.time_black=time_black;
        this.increment_white=increment_white;
        this.increment_black=increment_black;

        this.white_sec=this.minute_to_sec(this.time_white);
        this.black_sec=this.minute_to_sec(this.time_black);
        
        this.setDisplay();
    }
    minute_to_sec(minute){
        return minute*60;
    }
    sec_to_display(sec){
        let mm=Math.floor(sec/60);
        let ss=sec%60;
        return `${mm<10 ? "0":""}${mm}:${ss<10 ? "0":""}${ss}`;
    }
    setDisplay(){
        let l=document.createElement("div");
        let r=document.createElement("div");
        l.id="l";
        r.id="r";
        let left=document.getElementById("left");
        let right=document.getElementById("right");
        left.appendChild(l);
        right.appendChild(r);
        this.display();
    }

    display(){
        document.getElementById("l").innerHTML=`${this.sec_to_display(this.white_sec)}`;
        document.getElementById("r").innerHTML=`${this.sec_to_display(this.black_sec)}`;
    }
}
function mainV2(){
    
    const URL=new URLSearchParams(window.location.search);
    const type=URL.get("type");
    const time=URL.get("time");
    const inc=URL.get("increment"); 
    
    populateMode(type,time,inc);
    setMiddleButton();
    if(type!="custom"){
        const clock=new chessClock(time,inc,time,inc);
    }
}
window.onload = mainV2;