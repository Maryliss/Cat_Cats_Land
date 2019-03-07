// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .

//= require js/bootstrap.min
//= require js/card.min
//= require js/gmap3.min
//= require js/imagesloaded.pkgd.min
//= require js/isotope.pkgd.min
//= require js/iziToast.min
//= require js/jquery.animateNumber.min
//= require js/jquery.countdown.min
//= require js/jquery.easing.min
//= require js/jquery.easy-autocomplete.min
//= require js/jquery.fancybox.min
//= require js/jquery.inview.min
//= require js/jquery.min
//= require js/modernizr.min
//= require js/nouislider.min
//= require js/owl.carousel.min
//= require js/parallax-scroll.min
//= require js/popper.min

$(function() {
  $(".stripe-button-el").replaceWith('<button type="submit" class="btn btn-primary btn-block"><i class="fas fa-credit-card"></i> Paiement</button>');
});