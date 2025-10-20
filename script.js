const button = document.querySelector("button")
const img = document.querySelector("img")
const changeImg= ()=>{
  const random = Math.random()
  img.src= random > 0.5 ? "/resources/tails.svg" : "/resources/heads.svg";
}
button.addEventListener('click',changeImg)
img.addEventListener('click',changeImg)
