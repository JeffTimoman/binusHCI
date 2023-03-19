let windowHeight = window.innerHeight;

// detect if a scroll is detected scroll down for windowHeight
window.addEventListener('scroll', function() {

    // get the current scroll position
    let scrollPosition = window.scrollY;

    // if the scroll position is greater than the window height
    if (scrollPosition > windowHeight) {

        // add the class to the body
        document.body.classList.add('scrolled');

    } else {

        // remove the class from the body
        document.body.classList.remove('scrolled');

    }
});