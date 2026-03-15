const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all fields!';
        return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email!';
        return;
    }

    formMessage.style.color = '#00ff7f';
    formMessage.textContent = 'Message sent successfully!';

    // Clear form
    form.reset();
});
