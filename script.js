var userName = '';

    function toggleImage() {
        var logoImage = document.getElementById('logoImage');
        if (logoImage.src.endsWith('university-logo.png')) {
            logoImage.src = 'new-image.png'; // Change the image source to your new image
        } else {
            logoImage.src = 'university-logo.png';
        }
    }

    function promptForName() {
        userName = prompt('Please enter your name:');
        if (userName !== null && userName !== '') {
            var welcomeMessage = 'Welcome ' + userName;
            document.getElementById('header').innerHTML = '<h1 id="header">' + welcomeMessage + '</h1>';
            document.getElementById('namePrompt').innerHTML = 'Your name: ' + userName;
        } else {
            document.getElementById('header').innerHTML = originalHeaderText; // Restore the original header text
            document.getElementById('namePrompt').innerHTML = ''; // Clear the name if the user cancels or enters nothing
        }
    }