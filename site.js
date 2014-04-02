---
---
;{% include js/jquery.min.js %}
;{% include js/jquery.flexslider.js %}

if($('.slideshow').length > 0) {
  hash = window.location.hash;
  photoIndex = 0;
  if(hash.length > 0) {
    photoNumber = hash.substring(1);
    photoIndex = photoNumber -1;
  }
  $('.slideshow').flexslider({
    animation: 'fade',
    controlsContainer: '.slideshow',
    startAt: photoIndex
  });
}
