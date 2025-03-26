const toggleButton = document.getElementById('toggleButton');
const navLinks = document.getElementById('navLinks');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Simple script to handle the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
  
    // Optionally, clear the form fields after submission
    document.getElementById('contact-form').reset();
  });