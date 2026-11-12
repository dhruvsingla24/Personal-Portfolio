// --- 9. Dark Mode and Light Mode Handling ---
const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const themeIcon = themeBtn.querySelector('i');

// Check saved theme preference
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('portfolio-theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('portfolio-theme', 'light');
    }
});

// --- 8. Contact Form Validation ---
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    formStatus.style.display = 'block';

    if (name === '' || email === '' || message === '') {
        formStatus.textContent = 'Error: Please fill out all required fields.';
        formStatus.style.backgroundColor = 'rgba(255, 118, 117, 0.1)';
        formStatus.style.color = '#d63031';
        formStatus.style.border = '1px solid #d63031';
    } else if (!email.includes('@') || !email.includes('.')) {
        formStatus.textContent = 'Error: Please enter a valid email address.';
        formStatus.style.backgroundColor = 'rgba(255, 118, 117, 0.1)';
        formStatus.style.color = '#d63031';
        formStatus.style.border = '1px solid #d63031';
    } else {
        formStatus.textContent = 'Success: Your message has been validated and sent!';
        formStatus.style.backgroundColor = 'rgba(85, 239, 196, 0.1)';
        formStatus.style.color = '#00b894';
        formStatus.style.border = '1px solid #00b894';
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
});

// --- 10. Interactive Navigation (Active Link Highlighting) ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // If scroll position is within the section
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});