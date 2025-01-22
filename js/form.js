const form = document.getElementById('send-message');

function checkFormFields() {
    const submitButton = form.querySelector('button[type="submit"]');
    const allFieldsFilled = Array.from(form.elements)
        .filter(
            element =>
                element.tagName === 'INPUT' ||
                element.tagName === 'TEXTAREA' ||
                element.tagName === 'SELECT' ||
                element.type === 'checkbox'
        )
        .every(input => {
            if (input.type === 'checkbox') {
                return input.checked;
            }
            if (input.tagName === 'SELECT') {
                return input.value !== '';
            }
            return input.value.trim() !== '';
        });

    if (allFieldsFilled) {
        submitButton.disabled = false;
        submitButton.classList.remove('inactive');
    } else {
        submitButton.disabled = true;
        submitButton.classList.add('inactive');
    }
}

if (form) {
    window.addEventListener('DOMContentLoaded', checkFormFields);
    form.addEventListener('input', checkFormFields);
    form.addEventListener('change', checkFormFields);
}
