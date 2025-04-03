
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".video-slideshow video");
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");

         // Slow down video playback speed
        slides[currentIndex].playbackRate = 1;  // Adjust speed (0.5 = half speed, 1 = normal, 2 = double speed)
    }

    slides[currentIndex].classList.add("active");
    slides[currentIndex].playbackRate = 1; // Set initial video speed
    setInterval(showNextSlide, 3000);
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});