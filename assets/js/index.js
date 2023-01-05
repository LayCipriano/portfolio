var btn = document.getElementById('btn-moreLess');
        
btn.addEventListener('click', function(){
    var thirdDown = document.querySelector('.third-down');
    // var moreLess = document.querySelector('.btn-moreLess');
    thirdDown.classList.toggle('active');
    // moreLess.classList.toggle('active');

    if ( thirdDown.classList.contains('active')) {
        return btn.textContent = 'Ver Menos';
    } else {
        return btn.textContent = 'Ver Mais';
    }
});
