
//"const" are created called "hamburger" and "mobilenavbar" which refer to the class in HTML. Select the created "const" and add to them the "click" event, which gives the "is active" function registered in CSS. Thus, a navigation menu appears and when clicked, an animation occurs
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