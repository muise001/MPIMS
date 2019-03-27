document.querySelectorAll(".mainimage img").forEach(img => {
  document.querySelector(".otherImages").innerHTML += `
  <div class="sliderImage">
    <img src="${img.src}" alt="">
  </div>
  `
})

document.querySelectorAll(".sliderImage").forEach(img => {
  img.addEventListener("click", (e, i) => {
    document.querySelector(".mainimage img").src = e.target.src
  })
})


// translateX(-100%) Op de tweede Foto
// translateX(-200%) Op de derde Foto
