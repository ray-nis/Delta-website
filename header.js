function menuSlide() {
    $(".nav").slideToggle("fast", "linear");
}
$("#menuButton").click(menuSlide);

let url = window.location.href;
let lastPart = url.substr(url.lastIndexOf('/') + 1);

if (lastPart === "" || lastPart === "index.html") {
    document.querySelector("#m1").style.color = "red";
} else if (lastPart === "about.html") {
    document.querySelector("#m2").style.color = "red";
} else if (lastPart === "services.html") {
    document.querySelector("#m3").style.color = "red";
} else if (lastPart === "portfolio.html") {
    document.querySelector("#m4").style.color = "red";
} else if (lastPart === "pricing.html") {
    document.querySelector("#m5").style.color = "red";
} else if (lastPart === "contact.html") {
    document.querySelector("#m6").style.color = "red";
}

let currentScroll = document.documentElement.scrollTop;
let arrow = document.querySelector("#up-arrow");

window.onscroll = function () {
        arrow.display = "none";
        currentScroll = document.documentElement.scrollTop;
        if (currentScroll < 400) {
            arrow.style.display = "none";
        } else if (currentScroll > 400) {
            arrow.style.display = "block";
        }
}