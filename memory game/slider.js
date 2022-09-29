 // image slider
 // create image element , put in array
 // add event handler to go back and forth inside the array
 sliderImage = []

 function createSlider() {
     for (let j = 0; j < cardArray.length; j++) {
         if (j % 2 == 0) {
             imgs = document.createElement('img')
                 // img.setAttribute(src='image/')
             sliderImage.push(cardArray[j].img)
         }
     }
 }

 createSlider()
 var n = 0
 container = document.querySelector('#slider')
 container.src = sliderImage[0]
     // imgSource = container.getAttribute('src')

 var nextbtn = document.querySelector('.next')
 nextbtn.addEventListener('click', next)
 var backbtn = document.querySelector('.back')
 backbtn.addEventListener("click", prev)

 function next() {
     n++
     if (n >= sliderImage.length) {
         n = 0
     }
     container.src = sliderImage[n]
     auto()
 }

 function auto() {

     setTimeout(next, 500)
 }
 auto()

 function prev() {
     n--
     if (n < 0) {
         n = sliderImage.length - 1
     }
     container.src = sliderImage[n]
 }