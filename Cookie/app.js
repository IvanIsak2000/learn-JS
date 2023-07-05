const tl = gsap.timeline({defaults: {duration: 1}})

tl.fromTo('.cookie-container', {y: 100, opacity: 0}, {y: 0, opacity:1})
tl.fromTo('.cookie', {opacity: 0, x: -50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'})