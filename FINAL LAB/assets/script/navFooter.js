
window.onscroll = () => {
    if (document.body.scrollTop > 0.1 || document.documentElement.scrollTop > 0.1) {
        // navbar background color change opacity
        document.getElementById("navBar").style.background = "rgba(48, 47, 41, 0.8)"
    } else {
        document.getElementById("navBar").style.background = "rgba(48, 47, 41, 0.6)"
    }
}