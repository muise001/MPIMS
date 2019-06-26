const previous = document.getElementById("previous")
const next = document.getElementById("next")
const sliderLength = document.querySelectorAll(".sliderNavigator img").length - 1
let currentImage = 0

if (document.querySelector(".pageHeaderSlider img")) {
  let pageHeaderDivs = ``
  document.querySelectorAll(".pageHeaderSlider img").forEach((img, i) => {
    if (i < 6) {
      const src = img.src
      pageHeaderDivs += `<div style="background-image: url('${src}')"></div>`
    }
  })
  document.querySelector(".pageHeaderSlider").innerHTML = pageHeaderDivs
}

document.querySelectorAll(".mainimage img").forEach((img, i) => {
  img.classList.add(`img${i}`)
  document.querySelector(".otherImagesWrapper").innerHTML += `
  <div class="sliderImage img${i}">
    <img src="${img.src}" alt="">
  </div>
  `
})

document.querySelectorAll(".sliderNavigator img").forEach((img, i) => {
  img.classList.add(`img${i}`)
  document.querySelector(".slider_main").innerHTML += `
  <div class=img${i}>
    <img src="${img.src}" alt="">
  </div>
  `
})

document.querySelector(".slider_main").setAttribute("style", `width: ${document.querySelectorAll(".sliderNavigator img").length}00%`)

document.querySelectorAll(".sliderNavigator img").forEach(img => {
  img.addEventListener("click", e => {
    currentImage = parseInt(img.classList[0].replace("img", ""))
    validate()
  })
})

document.getElementById("next").addEventListener("click", () => {
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

const validate = () => {
  if (document.querySelector(".slider_main > div.img0")) {
    document.querySelectorAll(".slider_main > div").forEach(img => {
      img.style.transform = `translateX(-${currentImage}00%)`
    })
  }
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

// translateX(-100%) Op de tweede Foto
// translateX(-200%) Op de derde Foto

validate()
