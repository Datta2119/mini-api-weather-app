/*
Mini API Weather App:

This is a API based mini weather app where it fetches data from api based upon user's city name as an input

Weather API Resource:
OpenWeather Map 👉 https://api.openweathermap.org/data/2.5/weather?q=city&appid=API_KEY
*/


// Open weather API Token
const API_KEY = "b0a0752445d6281ed418660570fb3354"


// "getWeatherData" is a function that will return a Promise
// After fetching data from api
// It takes 1 parameter 👉 "city" [which is the city name that user will provide]
const getWeatherData = (city) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => data)
        .catch((error) => console.error(error))
}

// "searchCity" is the main function that will process all the necessary things
// After getting the values
// It's an Asynchronus one
// It takes 0 parameter
const searchCity = async () => {
    const city = document.getElementById('city-input');
    // console.log(city)
    
    //getWeatherData is set as await to hold the event thread
    // After targeting the input field it extracts the vlue in it and pass a parameter in getWeatherData
    const data = await getWeatherData(city.value)

    // This "if" condition is applied to clear the input field value after user searches their cities
    if (city.value != '') {
        city.value = ""
    }


    // The value we received in data, we passed that as a parameter in "showWeatherData" function
    // Which demands data type parameter
    showWeatherData(data)
}


// "showWeatherData" is the function that is responsible to display weather data
// City name, Weather type, Temperature, Minimum Temperature, Maximum Temperature and so on can be done.
// It takes 1 parameter 👉 "weatherData" [which is passes in the searchCity function in the name of "data"]
const showWeatherData = (weatherData) => {
    // console.log(weatherData)

    document.getElementById('city-name').innerText = weatherData.name

    document.getElementById('weather-type').innerText = weatherData.weather[0].main
    
    document.getElementById('temp').innerText = weatherData.main.temp
    document.getElementById('min-temp').innerText = weatherData.main.temp_min
    document.getElementById('max-temp').innerText = weatherData.main.temp_max
}