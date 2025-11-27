var btn = document.querySelector("button");
var inner = document.querySelector(".inner");
var h1 = document.querySelector('h1')

var progress = 0;
btn.addEventListener("click", () => {
  let pro = setInterval(() => {
    progress++;
    inner.style.width = progress+"%";
    h1.innerHTML = progress+"%"
},50);
setTimeout(()=>{
    clearInterval(pro)
    progress = 0;
    inner.style.width = 0+"%";
    h1.innerHTML = 0+"%"
    
  },5200)
});
