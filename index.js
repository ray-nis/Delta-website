$(document).ready(function () {
    $('#header').load('pages/header.html');  
});


function menuSlide() {
    $(".nav").slideToggle("fast", "linear");
}
$("#menuButton").click(menuSlide);