const tl = gsap.timeline({defaults: {duration: 0.5, ease: "power1.out"}})

tl.fromTo('.cookie-container', {scale: 0 }, {scale: 1 , ease: "elastic.out(1, 0.4)"})
tl.fromTo('.cookie', {opacity: 0, x: -50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'})

const button = document.querySelector('button');

button.addEventListener('click', () => {
    gsap.to('.cookie-container', {opacity: 0, y: 100, duration: 0.5})
})