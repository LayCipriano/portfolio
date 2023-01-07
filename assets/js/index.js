function scrollTo (element) {
    document.querySelector(element).scrollIntoView({behavior: 'smooth'});
}

document.querySelector('#topo').addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo('.logotipo');
});

document.querySelector('#about').addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo('#second-left');
});

document.querySelector('#skills').addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo('#second-right');
});

document.querySelector('#portfolio').addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo('#third-level');
});

document.querySelector('#contact').addEventListener('click', function (event) {
    event.preventDefault();
    scrollTo('#fourth-level');
});