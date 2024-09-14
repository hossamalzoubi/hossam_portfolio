const sections = document.querySelectorAll('section, footer');
const navLinks = document.querySelectorAll('.navbar .nav-link');
window.onscroll = () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
    sections.forEach((section) => {
        let sectionTop = section.offsetTop - 150; 
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                document.querySelector(`.navbar a[href="#${sectionId}"]`).classList.add('active');
            });
        }
    });
};