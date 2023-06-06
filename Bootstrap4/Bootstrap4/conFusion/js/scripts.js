var reserveTableButton = document.getElementById("reserveTableButton");
reserveTableButton.addEventListener("click", function () {
  $('#reservationModal').modal('toggle');
});

var loginLink = document.getElementById("loginLink");
loginLink.addEventListener("click", function (event) {
  event.preventDefault();
  $('#loginModal').modal('toggle');
});
$(document).ready(function () {
  // Single carousel control button
  var carouselButton = $("#carouselButton");
  var carouselIcon = $("#carousel-button-icon");

  // Initialize the carousel
  $("#myCarousel").carousel();

  // Handle carousel button click
  carouselButton.click(function () {
      if (carouselIcon.hasClass('fa-pause')) {
          // Carousel is currently cycling, pause it
          $("#myCarousel").carousel('pause');
          carouselIcon.removeClass('fa-pause');
          carouselIcon.addClass('fa-play');
      } else {
          // Carousel is currently paused, start cycling
          $("#myCarousel").carousel('cycle');
          carouselIcon.removeClass('fa-play');
          carouselIcon.addClass('fa-pause');
      }
  });
});