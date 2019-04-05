const previous = document.getElementById("previous")
const next = document.getElementById("next")
const sliderLength = document.querySelectorAll(".mainimage img").length - 1
const sliderWapper = document.querySelector('.imagewrapper')

let currentImage = 0

document.querySelectorAll(".mainimage img").forEach((img, i) => {
  img.classList.add(`img${i}`)
  document.querySelector(".otherImages").innerHTML += `
  <div class="sliderImage img${i}">
    <img src="${img.src}" alt="">
  </div>
  `
})

document.querySelectorAll(".sliderImage").forEach(img => {
  img.addEventListener("click", e => {
    currentImage = parseInt(img.classList[1].replace("img", ""))
    validate()
  })
})

const validate = () => {
  sliderWapper.style.transform = `translateX(-${currentImage}00%)`
  if (currentImage < 1) {
    previous.classList.add("none")
    next.classList.remove("none")
  } else if(currentImage === sliderLength) {
    next.classList.add("none")
    previous.classList.remove("none")
  } else {
    next.classList.remove("none")
    previous.classList.remove("none")
  }
}

next.addEventListener("click", () => {
  if (currentImage < sliderLength) {
    currentImage++
    validate()
  }
})

previous.addEventListener("click", () => {
  if (currentImage > 0) {
    currentImage--
    validate()
  }
})

// translateX(-100%) Op de tweede Foto
// translateX(-200%) Op de derde Foto

validate()
