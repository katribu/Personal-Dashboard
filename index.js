
// Fetching Background Image - works fine!//

fetch("https://api.unsplash.com/photos/random?client_id=FYb4c3CLs5fUqJ7lsLfofV9-G-B1SNtrJuPIkPvBsy8&count=5&query=landscape")
    .then(res=> {
        if(!res.ok){
           throw Error("Image not found. Try again.")
        }
        return res.json()
        })
    .then(data => {
        document.body.style.backgroundImage = `url(${data[0].urls.full})`
        document.getElementById("author").textContent = `Background by: ${data[0].user.name}`
    })
    .catch(err => console.error(err))



//Weather API Corner --> works!!//

const apiKey = "bc5fa77fb33de57011c6be445beb3f4c"

fetch(`https://api.openweathermap.org/data/2.5/weather?q=oslo&appid=${apiKey}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
//             console.log(data)
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img class = "weatherIcon" src=${iconUrl} />
                <div class = "weatherInfo">
                <span>${Math.floor(data.main.temp)}° C</span>
                <span>${data.name}</span>
                </div>
            `
        })
        .catch(err => console.error(err))


// Time portion --> works!!!//

function getTime(){
    const date = new Date()
    let currentTime = date.toLocaleTimeString("en-gb", {timeStyle: "medium"})
    document.getElementById("time").textContent = currentTime
}

setInterval(getTime, 1000)



fetch("https://api.api-ninjas.com/v1/quotes", {
    method:'GET',
    headers: {'X-Api-Key': 'EYeusuV7KAshEMZrUzhDcg==rIijamsp5zUZTC4i'}
})
    .then(res => res.json())
    .then(data => {
        let quotesArr = data[0]
        document.getElementById("quote").innerHTML = `
        <p class = "quote">${quotesArr.quote}</p>
        <p class = "quoteAuthor">- ${quotesArr.author}</p>`
    })



    
