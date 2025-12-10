document.addEventListener('DOMContentLoaded', () => {

    //Weather

    const card = document.querySelector(".card");
    const apiKey = "6e05f2eaca81d9515a17426898efa538";
    const defaultCity = "Stockholm";

    async function getWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Could not fetch weather data");
        }
        return await response.json();
    }

    async function loadStockholmWeather() {
        if (!card) {
            console.error("Väderkortet kunde inte hittas. Kontrollera HTML-klassnamnet.");
            return;
        }

        try {
            const weatherData = await getWeatherData(defaultCity);
            displayWeatherInfo(weatherData);
        }
        catch (error) {
            console.error(error);
            displayError(`Could not load weather for ${defaultCity}`);
        }
    }

    function displayWeatherInfo(data) {
        const { name: city,
            main: { temp, humidity },
            weather: [{ description, id }] } = data;

        card.textContent = "";
        card.style.display = "flex";

        const cityDisplay = document.createElement("h1");
        const tempDisplay = document.createElement("p");
        const humidityDisplay = document.createElement("p");
        const descDisplay = document.createElement("p");
        const weatherEmoji = document.createElement("p");

        cityDisplay.textContent = city;
        tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
        humidityDisplay.textContent = `Humidity: ${humidity}%`;
        descDisplay.textContent = description;
        weatherEmoji.textContent = getWeatherEmoji(id);

        cityDisplay.classList.add("cityDisplay");
        tempDisplay.classList.add("tempDisplay");
        humidityDisplay.classList.add("humidityDisplay");
        descDisplay.classList.add("descDisplay");
        weatherEmoji.classList.add("weatherEmoji");

        card.appendChild(cityDisplay);
        card.appendChild(tempDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(weatherEmoji);
    }

    function getWeatherEmoji(weatherId) {
        switch (true) {
            case (weatherId >= 200 && weatherId < 300):
                return "⛈️";
            case (weatherId >= 300 && weatherId < 600):
                return "🌧️";
            case (weatherId >= 600 && weatherId < 700):
                return "🌨️";
            case (weatherId >= 700 && weatherId < 800):
                return "🌫️";
            case (weatherId === 800):
                return "☀️";
            case (weatherId >= 801 && weatherId < 810):
                return "☁️";
            default:
                return "❓";
        }
    }

    function displayError(message) {
        const errorDisplay = document.createElement("p");
        errorDisplay.textContent = message;
        errorDisplay.classList.add("errorDisplay");

        card.textContent = "";
        card.style.display = "flex";
        card.appendChild(errorDisplay);
    }

    loadStockholmWeather();

    // --- DROPPDOWN KLICK-KOD ---
    const dropdownButton = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener('click', () => {
            dropdownContent.classList.toggle('show');
        });
    }



    //Form

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
            if (inputElement) inputElement.classList.remove('error-input');
        }

        function showError(inputElement, errorElement, message) {
            if (errorElement) errorElement.textContent = message;
            if (inputElement) inputElement.classList.add('error-input');
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
        if (messageInput) messageInput.addEventListener('blur', validateForm);

        if (form) form.addEventListener('submit', validateForm);
    }

});