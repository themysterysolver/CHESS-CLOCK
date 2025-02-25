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
            console.log(this.type!=="custom");
            if(this.type.toLowerCase!=="custom"){
                window.location.href=`clock.html?type=${this.type}&time=${this.time}&increment=${this.increment}`;
            }
            else{
                console.log("Hey show before!!");
                show(); 
            }
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
    console.log(document.getElementById("custom").innerHTML);
    let ct=new Tile("Custom");
    custom_parent.appendChild(ct.element);
}

function show(){
    console.log("Hey at show!!");
    document.getElementById("model").style.display="block";
    document.getElementById("overlay").style.display="block";
}

function closeModel(){
    document.getElementById("model").style.display="none";
    document.getElementById("overlay").style.display="none";
}

function submitButton(){
    let white_time=document.getElementById("wt").value;
    let black_time=document.getElementById("bt").value;
    let white_increment=document.getElementById("wi").value;
    let black_increment=document.getElementById("bi").value;

    window.location.href=`clock.html?type=custom&white_time=${white_time}&white_increment=${white_increment}&black_increment=${black_increment}&black_time=${black_time}`;
}

main();


