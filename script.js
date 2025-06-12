document.addEventListener('DOMContentLoaded', () => {
    // Start Fade-in Animation on page load
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = 0;
        let opacity = 0;
        let fadeInInterval = setInterval(() => {
            if (opacity < 1) {
                opacity += 0.05;
                mainContent.style.opacity = opacity;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 50);
    }
    // End Fade-in Animation

    // Start Form Validation for Contact Us page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageTextarea = document.getElementById('message');

            let isValid = true;

            // Validate Name
            if (nameInput.value.trim() === '') {
                alert('Nama tidak boleh kosong.');
                nameInput.focus();
                isValid = false;
            } else if (emailInput.value.trim() === '') {
                alert('Email tidak boleh kosong.');
                emailInput.focus();
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                alert('Format email tidak valid.');
                emailInput.focus();
                isValid = false;
            } else if (messageTextarea.value.trim() === '') {
                alert('Pesan tidak boleh kosong.');
                messageTextarea.focus();
                isValid = false;
            }

            if (isValid) {
                alert('Pesan Anda berhasil dikirim! (Simulasi)');
                contactForm.reset(); // Clear the form
            }
        });
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
    // End Form Validation

    // Add active class to current page in navigation
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}); 