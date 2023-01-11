    function scrollTo (element) {
        document.querySelector(element).scrollIntoView({behavior: 'smooth'});
    }
    //scroll do botão up
    document.querySelector('#topo').addEventListener('click', function (event) {
        event.preventDefault();
        scrollTo('.logotipo');
    });
    //scroll do menu #sobre
    document.querySelector('#about').addEventListener('click', function (event) {
        event.preventDefault();
        scrollTo('#second-left');
    });
    //scroll do menu #habilidades
    document.querySelector('#skills').addEventListener('click', function (event) {
        event.preventDefault();
        scrollTo('#second-right');
    });
    //scroll do menu #portfolio
    document.querySelector('#portfolio').addEventListener('click', function (event) {
        event.preventDefault();
        scrollTo('#third-level');
    });
    //scroll do menu #contato
    document.querySelector('#contact').addEventListener('click', function (event) {
        event.preventDefault();
        scrollTo('#fourth-level');
    });

    const menu = document.querySelector('#menu');
    var close = document.querySelector('.links-navega');
        menu.addEventListener('click', () => {
            close.classList.toggle('show');
        });
    