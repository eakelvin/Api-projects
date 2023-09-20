
const imgProp = document.getElementById("img")
const wordProp = document.getElementById("word")


fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(data => {
    console.log(data)
    imgProp.innerHTML = `<img src=${data.message} />`
})

fetch("https://apis.scrimba.com/bored/api/activity")
.then(response => response.json())
.then(data => {
    console.log(data)
    wordProp.innerHTML = data.activity
})