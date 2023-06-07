window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;
    var w = window.innerWidth

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    if(w <=425){
        header.classList.remove('scrolled');
    }
    if(w <=425){
        header.classList.remove('scrolled');
        header.setAttribute('style', 'position: relative;')
    }


});
