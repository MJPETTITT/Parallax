
$(document).ready(function () {
	
	//moves first v
    var $horizontal1 = $('#horizontal-1');

    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        /*var position = (scrollPercent * ($(document).width() - $horizontal.width()));*/
        var position = (500 -scrollPercent * 2 * ($(document).width() - $horizontal1.width()));
        
        $horizontal1.css({
            'left': position
        });
    });	
	
	//moves second v
    var $horizontal2 = $('#horizontal-2');

    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        /*var position = (scrollPercent * ($(document).width() - $horizontal.width()));*/
        var position = (19.5 + scrollPercent * 2 * ($(document).width() - $horizontal2.width()));
        
        $horizontal2.css({
            'left': position
        });
    });
	
	$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.instructions').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return (elementHeight - scrollTop) / elementHeight;
    }
  });
});
	
	$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
		
	/*var elementHeight = $('.video-container').height();*/
		var elementTop = document.getElementsByClassName("video-container")[0].offsetTop;
		opacityValue = 1 - (elementTop - 100 - scrollTop)/elementTop;
		
		if (opacityValue > 1) {
			opacityValue = 2 - opacityValue;
		}
       opacityValue = 1000 * (Math.pow(opacityValue, 50));
		if (opacityValue > 1) {
			opacityValue = 1;
		}
		console.log(opacityValue);
		

  $('.blackout').css({
    opacity: opacityValue
    })
					 
$('.video-container').css({
    opacity: Math.pow(opacityValue, 50)
    }
  );
});
	
});

