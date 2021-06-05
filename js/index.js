const fadingElements = document.querySelectorAll('.fade-in');
const slidingElements = document.querySelectorAll('.slide-in');

const options = {
    threshold: 0,
    rootMargin: '0px 0px -150px 0px'
}

const appearOnScroll = new IntersectionObserver(
    function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                console.log(entry.target);
                console.log("hello!");
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, 
options)

fadingElements.forEach(fading => {
    appearOnScroll.observe(fading);
})

slidingElements.forEach(slider => {
    appearOnScroll.observe(slider);
})

// const checkpoint = 1000;
 
// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   let opacity;
//   if (currentScroll <= checkpoint) {
//     opacity = 0;
//   } else {
//     opacity = currentScroll / checkpoint - 0.5;
//   }
//   document.querySelector(".firstSection").style.opacity = opacity;
// });