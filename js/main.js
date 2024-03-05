const apiKey = '217dd534a88e5aefad04456485d91227'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.btn')
const image = document.querySelector('.weather__icon')
const weather = document.querySelector('.weather')
const temp = document.querySelector('.temp')
const cityName = document.querySelector('.city')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()
    console.log(data)

    temp.innerHTML = Math.round(data.main.temp) + ' °C'
    cityName.innerHTML = data.name
    humidity.innerHTML = Math.round(data.main.humidity) + ' %'
    wind.innerHTML = Math.round(data.wind.speed) + ' km/h'

    if(data.weather[0].main == 'Clouds') {
        image.src = 'img/clouds.png'
    } else if (data.weather[0].main == 'Clear') {
        image.src = 'img/clear.png'
    } else if (data.weather[0].main == 'Rain') {
        image.src = 'img/rain.png'
    } else if (data.weather[0].main == 'Drizzle') {
        image.src = 'img/drizzle.png'
    } else if (data.weather[0].main == 'Mist') {
        image.src = 'img/mist.png'
    } else {
        image.src = ''
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(searchBox.value)
})