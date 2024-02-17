let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const staticEffect = document.querySelector('.static-effect');

// Initially hide the video
staticEffect.style.display = 'none';

function changeSlide(direction) {
    // Show the video before playing
    staticEffect.style.display = 'block';

    staticEffect.load();
    staticEffect.play();

    setTimeout(() => {
        slides[currentSlide].style.transform = "translateY(100%)";

        if (direction === "next") {
            currentSlide = (currentSlide + 1) % slides.length;
        } else if (direction === "prev") {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        }

        slides[currentSlide].style.transform = "translateY(0)";

        // Hide the video after transition
        staticEffect.style.display = 'none';
    }, 300); // Adjust this duration to match the video's length if needed
}

function throttle(func, limit = 1200) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

$(window).on('load', addNoise);

function addNoise() {
    document.querySelector('.noise-wrapper').style.opacity = 1;
  }


document.addEventListener('keydown', (event) => {
    if (event.key === 'f' ) {
        changeSlide("next");
    } 

});




