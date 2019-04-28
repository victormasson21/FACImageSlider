var currentImage = document.getElementById('currentImage');
var imgContainer = document.getElementById('imgContainer');
var sliderContainer = document.getElementsByClassName('sliderContainer')[0];
var prev = document.getElementById('prev');
var next = document.getElementById('next');

/* Creates a mosaic with all the images to display */
for (let i = 2; i <= 5; i++) {
  var newImage = currentImage.cloneNode(false);
  imgContainer.appendChild(newImage);
  var newSrc = 'imgfolder/img' + i + '.png';
  newImage.setAttribute('src', newSrc);
}

/* Adjusts the left margin of the image container to display various images */
var j = 0;
var newMargin = 0;
function slideRight() {
  j += 1;
  if (j == 5) {j = 0}
  newMargin = -(sliderContainer.offsetWidth * j);
  currentImage.setAttribute('style', 'margin-left:' + newMargin + 'px');
}

function slideLeft() {
  j -= 1;
  if (j < 0) {j = 4}
  newMargin = -(sliderContainer.offsetWidth * j);
  currentImage.setAttribute('style', 'margin-left: ' + newMargin + 'px');
}

/* Link keyup events to slideLeft/slideRight functions */
window.addEventListener('keyup', function(e) {
  if (e.key == 'ArrowRight') {slideRight()}
  if (e.key == 'ArrowLeft') {slideLeft()}
})

/* Link previous/next buttons to slideLeft/slideRight functions */
prev.addEventListener('click', slideLeft);
next.addEventListener('click', slideRight);


/* Adjusts margin when resizing */
window.addEventListener('resize', function() {
  newMargin = -(sliderContainer.offsetWidth * j);
  currentImage.setAttribute('style', 'margin-left:' + newMargin + 'px');
})


/* Autoplay */

var t = 1;
function autoplay() {
  t++;
  if (t % 2 === 0) {
    ongoing = window.setInterval(slideRight, 1000);
    buttonOn.innerHTML = `&#9724;`;
    var newStyle = 'font-size: 1.3em; padding-left: 5px;';
    buttonOn.setAttribute('style', newStyle);

    var hideBtns = 'visibility: hidden';  // not necessary?
    prev.setAttribute('style', hideBtns);  // not necessary?
    next.setAttribute('style', hideBtns);  // not necessary?
  }
  else {
    window.clearInterval(ongoing);
    buttonOn.innerHTML = `&#9658;`;
    var newStyle = 'font-size: 1.2em; padding-left: 10px;';
    buttonOn.setAttribute('style', newStyle);

    var hideBtns = 'visibility: visible';  // not necessary?
    prev.setAttribute('style', hideBtns);  // not necessary?
    next.setAttribute('style', hideBtns);  // not necessary?
  }
}

buttonOn.addEventListener('click', autoplay);
