 $(function() {
     $(window).scroll(function() {
         if ($(this).scrollTop() < 720) {
             $('#navscroll').addClass("gris");
         } else {
             $('#navscroll').removeClass("gris");
             $('#navscroll').addClass("negro");
         }
     });
 });

 $(function() {
     $(window).scroll(function() {
         if ($(this).scrollTop() > 720) {
             $('#navscroll').addClass("negro");
         } else {
             $('#navscroll').removeClass("negro");
             $('#navscroll').addClass("gris");
         }
     });
 });