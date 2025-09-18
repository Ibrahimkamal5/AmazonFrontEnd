// Select all images inside ".header-slider ul"
let imgs = document.querySelectorAll(".header-slider ul img");
// Select the control buttons (previous - next)
let control_prev = document.querySelector(".control-prev");
let control_next = document.querySelector(".control-next");


// Variable to track the current image index (starts at 0)
let n = 0;

// Function to change the visible image
function sliderChange() {
    // Hide all images first
    for(const img of imgs) {
        img.style.display = "none";
    }
    // Show only the current image (based on n)
    imgs[n].style.display = "block";
}
// Call the function once to display the first image
sliderChange();


// When clicking the "next" button
control_next.addEventListener("click", (e) => {
    if (n < imgs.length - 1) {
        // If not the last image → go to the next one
        n++;
    } else {
        // If it’s the last image → loop back to the first one
        n = 0;
    }
    // Update the slider after changing
    sliderChange();
});

// When clicking the "previous" button
control_prev.addEventListener("click", (e) => {
    if (n > 0) {
        // If not the first image → go to the previous one
        n--;
    } else {
        // If it’s the first image → jump to the last one
        n = imgs.length - 1;
    }
    // Update the slider after changing
    sliderChange();
});

//! Slider products Images
const scrollContainer = document.querySelectorAll(".products");

for(let item in scrollContainer){
    item.addEventListener("wheel" , (e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    })
}
