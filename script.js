document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
        element.style.opacity = 1; // Ensure the element is visible after the delay
    });
});
