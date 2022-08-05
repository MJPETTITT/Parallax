
$(document).ready(function () {
	
	//moves first v
    var $horizontal1 = $('#horizontal-1');

    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            d = $(document).height(),
            c = $(this).height();

        scrollPercent = (s / (d - c));

        /*var position = (scrollPercent * ($(document).width() - $horizontal.width()));*/
        var position = (500 -scrollPercent * 20 * ($(document).width() - $horizontal1.width()));
        
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
        var position = (scrollPercent * 20 * ($(document).width() - $horizontal2.width()));
        
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
	
	
});