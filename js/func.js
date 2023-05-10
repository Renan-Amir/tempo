const key = "91f6991e887c73143baa9eeb933b0b70"

function datascreen(data) {
console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".tempMax").innerHTML = "Max " + Math.floor(data.main.temp_max) +"°C"
    document.querySelector(".tempMin").innerHTML = "Min " +Math.floor(data.main.temp_min) +"°C"
    document.querySelector(".forecast").innerHTML = data.weather[0].description
    document.querySelector(".moisture").innerHTML = "Umidade " + data.main.humidity + "%"
    document.querySelector(".img-clouds").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCt(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    datascreen(data)
}
function clickBt() {
    const city = document.querySelector(".input-city").value
    searchCt(city)
}