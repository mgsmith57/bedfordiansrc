(function() {
    function initNav() {
        const nav = document.querySelector('nav');
        const navIcon = document.querySelector('.nav-icon');
        const navLinks = document.querySelectorAll('nav a');

        function toggleNav() {
            if (nav.classList.contains('open')) {
                nav.classList.remove('open');
                navIcon.classList.remove('open');
            } else {
                nav.classList.add('open');
                navIcon.classList.add('open');
            }
        }

        navIcon.addEventListener('click', toggleNav);
        navLinks.forEach((it) => {
            it.addEventListener('click', (e) => {
                toggleNav();
            });
        });
    }

    initNav();
})();
