const title = document.getElementById("activity")
const control = document.getElementById("get-activity")
const header = document.getElementById("name")

function activity() {
fetch ("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        title.textContent = data.activity
        header.textContent = "🤪 Fun Bot 💃"
        document.body.classList.add("fun")
    })
}

control.addEventListener("click", activity)
