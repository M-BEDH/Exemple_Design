document.addEventListener('DOMContentLoaded', function() {
    const slideshow = document.querySelector('.slideshow ul');
    let slideWidth = 350;
    
    setInterval(function() {
        slideshow.style.transition = 'transform 0.6s linear';
        slideshow.style.transform = `translateX(-${slideWidth}px)`;

        // Après la transition, replace l'image et revient sans transition
        setTimeout(function() {
            slideshow.appendChild(slideshow.querySelector('li'));
            slideshow.style.transition = 'none';
            slideshow.style.transform = 'translateX(0)';
        }, 1000); // Durée de l'animation
    }, 3500); // Intervalle de 3,5 secondes
});
