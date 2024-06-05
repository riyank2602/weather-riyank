'use strict'
const temp = document.querySelector('.temp');
const cityy = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind')
const searchinp = document.querySelector('.search input')
const searchbtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
const weather = document.querySelector('.weather')
const error = document.querySelector('.error')


const apikey = "7459e4697f7b1b076b5d26f9f7f36ba3"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const chechWeather = async function (city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)

    if (response.status === 404) {
        error.style.display = "block";
        weather.style.display = "none"
    }
    let data = await response.json();
    console.log(data);

    cityy.innerHTML = data.name
    temp.innerHTML = Math.round(data.main.temp) + "°c"
    humidity.innerHTML = data.main.humidity + "%"
    wind.innerHTML = data.wind.speed + " km/h"

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = 'images/clouds.png'
    }
    else if (data.weather[0].main === "Clear") {
        weatherIcon.src = 'images/clear.png'
    }
    else if (data.weather[0].main === "Rain") {
        weatherIcon.src = 'images/rain.png'
    }
    else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = 'images/drizzle.png'
    }
    else if (data.weather[0].main === "Mist") {
        weatherIcon.src = 'images/mist.png'
    }

    weather.style.display = "block"
    error.style.display = "none"
}

searchbtn.addEventListener('click', function () {
    chechWeather(searchinp.value)
})
