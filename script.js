let flipBtn = document.querySelector("button");
let coin = document.querySelector("img");
let result = document.querySelector(".resultP");

// make random number of fliping coin (if number even => head , odd=> tail)
flipBtn.addEventListener("click" , ()=> {

    let theRandomNum = Math.trunc(Math.random()*20);
    coin.style.transform = `rotateY(${-180*theRandomNum}deg)`;
    setTimeout(() => {
        if(theRandomNum%2 == 0) {
            result.textContent = "Heads"
        } else {
            result.textContent = "Tails";
    }
    }, 1000);
    

});
