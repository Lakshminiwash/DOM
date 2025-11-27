var img = document.querySelector('img')
var i = document.querySelector(".image i")

img.addEventListener("dblclick",()=>{
    i.style.scale = '1';
    setTimeout(() => {
        i.style.transform = "translate(-50%,-350%)";
        i.style.opacity = "0"
    }, 2000);
    setTimeout(() => {
        i.style.transform = "translate(-50%,-50%)";
        i.style.scale = '0'
    }, 2500);
    setTimeout(() => {
        i.style.opacity = '1'
    }, 2900);


})


