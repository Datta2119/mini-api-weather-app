const API_KEY = "b0a0752445d6281ed418660570fb3354"

const getWeatherData = (city) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => data)
        .catch((error) => console.error(error))
}


const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    // console.log(city)
    const data = await getWeatherData(city)
    showWeatherData(data)
}

const showWeatherData = (weatherData) => {
    // console.log(weatherData)

    document.getElementById('city-name').innerText = weatherData.name

    document.getElementById('weather-type').innerText = weatherData.weather[0].main
    
    document.getElementById('temp').innerText = weatherData.main.temp
    document.getElementById('min-temp').innerText = weatherData.main.temp_min
    document.getElementById('max-temp').innerText = weatherData.main.temp_max
}