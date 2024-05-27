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

    function initCal() {
        const monthsDivs = document.querySelectorAll(".calendar-month[data-date]");
        const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
        monthsDivs.forEach(it => {
            const date = new Date(it.getAttribute('data-date'));
            if (date < startOfMonth) {
               it.style.display = 'none';
            }
        })
    }

    initNav();
    initCal();
})();
