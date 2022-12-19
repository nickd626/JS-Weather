let key = '616642a1049c712a25245460c9cd38e3';

let result = document.getElementById("result");

let searchBtn = document.getElementById("search-btn");
let cityRef= document.getElementById("city");

let getWeather = () => {
    let cityValue = cityRef.value;
    if(cityValue.length == 0){
        result.innerHTML = `<h3 class="msg">Please enter a city name.</h3>`;
    }

    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=imperial`;
        cityRef.value = "";
        fetch(url)
        .then((resp) => resp.json())
        
        .then((data) => {
               
            result.innerHTML = `
            <div class="card shadow-0 border">
            <div class="card-body p-4">
              <h4 class="mb-1 sfw-normal">${cityValue}</h4>
              <p class="mb-2">Current temperature: <strong>${data.main.temp}</strong></p>
              <p>Feels like: <strong>${parseInt(data.main.feels_like)}</strong></p>
              <p>
                Max: <strong>${parseInt(data.main.temp_max)}</strong>
            </p><p>
                Min: <strong>${parseInt(data.main.temp_min)}</strong>
              </p>

              <div class="d-flex flex-row align-items-center">
                <p class="mb-0 me-4">${data.weather[0].main} -- ${data.weather[0].description}</p>
                <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
              </div>
            </div>
          </div>
            `;
        })
        .catch(()=>{
            result.innerHTML = `<h3 class="msg">City not found.</h3>`
        })
    }
};
searchBtn.addEventListener("click", getWeather);
