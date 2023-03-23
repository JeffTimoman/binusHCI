let contentBackground = document.getElementById("content");
let contentCounter = 0;

setInterval(() => {
    if(contentCounter == 0){
        contentBackground.style.backgroundImage = "url(../../assets/img/characters/liyue/night-background.jpg)"
        contentCounter = 1;
        contentBackground.style.transition = "background-image ease-in 4s";
    }else if(contentCounter == 1){
        contentBackground.style.backgroundImage = "url(../../assets/img/characters/liyue/day-background.jpg)"
        contentCounter = 0;
        contentBackground.style.transition = "background-image ease-in 4s";
    }
}, 12000);

let charOptions = document.querySelectorAll(".charOption");
let sliderBorders = document.querySelectorAll(".sliderBorder");
let charName = document.getElementById("charName");
let charVision = document.getElementById("charVision");
let charNameList = ["XIAO", "HU TAO", "GANYU", "SHENHE"]
let charDescList = ['One of the mighty and illuminated adepti guarding Liyue, also heralded as the "Vigilant Yaksha."Despite his youthful appearance, tales of his exploits have been documented for millennia.', "Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs. She does her utmost to flawlessly carry out balancing yin and yangs.", "The secretary to the Liyue Qixing. The blood of both human and illuminated beast flows within her veins.", "Even though she was born in the human world, she ended up being an adepti disciple. She grew up in the mountains far away from Liyue Harbor, her soul bound with red ropes, training both her body and mind."]

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
        charBigImg.src = `../../assets/img/characters/liyue/big-${i+1}.png`
        charVision.src = `../../assets/img/characters/liyue/vision-${i+1}.png`
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