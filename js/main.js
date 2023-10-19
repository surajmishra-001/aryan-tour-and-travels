document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('my-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const message = formData.get('Message');

        // Construct WhatsApp link with form data
        const whatsappLink = `https://wa.me/9810792081?text=Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

        // Open WhatsApp link in a new tab/window
        window.open(whatsappLink, '_blank');
    });
});