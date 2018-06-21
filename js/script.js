// watch for clicks on any link that points to an anchor and smoothly scroll down to it
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

// create active nav-bar
var links = document.getElementsByClassName('nav-link'); // more specific selector if other links
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  link.onclick = function() {
    var prev = document.getElementsByClassName('active');
    if (prev && prev[0]) {
      prev[0].className = 'nav-link'; // if using other clases, be better about this
    }
    this.className += ' active';
  };
}

$(window).on('resize', function() {
  if ($(this).width() < 700) {
    $('.nav-link').removeClass('active');
  }
});
