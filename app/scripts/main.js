$(document).ready(function() {
  $('body').on('mousemove', function(event) {
    event.preventDefault();
    /* Act on the event */
    var width = $('.container h1')["0"].offsetWidth;
    console.log(width);
    var height = $('.container h1')["0"].offsetHeight;
    console.log(height);
    var x = event.offsetX;
    var y = event.offsetY;

    if(this !== event.target) {
      x = x + event.target.offsetLeft;
      y = y + event.target.offsetTop;
    }

    var xWalk = x / width * 5;
    var yWalk = y / height * 2;
    $('.container h1, .container h3, #pink, #yellow').css("text-shadow", `${xWalk}px ${yWalk}px 0 black`);
    console.log($('.container h1'));
  });
});
