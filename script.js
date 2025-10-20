const button = document.querySelector("button")
const img = document.querySelector("img")
const result = document.querySelector(".resultP");

function flipCoin() {
  // Add animation class
 img.classList.add("flip");

  // Random number (even = heads, odd = tails)
  const randomNum = Math.floor(Math.random() * 10);

  // Wait for animation to complete (1s)
  setTimeout(() => {
    if (randomNum % 2 === 0) {
     img.src = "resources/heads.svg";
      result.textContent = "Heads";
    } else {
     img.src = "resources/tails.svg";
      result.textContent = "Tails";
    }

    // Remove class so next click can re-trigger animation
   img.classList.remove("flip");
  }, 1000);
}
button.addEventListener('click',flipCoin)
img.addEventListener('click',flipCoin)
