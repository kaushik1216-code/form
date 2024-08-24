
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxoXrdzLZArrgQOI0M2JIzZyi5fJ5RSi-RAO2dPhsxfgynBHF5yKGuP4HcRGvLOyUZ2/exec';
        const form = document.forms['contact-form'];
        const loadingIndicator = document.getElementById('loading');

        form.addEventListener('submit', e => {
            e.preventDefault();

            // Show loading indicator
            loadingIndicator.style.display = 'block';

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    if (response.ok) {
                        //form reset
                        form.reset();
                        // Redirect to the specified URL
                        window.location.href = 'success.html';
                    } else {
                        throw new Error('Network response was not ok.');
                    }
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    // Hide loading indicator in case of error
                    loadingIndicator.style.display = 'none';
                });
        });
