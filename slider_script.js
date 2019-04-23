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
  newImage.setAttribute('style', 'margin-left:' + (i - 1) * 600 + 'px');
}

/* Adjusts the left margin of the image container to display various images */
var j = 1;
var newMargin = 0;
function slideRight() {
  newMargin = -(600 * j);
  imgContainer.setAttribute('style', 'margin-left:' + newMargin + 'px');
  j += 1;
  if (j == 5) {j = 0}
}

prev.addEventListener('click', slideRight);
next.addEventListener('click', slideRight);
