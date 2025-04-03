document.addEventListener('DOMContentLoaded', () => {
    // Example: Adding a click event to each subject card to show an alert
    const subjectCards = document.querySelectorAll('.subject-card');
    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            const subjectName = card.querySelector('h3').textContent;
            alert(`You clicked on ${subjectName}! Let's start learning!`);
        });
    });

    // Example: Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example: Toggle dark mode
    const toggleDarkModeButton = document.createElement('button');
    toggleDarkModeButton.textContent = 'Toggle Dark Mode';
    toggleDarkModeButton.style.position = 'fixed';
    toggleDarkModeButton.style.top = '10px';
    toggleDarkModeButton.style.right = '10px';
    document.body.appendChild(toggleDarkModeButton);

    toggleDarkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});