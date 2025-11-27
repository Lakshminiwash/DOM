var btn = document.querySelector("button")
var main = document.querySelector(".main")

btn.addEventListener("click",()=>{
    var div = document.createElement("div")
    div.classList.add("hello")
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    div.style.backgroundColor = `rgb(${r},${g},${b})`
    let top = Math.floor(Math.random()*100)
    let left = Math.floor(Math.random()*100)
    div.style.left = top+"%"
    div.style.top = left+"%"
    main.appendChild(div)
})