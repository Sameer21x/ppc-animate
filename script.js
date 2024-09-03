// $(document).ready(function () {
//     let hidden = false;
//     $("#hide-lines").click(function () {
//         let orbitLines = $(".orbit");
//         if (hidden) {
//             hidden = false;
//             orbitLines.css("border-style", "solid");
//             $(this).html("Hide orbit lines");
//         } else {
//             hidden = true;
//             orbitLines.css("border-style", "hidden");
//             $(this).html("Show orbit lines");
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const pauseButton = document.getElementById("pauseButton");
    const orbits = document.querySelectorAll(".orbit");
    let isPaused = false;

    function toggleAnimation() {
        orbits.forEach(orbit => {
            if (isPaused) {
                // Resume animation
                orbit.style.animationPlayState = 'running';
                pauseButton.innerHTML = '<i class="fas fa-pause"></i>'; // Change icon to pause
            } else {
                // Pause animation
                orbit.style.animationPlayState = 'paused';
                pauseButton.innerHTML = '<i class="fas fa-play"></i>'; // Change icon to play
            }
        });
        isPaused = !isPaused;
    }

    pauseButton.addEventListener("click", toggleAnimation);
});
