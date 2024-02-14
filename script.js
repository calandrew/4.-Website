window.addEventListener('scroll', function() {
    var logoContainer = document.querySelector('.logo-container');
    var size = Math.max(60, 100 - window.pageYOffset / 5);
    logoContainer.style.height = size + 'px';
});

