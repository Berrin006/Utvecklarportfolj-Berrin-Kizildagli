document.addEventListener('DOMContentLoaded', () => {
    // --- FORM VALIDATION ---
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('fname');
    const nameError = document.getElementById('fnameError');
    const lnameInput = document.getElementById('lname');
    const lnameError = document.getElementById('lnameError');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');

    if (form) {
        function removeError(inputElement, errorElement) {
            if (errorElement) errorElement.textContent = '';
            if (inputElement) inputElement.style.borderColor = '#cbd5e1';
        }

        function showError(inputElement, errorElement, message) {
            if (errorElement) errorElement.textContent = message;
            if (inputElement) inputElement.style.borderColor = '#ef4444';
        }

        function validateForm(event) {
            if (event && event.type === 'submit') {
                event.preventDefault();
            }

            let isValid = true;

            const nameValue = nameInput ? nameInput.value.trim() : '';
            removeError(nameInput, nameError);

            if (nameValue === '') {
                showError(nameInput, nameError, 'First name cannot be empty.');
                isValid = false;
            } else if (nameValue.length < 2) {
                showError(nameInput, nameError, 'First name must be at least 2 characters.');
                isValid = false;
            }

            const lnameValue = lnameInput ? lnameInput.value.trim() : '';
            removeError(lnameInput, lnameError);

            if (lnameValue === '') {
                showError(lnameInput, lnameError, 'Last name cannot be empty.');
                isValid = false;
            } else if (lnameValue.length < 2) {
                showError(lnameInput, lnameError, 'Last name must be at least 2 characters.');
                isValid = false;
            }

            const emailValue = emailInput ? emailInput.value.trim() : '';
            removeError(emailInput, emailError);

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (emailValue === '') {
                showError(emailInput, emailError, 'Email cannot be empty.');
                isValid = false;
            } else if (!emailPattern.test(emailValue)) {
                showError(emailInput, emailError, 'Please enter a valid email address (e.g. name@domain.com).');
                isValid = false;
            }

            const messageValue = messageInput ? messageInput.value.trim() : '';
            removeError(messageInput, messageError);

            if (messageValue === '') {
                showError(messageInput, messageError, 'Message cannot be empty.');
                isValid = false;
            } else if (messageValue.length < 10) {
                showError(messageInput, messageError, 'Message must be at least 10 characters.');
                isValid = false;
            }

            if (isValid) {
                if (event && event.type === 'submit') {
                    form.submit();
                }
            } else if (event && event.type === 'submit') {
                alert('Please fill in the form correctly before submitting.');
            }

            return isValid;
        }

        if (nameInput) nameInput.addEventListener('blur', validateForm);
        if (lnameInput) lnameInput.addEventListener('blur', validateForm);
        if (emailInput) emailInput.addEventListener('blur', validateForm);
        if(messageInput && /messageInput/.test(messageInput)) {
            messageInput.addEventListener('blur', validateForm);
        }

        if (form) form.addEventListener('submit', validateForm);
    }
});