let contentBackground = document.getElementById("content");
let contentCounter = 0;

setInterval(() => {
    if(contentCounter == 0){
        contentBackground.style.backgroundImage = "url(../../assets/img/characters/mondstadt/night-background.jpg)"
        contentCounter = 1;
        contentBackground.style.transition = "background-image ease-in 4s";
    }else if(contentCounter == 1){
        contentBackground.style.backgroundImage = "url(../../assets/img/characters/mondstadt/day-background.jpg)"
        contentCounter = 0;
        contentBackground.style.transition = "background-image ease-in 4s";
    }
}, 12000);

let charOptions = document.querySelectorAll(".charOption");
let sliderBorders = document.querySelectorAll(".sliderBorder");
let charName = document.getElementById("charName");
let charVision = document.getElementById("charVision");
let charNameList = ["JEAN", "LISA", "VENTI", "KLEE"]
let charDescList = ["As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.", "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.", "The anemo god from mondstadt, the great barbatos, taking the form of a bard named Venti.", "Knights of Favonius Spark Knight! Forever witha bang and a flash! —And then disappearing from the stern gaze of Acting Grand Master Jean."]
let charDesc = document.getElementById("charDesc")
let charBigImg = document.getElementById("charBigImg");

for(let i = 0; i < charOptions.length; i++){
    charOptions[i].addEventListener("click", () => {
        for(let j = 0; j < charOptions.length; j++){
            sliderBorders[j].src = "../../assets/img/characters/slider-inactive.png"
            charOptions[j].classList.remove("p-active");
        }
        charOptions[i].classList.add("p-active");
        sliderBorders[i].src = "../../assets/img/characters/slider-active.png"
        charBigImg.src = `../../assets/img/characters/mondstadt/big-${i+1}.png`
        charVision.src = `../../assets/img/characters/mondstadt/vision-${i+1}.png`
        charDesc.innerHTML = charDescList[i]
        charName.innerHTML = charNameList[i]
        charName.style.animation = "fadeIn 1s";
        charVision.style.animation = "fadeIn 1s";
        charBigImg.style.animation = "fadeIn 1s";
        charDesc.style.animation = "fadeIn 1s";
        setTimeout(() => {
            charName.style.animation = "";
            charVision.style.animation = "";
            charBigImg.style.animation = "";
            charDesc.style.animation = "";
        }, 1000);

        // windows scroll to top make the scroll smooth
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
}

for(let i = 0; i < charOptions.length; i++){
    charOptions[i].addEventListener("mouseover", () => {
        sliderBorders[i].src = "../../assets/img/characters/slider-active.png"
    })
    charOptions[i].addEventListener("mouseout", () => {
        if(!charOptions[i].classList.contains("p-active")){
            sliderBorders[i].src = "../../assets/img/characters/slider-inactive.png"
        }
    })
}