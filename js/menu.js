
//"const" are created called "hamburger" and "mobilenavbar" which refer to the class in HTML. Select the created "const" and add to them the "sclick" event, which gives the "is active" function registered in CSS. Thus, a navigation menu appears and when clicked, an animation occurs
const hamburger = document.querySelector('.hamburger');
const mobilenavbar = document.querySelector('.mobilenavbar');
hamburger.addEventListener('click', function(){
    this.classList.toggle('is-active');
    mobilenavbar.classList.toggle('is-active');
})

//"const" is created called "a_link" which refers to the class in HTML. Select the created "const" and add to them the "click" event, which gives the "is active" function registered in CSS. Thus, a navigation menu appears and when clicked, an animation occurs
const a_link = document.querySelector('.a_link');
a_link.addEventListener('click', function(){
    this.classList.toggle('is-active');
})

// images const is created and we select "select all" and address all classes.
const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
// take the count variable and the width variable.
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    // calculate the width of the page by inserting the slider-line block. Assign the constand the width multiplied by the photograph and the height of the car for optimization
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    // to recalculate the slider size each time
    rollSlider(); 
}

init();
window.addEventListener('resize', init);
//  Add "resize" and "init" to change and adapt.
document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    // prescribe the code for the slider when the pages finished
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    // prescribe the code for the slider when the pages finished
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});
// I prescribe the values of the offset to the left by the width of the slider in pixels
function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

  