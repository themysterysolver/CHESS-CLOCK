class Tile{
    constructor(type,time=0,inc=0){
        this.type=type;
        this.time=time;
        this.increment=inc;
        this.element=document.createElement("div");
        if(this.type.toLowerCase()!=="custom"){
            this.element.innerHTML=`${this.time}+${this.increment} <br> ${this.type}`;
        }
        else{
            this.element.innerHTML=`Custom`;
            this.element.classList.add("custom-tile");
        }
        this.element.classList.add("Tile");

        this.element.onclick = () =>{
            window.location.href=`clock.html?type=${this.type}&time=${this.time}&increment=${this.increment}`;
        }
    }
}
function main(){
    let parent=document.getElementById("bod");
    console.log("Chckpoint-1");
    let time_format=['Bullet','Blitz','Rapid']
    let time_constraint=[[[1,0],[1,2],[2,1]],[[3,0],[3,2],[5,0]],[[10,0],[15,10],[30,0]]]
    for(let i=0;i<time_format.length;i++){
        for(let j=0;j<time_constraint[i].length;j++){
            let t=new Tile(time_format[i],time_constraint[i][j][0],time_constraint[i][j][1]);
            parent.appendChild(t.element);
        }
    }
    let custom_parent=document.getElementById("custom");
    let ct=new Tile("Custom");
    custom_parent.appendChild(ct.element);
}
main();