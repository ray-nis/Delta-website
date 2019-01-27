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



function openTab(evt, feature) {
    let tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(feature).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultfeature").click();