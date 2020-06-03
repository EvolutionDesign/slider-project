/**
 * when you click a button the next image background comes on
 * the rest of the images should not been seen
 * thus forming a new image
 */
//variables that link DOM

//images
var image1 = document.querySelector(".bg1")
var image2 = document.querySelector(".bg2")
var image3 = document.querySelector(".bg3")
var image4 = document.querySelector(".bg4")
var body = document.querySelector(".container")

var images = [image1, image2, image3, image4]

//buttons
var btnNext = document.querySelector("#next")
var btnPrev = document.querySelector("#prev")

//counter
var count = 0

//set all the images to be in visible
function displayNone() {
  for (let i = 0; i < images.length; i++) {
    const element = images[i]

    element.style.display = "none"
  }
}

function nextImage() {
  //when you click the btn
  //1. all the images should disappear with the function
  displayNone()

  if (count === images.length - 1) {
    //1.1 to restart our count
    count = 0

    //2. then start incrementing the count thru the array
    count++

    //2.2 transtion timer
    body.style.transition = "all 1s ease-in-out"

    //2.3 the increment in the access of the array
    var newImage = images[count]

    //show the new image
    newImage.style.display = "block"
  } else {
    //2. then start incrementing the count thru the array
    count++

    //2.2 transtion timer
    body.style.transition = "all 1s ease-in-out"

    //2.3 the increment in the access of the array
    var newImage = images[count]

    //show the new image
    newImage.style.display = "block"
  }
}

function prevImage() {
  //when you click the btn
  //1. all the images should disappear with the function
  displayNone()

  //we are going to insert a control flo w to deal with a bug
  if (count === 0) {
    //its init when you start click at its init point
    //1. equating count to -ve image length ensures its going to always start at the end of the array
    count = images.length - 1

    //2. then start incrementing the count thru the array
    count--
    var newImage = images[count]

    //show the new image
    newImage.style.display = "block"
  } else {
    //2. then start incrementing the count thru the array
    count--
    var newImage = images[count]

    //show the new image
    newImage.style.display = "block"
  }
}

//Eventlistners for the user

btnNext.addEventListener("click", nextImage)
btnPrev.addEventListener("click", prevImage)
