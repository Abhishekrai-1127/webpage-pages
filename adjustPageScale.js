// Function to adjust the page scale based on window width
function adjustPageScale() {
    const width = window.innerWidth;
    let scale = 1;

    if (width >= 992 && width <= 1600) {
        scale = 0.9; // Shrink by 90%
    } else if (width >= 700 && width <= 767) {
        scale = 0.8; // Shrink by 80%
    } else if (width >= 600 && width < 700) {
        scale = 0.75; // Shrink by 75%
    } else if (width <= 600) {
        scale = 0.5; // Shrink by 50%
    }

    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = 'top'; // Ensures scaling happens from the top
}

window.onload = adjustPageScale;

window.onresize = adjustPageScale;
