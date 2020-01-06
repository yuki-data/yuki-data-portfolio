$(document).ready(function() {
  "use strict";
  $('nav a[href^="#"]').on("click", function(e) {
    e.preventDefault();
    var id = this.hash;
    if (!id) {
      return;
    }
    var $target = $(id);
    $("html, body").animate(
      {
        scrollTop: $target.offset().top
      },
      300
    );
  });
});
