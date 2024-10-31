const apiKey = 'ee55d100f0f66097498f60fcc17f2840';
const city = 'Jakarta,ID';
const weatherCacheKey = 'weatherData'
const cacheExpiry = 3600000; // Cache duration (e.g., 1 hour in milliseconds)

async function getWeather() {
    // Check for cached data and timestamp
    const cachedData = localStorage.getItem(weatherCacheKey);
    const cachedTimestamp = localStorage.getItem(`${weatherCacheKey}_timestamp`);

    // If cached data exists and is still valid
    if (cachedData && cachedTimestamp && (Date.now() - cachedTimestamp < cacheExpiry)) {
        const weatherData = JSON.parse(cachedData);
        displayWeather(weatherData);
        console.log('Using cached data');
        return;
    }

    // Fetch new data from the API if no valid cached data
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const weatherData = await response.json();

        // Save the data and timestamp in localStorage
        localStorage.setItem(weatherCacheKey, JSON.stringify(weatherData));
        localStorage.setItem(`${weatherCacheKey}_timestamp`, Date.now());

        displayWeather(weatherData);
        console.log('Using API data');
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Display the data
function displayWeather(weatherData) {
    console.log(weatherData.weather[0].icon)
    let weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`

    document.querySelector(".temperature-value").innerHTML = `${weatherData.main.temp}°C`
    document.querySelector(".conditions-value").innerHTML = weatherData.weather[0].main
    document.querySelector(".weather-header img").src = weatherIconUrl
    document.querySelector(".humidity-value").innerHTML = `${weatherData.main.humidity}%`
}

getWeather();
