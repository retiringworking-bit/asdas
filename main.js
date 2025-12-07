// Smooth scroll
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

// Modal Logic
function openModal(modalId, data = {}) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    // Populate data if needed
    if (modalId === 'petModal') {
        if (data.name) document.getElementById('modalPetName').textContent = data.name;
        if (data.price) document.getElementById('modalPetPrice').textContent = data.price;
    } else if (modalId === 'rentModal') {
        if (data.type) document.getElementById('modalRentType').textContent = data.type;
    } else if (modalId === 'contactModal') {
        if (data.subject) document.getElementById('modalSubject').textContent = data.subject;
    }

    modal.classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');

    // If no other modals are open, close overlay
    const openModals = document.querySelectorAll('.modal:not(.hidden)');
    if (openModals.length === 0) {
        document.getElementById('overlay').classList.add('hidden');
    }
}

// Close modals on overlay click
document.getElementById('overlay').addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach(m => m.classList.add('hidden'));
    document.getElementById('overlay').classList.add('hidden');
    // Also close nav menu if open
    document.querySelector('.nav-links').classList.remove('show');
});

// Mobile Menu
document.getElementById('menuBtn').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
    if (navLinks.classList.contains('show')) {
        document.getElementById('overlay').classList.remove('hidden');
    } else {
        document.getElementById('overlay').classList.add('hidden');
    }
});

// Highlight Active Nav Interaction (Intersection Observer)
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').substring(1) === entry.target.id) {
                    item.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));
