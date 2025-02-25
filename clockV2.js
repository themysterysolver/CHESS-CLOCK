function mainV2(){
    const URL=new URLSearchParams(window.location.search);
    const type=URL.get("type");
    const time=URL.get("time");
    const inc=URL.get("increment"); 

    console.log("Extracted type:", type);
    console.log("Extracted time:", time);
    console.log("Extracted increment:", inc);

    let fortype=document.getElementById("fortype");
    let mode=document.createElement("div");
    mode.innerHTML=`${type}`;
    fortype.appendChild(mode);
}
window.onload = mainV2;