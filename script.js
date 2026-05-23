let temp = document.querySelector("#temp");
let city = document.querySelector("#city");
let input = document.querySelector("#user_data");
let btn = document.querySelector("#user_btn");
let humidity = document.querySelector("#humidity");
let feel = document.querySelector("#feel");
let wind = document.querySelector("#wind");
let condition = document.querySelector("#condition");
let body = document.querySelector("body");
let owner = document.querySelector("#owner");
let je = "Germany";

btn.addEventListener("click",
    () => {
        je = input.value;
        console.log(je);
        djh();
    })

async function djh() {
    let mydata = `https://api.openweathermap.org/data/2.5/weather?q=${je}&appid=e405b5324908da8d44e445b9c12b6bbb&units=metric`;
    try {
        let dh = await fetch(mydata);
        let dfs = await dh.json();
        console.log(dfs);
        temp.innerHTML = `${Math.round(dfs.main.temp)}°`;
        city.innerHTML = `City : ${dfs.name}`;
        humidity.innerHTML = `Humidity : ${dfs.main.humidity}%`;
        feel.innerHTML = `Feels Like : ${Math.round(dfs.main.feels_like)}°`;
        wind.innerHTML = `Wind Speed : ${dfs.wind.speed}kmph`;
        condition.innerHTML = `${dfs.weather[0].description}`;
        if (condition.innerHTML === "snow" && window.innerWidth > 600) {
            body.style.backgroundImage = "url('snow_pc.jpg')";
            body.style.backgroundSize = "cover";
            owner.style.color = "white";
        }
        else if (condition.innerHTML === "haze" && window.innerWidth > 600) {
            body.style.backgroundImage = "url('haze_pc.jpg')";
            body.style.backgroundSize = "cover";
             body.style.color = "black"
            owner.style.color = "white";
        }
        else if (condition.innerHTML === "scattered clouds" && window.innerWidth > 600) {
            body.style.backgroundImage = "url('scattered_clouds.jpg')";
            body.style.backgroundSize = "cover";
            body.style.color = "white"
            owner.style.color = "white";
        }
        else if (condition.innerHTML === "moderate rain" && window.innerWidth > 600) {
            body.style.backgroundImage = "url('rain.jpg')";
            body.style.backgroundSize = "cover";
            body.style.color = "white"
            owner.style.color = "white";
        }
        // else if (condition.innerHTML === "haze") {
        //     body.style.backgroundImage = "url('haze.png')";
        //     body.style.backgroundSize = "cover";
        //     owner.style.color = "white";
        // }
    } catch {
        alert("Failed To Load Data.")
    }
}
djh();