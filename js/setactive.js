function setActive(link){
    document.querySelector('.navbar .nav-link.active').classList.remove('active');
    link.classList.add('active');
}