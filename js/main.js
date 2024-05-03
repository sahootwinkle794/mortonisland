// accomodation slider start
$(document).ready(function() {
    $('#responsive').lightSlider({
        item:3,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
			
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
  });
	
// accomodation slider end

// activities slider start
$(document).ready(function() {
    $('#responsive2').lightSlider({
        item:3,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
  });
// activities slider end

// testimonials slider start
// $(document).ready(function() {
		// var autoplaySlider = $('#autoplay3').lightSlider({
			// auto:true,
			// loop:true,
			// pauseOnHover: true,
			// onBeforeSlide: function (el) {
				// $('#current').text(el.getCurrentSlideCount());
			// } 
		// });
		// $('#total').text(autoplaySlider.getTotalSlideCount());
	// });
	$(document).ready(function() {
    $('#responsive3').lightSlider({
        item:2,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
  });
// testimonials slider end


// gallery start
lightGallery(document.getElementById('customize-thumbnails-gallery'), {
    // Add a custom class to apply style only for the particular gallery
    addClass: 'lg-custom-thumbnails',

    // Remove the starting animations.
    // This can be done by overriding CSS as well
    appendThumbnailsTo: '.lg-outer',

    animateThumb: false,
    allowMediaOverlap: true,
});


// gallery end


// play Button for background video

var video = document.getElementById("myVideo");
var btn = document.getElementById("play_btn");

function play_vdo() {
  if (video.paused) {
    video.play();
    // btn.innerHTML = "Pause";
  } else {
    video.pause();
    // btn.innerHTML = "Play";
  }
}

 
 // scroll to top arrow js start
 
// Back to top
var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});
 
 
 
 
 
 // scroll to top arrow js end