//quando l'hamburger menu viene viene aperto mostra la X di chiusura
//quando la X viene cliccata viene mostrato nuovamente l'icoca dell'hamburger
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const closeIcon = document.querySelector('.close-icon');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');

        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.querySelector('.navbar-toggler-icon').classList.add('visually-hidden');
            closeIcon.classList.remove('visually-hidden');
        } else {
            navbarToggler.querySelector('.navbar-toggler-icon').classList.remove('visually-hidden');
            closeIcon.classList.add('visually-hidden');
        }
    });
});

//cambio sfondo navbar allo scroll della pagina
window.addEventListener('scroll', () => {
    var navbar = document.getElementById('navBar');
    if (window.scrollY > 50) 
        navbar.style = 'background-image: linear-gradient(109.6deg, rgba(254, 253, 205, 1) 11.2%, rgba(163, 230, 255, 1) 91.1%) !important;'
    else
        navbar.style = 'background-color: transparent !important';
});
