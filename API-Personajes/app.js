const URL = "https://thesimpsonsquoteapi.glitch.me/quotes"
const img = document.getElementById("img-card");
const titleCard = document.getElementById("title");
const descrptionCard = document.getElementById("description")

img.addEventListener("click", getApi)

function getApi() {
    fetch(URL)
    .then(response =>response.json())
    .then(data => {
        img.setAttribute('src', (data[0].image)),
        titleCard.textContent = data[0].character,
        descrptionCard.textContent = data[0].quote
    })
}