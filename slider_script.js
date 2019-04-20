var currentImage = document.getElementById('currentImage');

var prev = document.getElementById('prev');
var next = document.getElementById('next');


var i=1;
function swapImage() {
  i++
  var newSrc = 'imgfolder/img' + i + '.png'
  currentImage.setAttribute('src', newSrc);
  if (i==5) {i=0}
}
prev.addEventListener('click', swapImage);
next.addEventListener('click', swapImage);
