window.sr = ScrollReveal({reset: true});

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

var slideRight = {
    distance: '150%',
    origin: 'right',
    opacity: null
};

sr.reveal('.item1', {duration: 1500});

sr.reveal('.item2', {rotate: {x: 0, y: 80, z:0}});

sr.reveal('.item3', slideUp);

sr.reveal('.item4', slideRight);