window.addEventListener('scroll', function() {
    var logo = document.getElementById('logo');
    var size = Math.max(60, 100 - window.pageYOffset / 5);
    logo.style.height = size + 'px';
});