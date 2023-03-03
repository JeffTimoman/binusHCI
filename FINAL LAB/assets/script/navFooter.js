
window.onscroll = () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("navBar").style.background = "rgba(48, 47, 41, 0.8)"
    } else {
        document.getElementById("navBar").style.background = "rgba(48, 47, 41, 0.6)"
    }
}   