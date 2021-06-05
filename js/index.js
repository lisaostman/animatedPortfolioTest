const fadingElements = document.querySelectorAll('.fade-in');
const slidingElements = document.querySelectorAll('.slide-in');
const navElements = document.querySelectorAll('.navBar');

const options = {
    threshold: 0,
    rootMargin: '0px 0px -150px 0px'
}

const options2 = {
    threshold: 0
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
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, 
options)

const appearAfterGone = new IntersectionObserver(
    function (
        entries,
        appearAfterGone
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                console.log(entry.target);
                console.log("goodbye!");
                document.querySelector(".stickyNav").classList.add('notHidden');
                appearOnScroll.unobserve(entry.target);
            }
            else {
                return;
            }
        })
    }, 
options2)

fadingElements.forEach(fading => {
    appearOnScroll.observe(fading);
})

slidingElements.forEach(slider => {
    appearOnScroll.observe(slider);
})

navElements.forEach(navig => {
    appearAfterGone.observe(navig);
})

document.addEventListener("click", function (event) {
    console.log(event.target.id);
    let elClicked = event.target.id;
    let relatedText = document.querySelector("#" + elClicked + "Text");
    if (relatedText.classList.contains("hidden")) {
        relatedText.classList.remove("hidden");
    } else {
        relatedText.classList.add("hidden");
    }
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