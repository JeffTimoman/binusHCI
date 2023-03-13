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
        charName.innerHTML = charNameList[i]
        charName.style.animation = "fadeIn 1s";
        charVision.style.animation = "fadeIn 1s";
        charBigImg.style.animation = "fadeIn 1s";
        setTimeout(() => {
            charName.style.animation = "";
            charVision.style.animation = "";
            charBigImg.style.animation = "";
        }, 1000);
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