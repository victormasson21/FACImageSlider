var currentImage = document.getElementById('currentImage');
var imgContainer = document.getElementById('imgContainer');
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
  imgContainer.setAttribute('style', 'margin-left:' + newMargin + 'px');
}

function slideLeft() {
  j -= 1;
  if (j < 0) {j = 4}
  newMargin = -(sliderContainer.offsetWidth * j);
  currentImage.setAttribute('style', 'margin-left:' + newMargin + 'px');
  print()
}

window.addEventListener('keyup', function(e) {
  if (e.key == 'ArrowRight') {slideRight()}
  if (e.key == 'ArrowLeft') {slideLeft()}
})

prev.addEventListener('click', slideRight);
next.addEventListener('click', slideRight);

/* Adjusts margin when resizing */
window.addEventListener('resize', function() {
  newMargin = -(sliderContainer.offsetWidth * j);
  currentImage.setAttribute('style', 'margin-left:' + newMargin + 'px');
})
