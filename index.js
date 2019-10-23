// When the DOM is loaded and ready, let's do some shit!
$(document).ready(function() {
    function skillSet() {
      // Iterate over each element w/ a class of
      // bar-info, storing the value of data-total
      // in a variable.  Using jQuery's CSS method,
      // dynamically update the width of each bar.
      $('.bar-info').each(function() {
        total = $(this).data("total");
        $(this).css("width", total + "%");
      });
      
      // Iterate over each element w/ the class percent.  Using
      // jQuery's $(this) will allow us to interact w/ each specific
      // object in the loop.  Then use jQuery's super awesome animate method
      // to implement a counter on each .percent element, which will "count"
      // up incrementally until it reaches the number inside the percent span,
      // aka it's "ceiling".
      $('.percent').each(function() {
        var $this = $(this);
        $({
          Counter: 10
        }).animate({
          Counter: $this.text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function() {
            $this.text(Math.ceil(this.Counter) + "%");
          }
        });
      });
    };
    // Invoke our skillSet function inside a setTimeout, 
    // to create a short delay before the animation begins.
    setTimeout(skillSet, 1000);
  });