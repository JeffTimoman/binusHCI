
window.onscroll = () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("navBar").style.background = "rgba(48, 47, 41, 0.8)"
    } else {
        document.getElementById("navBar").style.background = "rgba(48, 47, 41, 0.6)"
    }
}   


let hamOpen = document.querySelector(".open");
let hamClose = document.querySelector(".close");
let navside = document.querySelector(".navBarSide");

hamOpen.onclick = () => {
    hamOpen.classList.toggle('active')
    hamClose.classList.toggle('active')
    navside.classList.toggle('active')
    hamOpen.style.animation = "fadeIn 0.5s";
    hamClose.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
        hamClose.style.animation = "";
        hamOpen.style.animation = "";
    }, 500);
}
hamClose.onclick = () => {
    hamOpen.classList.toggle('active')
    hamClose.classList.toggle('active')
    navside.classList.toggle('active')
    hamOpen.style.animation = "fadeIn 0.5s";
    hamClose.style.animation = "fadeIn 0.5s";
    setTimeout(() => {
        hamClose.style.animation = "";
        hamOpen.style.animation = "";
    }, 500);
}
