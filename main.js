window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
//Onload
let overlay = document.querySelector('.overlay')
let load = document.querySelector('.load')
let overlayLoading = document.querySelector('.overlay__loading')
let loadList = document.querySelector('.load__list')
let cursor = document.querySelector('.cursor')
let mouse = document.querySelectorAll('.mouse')
const mouseArr = [...mouse]
console.log(mouseArr);
setTimeout(() => {
    overlayLoading.style.opacity = "0";
    overlayLoading.style.top = "40%";
    load.style.top = "1rem"
    loadList.style.opacity="1"
    loadList.style.visibility="visible"
    cursor.style.display = "block"
}, 3000);
setTimeout(() => {
    overlay.style.opacity="0"
    overlay.style.visibility = "hidden"
}, 3500);
//mouser effects
window.addEventListener('mousemove',(e)=>{
    var x = e.clientX - 15
    var y = e.clientY - 15
    mouseArr.map((e,index)=>{
        let data = e.getAttribute("data-scale")
        let dataSpeed = e.getAttribute("data-speed")
        console.log(data)
        e.style.transform = `translate(${x}px,${y}px) scale(${data},${data})`
        e.style.transition = `transform ${dataSpeed}s ease`
    })
})









let landing = document.querySelector('.landing')
let about = document.querySelector('.about')
let manifesto = document.querySelector('.manifesto')
let project = document.querySelector('.project')
let contact = document.querySelector('.contact')
window.addEventListener('scroll',()=>{
    let setX = window.scrollY;
    if(setX>0){
        landing.style.transform= `translateX(-${setX}px)`;
    }
    if(setX>1800){
        landing.style.transform= `translateX(-${setX}px)`;
        manifesto.style.transform= `translateX(-${setX-1800}px)`;
    }
    if(setX>3600){
        landing.style.transform= `translateX(-${setX}px)`;
        manifesto.style.transform= `translateX(-${setX-1900}px)`;
        about.style.transform= `translateX(-${setX-3600}px)`;
    }
    if(setX>5400){
        landing.style.transform= `translateX(-${setX}px)`;
        manifesto.style.transform= `translateX(-${setX-1900}px)`;
        about.style.transform= `translateX(-${setX-3600}px)`;
        project.style.transform= `translateX(-${setX-5400}px)`;
    }
    console.log(setX)
    // project.style.transform= `translateX(-${setX}px)`;
    // follow.style.transform= `translateX(-${setX}px)`;
    // container.style.transform= `translateX(-${setX}px)`;
})