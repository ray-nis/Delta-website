let index = 0;
slider();


function slider() {
    let slides = document.querySelectorAll(".slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block";
    setTimeout(slider, 5000);
}