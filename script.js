document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.list-tabs').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            const targetId = event.target.getAttribute('data-target');
            if (targetId) {
                // Remove 'active' class from all tabs and hide all contents
                document.querySelectorAll('.list-tabs a').forEach(tab => tab.classList.remove('active'));
                document.querySelectorAll('.tab-contents').forEach(content => content.classList.remove('actives'));

                // Add 'active' class to the clicked tab
                event.target.classList.add('active');

                // Show the corresponding tab content
                document.getElementById(targetId).classList.add('actives');
            }
        }
    });
});