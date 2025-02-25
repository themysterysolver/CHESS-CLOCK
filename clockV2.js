function populateMode(type){
    let fortype=document.getElementById("fortype");
    let mode=document.createElement("div");
    mode.innerHTML=`${type}`;
    fortype.appendChild(mode);
}

class chessClock{
    constructor(time,increment,id){

        this.time=this.minute_to_sec(time);
        this.element=document.getElementById(id);
        this.increment=increment;
        this.global=null; //to manage multiple session!
        this.display();

    }
    minute_to_sec(minute){
        return minute*60;
    }

    sec_to_display(sec){
        let mm=Math.floor(sec/60);
        let ss=sec%60;
        return `${mm<10 ? "0":""}${mm}:${ss<10 ? "0":""}${ss}`;
    }

    display(){
        this.element.innerHTML=""
        document.getElementById(this.element.id).innerHTML=`${this.sec_to_display(this.time)}`;
    }

    addIncrement(){
        this.time+=this.increment;
        this.display();
    }

    startTimer(){
        if(this.global){return;}
        this.global= setInterval(()=>{
            if(this.time>0){
                this.time--;
                this.display();
            }
            else{
                this.stopTimer();
                alert("Time's up!");
            }
        },1000);
    }
    isRunning(){
        return this.global!==null;
    }
    stopTimer(){
        clearInterval(this.global);
        this.global=null;
    }
}
class Game{
    constructor(wt,wi,bt,bi){
        this.white_clock=new chessClock(wt,wi,"left");
        this.black_clock=new chessClock(bt,bi,"right");

        this.active=this.white_clock;
        this.running=true;

        document.addEventListener("keydown",(event)=>{
            if(event.code === "Space"){
                this.switchTurns();
            }
            if(event.code === "Enter"){
                if(this.running){
                    this.pause();
                }
                else{
                    this.resume();
                }
            }
        })
    }
    pause(){
        this.running=false;
        this.active.stopTimer();
    }
    resume(){
        this.running=true;
        this.active.startTimer();
    }

    switchTurns(){
        if(!this.running){
            return;
        }
        this.active.stopTimer();
        this.active.addIncrement();
        this.active=this.white_clock === this.active ? this.black_clock : this.white_clock;
        this.active.startTimer();
    }

}
function mainV2(){
    
    const URL=new URLSearchParams(window.location.search);
    const type=URL.get("type");
    populateMode(type);
    if(type!="custom"){
        const time=parseInt(URL.get("time"));
        const inc=parseInt(URL.get("increment"));
        const game=new Game(time,inc,time,inc);
    }
}
window.onload = mainV2;