const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.icon');
        const isActive = content.classList.contains('active');
        
        // Close all accordions
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('active');
        });
        
        // Reset all icons to plus
        document.querySelectorAll('.icon').forEach(img => {
            img.src = './assets/images/icon-plus.svg';
        });
        
        // If the clicked one wasn't active, open it
        if (!isActive) {
            content.classList.add('active');
            icon.src = './assets/images/icon-minus.svg';
        }
    });
});