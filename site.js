---
---
;{% include js/jquery.min.js %}
;{% include js/jquery.flexslider.js %}

if($('.slideshow').length > 0) {
  $('.slideshow').flexslider({
    animation: 'fade',
    controlsContainer: '.slideshow'
  });
}
