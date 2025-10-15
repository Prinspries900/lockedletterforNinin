document.addEventListener('DOMContentLoaded', () => {
    const correctCombo = '1216';
    const unlockButton = document.getElementById('unlock-button');
    const comboInputs = [
        document.getElementById('digit1'),
        document.getElementById('digit2'),
        document.getElementById('digit3'),
        document.getElementById('digit4')
    ];
    const messageDisplay = document.getElementById('message');

    // Auto-focus on next input and handle backspace
    comboInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            if (input.value.length === 1 && index < comboInputs.length - 1) {
                comboInputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
                comboInputs[index - 1].focus();
            }
        });
    });

    // Check the combination and redirect
    unlockButton.addEventListener('click', () => {
        const enteredCombo = comboInputs.map(input => input.value).join('');

        if (enteredCombo === correctCombo) {
            messageDisplay.textContent = 'Click! Unlocked!';
            messageDisplay.style.color = '#2ecc71'; // Green color

            // *** CRITICAL CHANGE: Redirect to the new HTML file ***
            setTimeout(() => {
                window.location.href = 'love_letter.html'; 
            }, 1000); // Give a 1-second delay for the message to display

        } else {
            messageDisplay.textContent = 'Incorrect combination. Try again!';
            messageDisplay.style.color = '#e74c3c'; // Red color

            // Clear and refocus
            comboInputs.forEach(input => input.value = '');
            comboInputs[0].focus(); 
        }
    });
});