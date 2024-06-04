// Set starting slide index to 1 for slide show counter in html
let slideIndex = 1;
showSlides(slideIndex);

// Function that action moves slides along and keeps count of what slide a user is on
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function that actually shows what number the current slide a user is on is
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function that actually moves slides and corresponds to dot html div and slides html div
function showSlides(n) {
    // DOM scripting to connect to slides and dot divs in html
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    //n represents slide number
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}