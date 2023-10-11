const sliders = document.querySelectorAll('.slider');

if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
    addAnimation();
}

function addAnimation() {
    sliders.forEach((slider)=>{
        slider.setAttribute("data-animated", true);
    });
}