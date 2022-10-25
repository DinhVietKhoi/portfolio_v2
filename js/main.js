//event resize website

//Onload
let overlay = document.querySelector('.overlay')
let overlayLoading = document.querySelector('.overlay__loading')
let cursor = document.querySelector('.cursor')
document.querySelector("body").style.height = "0px";

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }
let container = document.querySelector('.container')
window.addEventListener('load', (event) => {
    setTimeout(() => {
        overlayLoading.style.opacity = "0";
        overlayLoading.style.top = "40%";
        cursor.style.display = "block"
    }, 500);
    setTimeout(() => {
        overlay.style.opacity="0"
        overlay.style.visibility = "hidden"
    }, 1500);
    setTimeout(() => {
        container.classList.add('active')
        document.querySelector("body").style.height = (widthSection*4+contactSection-375) + "px";
    },1000)
});
//mouser effects && get event pause mousemove
let mouse = document.querySelectorAll('.mouse')
const mouseArr = [...mouse]
let timeout;
//get shape aniamtion
let shapes = document.querySelectorAll(".shape")
let shapesElement = [...shapes]
window.addEventListener('mousemove', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        cursor.classList.add("pause")
    }, 500);
    cursor.classList.remove("pause")
    var x = e.clientX - 15
    var y = e.clientY - 15
    mouseArr.map((e,index)=>{
        let data = e.getAttribute("data-scale")
        let dataSpeed = e.getAttribute("data-speed")
        e.style.transform = `translate(${x}px,${y}px) scale(${data},${data})`
        e.style.transition = `transform ${dataSpeed*2}s ease`
        e.style.top = `0`
        e.style.left = `0`
        e.style.right = `0`
    })
    shapesElement.forEach((element) => {
        let speed = element.getAttribute('data-speed') * 2
        let direction1 = element.getAttribute('direction1')
        element.style.transform = `translate(${direction1}${e.clientX/speed}px,${direction1}${e.clientY/speed}px)`
    })
})

//Scroll section
let landing = document.querySelector('.landing')
let section__group = document.querySelector('.section__group')
let inspire = document.querySelector('.inspire')
let contact = document.querySelector('.contact')
let section = document.querySelectorAll('section')



let widthSection = inspire.offsetWidth;
let contactSection = contact.offsetWidth ;

if (widthSection > 1792) {
    document.querySelector(".landing__right").classList.remove("landing__widthR")
    document.querySelector(".container").classList.remove("container__widthR")

}
const percentWidth = (a) => {
    return a*15/100
}
let sectionElement = [...section]
let inspireItems = document.querySelectorAll('.inspire__item')
let inspireItemsElement = [...inspireItems]
let sectionGroupTitle = document.querySelector('.section__group__title')
let sectionGroupTitleStrong1 = document.querySelector('.section__group__title__strong1')
let sectionGroupTitleStrong2 = document.querySelector('.section__group__title__strong2')
let setClear;
//get list product
let projectList = document.querySelector('.project__list')
window.addEventListener('scroll', () => {
    let setX = window.scrollY;
    inspireItemsElement.map((e, index) => {
            if (index == 0) {
                e.style.left =  "-"+setX/10+"px";
            }
            else if (index == 1) {
                e.style.left =  "-"+setX/6.5+"px";
            }
            else if (index == 2) {
                
                e.style.left =  "-"+setX/4.8+"px";
            }
            else if (index == 3) {
                
                e.style.left =  "-"+setX/3.8+"px";
            }
    })
    setTimeout(() => {
        if(setX<=widthSection){
            landing.style.transform = `translateX(-${setX}px)`;
            if (!widthSection > 1792) {
                inspire.style.transform= `translateX(-${setX/20}px)`;
            }
            else {
                inspire.style.transform= `translateX(0px)`;
            }
            section__group.style.transform= `translateX(0px)`;
        }
        else if (setX > widthSection && setX <= widthSection * 2) {
            landing.style.transform = `translateX(-${setX}px)`;
            inspire.style.transform = `translateX(-${setX - widthSection}px)`;
            section__group.style.transform = `translateX(0px)`;
            sectionGroupTitle.style.transform = `translateX(0px)`
            sectionGroupTitle.classList.remove("strong1")
        }
        else if (setX > widthSection*2 && setX <= widthSection*3) {
            landing.style.transform = `translateX(-${setX}px)`;
            inspire.style.transform = `translateX(-${setX - widthSection}px)`;
            section__group.style.transform = `translateX(-${setX - widthSection*2}px)`;
            sectionGroupTitle.style.transform = `translateX(${setX - widthSection*2}px)`
            sectionGroupTitle.classList.remove("strong2")
            sectionGroupTitle.classList.add("strong1")
            projectList.style.transform = `translateX(20px)`

        }
        else if (setX > widthSection * 3 && setX <= widthSection * 4) {
            landing.style.transform = `translateX(-${setX}px)`;
            inspire.style.transform = `translateX(-${setX - widthSection}px)`;
            section__group.style.transform = `translateX(-${setX - widthSection*2}px)`;
            sectionGroupTitle.style.transform = `translateX(${setX - widthSection*2}px)`
            sectionGroupTitle.classList.remove("strong1")
            sectionGroupTitle.classList.add("strong2")
            projectList.style.transform = `translateX(-${setX - widthSection*3}px)`
        }
        else {
            sectionGroupTitle.classList.remove("strong2")
            sectionGroupTitle.style.transform = `translateX(${setX - widthSection*2}px)`
            landing.style.transform = `translateX(-${setX}px)`;
            inspire.style.transform = `translateX(-${setX - widthSection}px)`;
            section__group.style.transform = `translateX(-${setX - widthSection*2}px)`;
        }
        sectionElement.map(e => {
            e.style.transition = `transform 0.5s ease-out`
        })
    }, 0);
    clearTimeout(setClear);
    setClear=setTimeout(() => {
        if (setX <= percentWidth(widthSection)) {
            window.scrollTo(0, 0);
            // landing.style.transform = `translateX(-0px)`;
            // console.log(percentWidth(widthSection))
        }
        else if (setX >= widthSection-percentWidth(widthSection) && setX <= widthSection+percentWidth(widthSection) ) {
            window.scrollTo(0, widthSection+1);
        }
        else if (setX >= widthSection*2-percentWidth(widthSection) && setX <= widthSection*2+percentWidth(widthSection) ) {
            window.scrollTo(0, widthSection*2+1);
        }
        else if (setX >= widthSection*3-percentWidth(widthSection) && setX <= widthSection*3+percentWidth(widthSection) ) {
            window.scrollTo(0, widthSection*3+1);
        }
        else if (setX >= widthSection*4-percentWidth(widthSection) && setX <= widthSection*4+percentWidth(widthSection) ) {
            window.scrollTo(0, widthSection*4+1);
        }
        // if (setX <= 500) {
        //     landing.style.transform = `translateX(-0px)`;
        // }
        // if (setX <= 500) {
        //     landing.style.transform = `translateX(-0px)`;
        // }

    }, 1000);
})

//load skill
let skill = document.querySelectorAll(".landing__skillItem")
let skillElement = [...skill]
//landing next button
let btn = document.querySelector(".landing__nextBtn");
btn.onclick = () => {
    window.scrollTo({top: 1792, behavior: 'smooth'});
}

let back = document.querySelector(".contact__back");
back.onclick = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}