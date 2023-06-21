const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

localStorage.setItem("API_KEY", "");

document.addEventListener("DOMContentLoaded", function () {
  let showWeather = document.getElementById("appContent_info");

  function buscar() {
    let inputVal = document.getElementById("input").value;
    fetch(BASE_URL + inputVal + "&appid=" + localStorage.getItem("API_KEY"))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        showWeather.innerHTML = `
        <div class="card">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">Temperatura: ${data.main.temp}</p>
            <p class="card-text">Sensação térmica: ${data.main.feels_like}</p>
            <p class="card-text">Umidade: ${data.main.humidity}</p>
            <p class="card-text">Pressão: ${data.main.pressure}</p>
            <p class="card-text">Temperatura máxima: ${data.main.temp_max}</p>
            <p class="card-text">Temperatura mínima: ${data.main.temp_min}</p>
            <p class="card-text">Descrição: ${data.weather[0].description}</p>
            </div>
        </div>
        `;
      });
  }

  document.getElementById("button").addEventListener("click", buscar);
});
