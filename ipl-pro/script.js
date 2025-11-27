var h2 = document.querySelector("h2");
var btn = document.querySelector("button");
var main = document.querySelector(".main")
var box = document.querySelector(".box")

let arr = ["RCB","CHENNAI","MUMBAI","RAJASTHAN","PUNJAB","LUCKNOW","GUJARAT","KKR"]

btn.addEventListener("click",()=>{
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    main.style.backgroundColor = `rgb(${r},${g},${b})`;
    box.style.backgroundColor = `rgb(${b},${g},${r})`;

    let randomTeam = Math.floor(Math.random()*arr.length)
    let teamName = arr[randomTeam];
    h2.innerHTML = teamName;
    h2.style.color = `rgb(${g},${b},${r})`;
})