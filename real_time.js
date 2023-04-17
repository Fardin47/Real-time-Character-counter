const textEl = document.getElementById("textarea")
const totalcharEl = document.getElementById("total-counter")
const remaincharEl = document.getElementById("total-remaining")


textEl.addEventListener ("keyup", ()=> {
    updateCounter()
})

updateCounter()

function updateCounter() {
    totalcharEl.innerText = textEl.value.length
    remaincharEl.innerText = textEl.getAttribute("maxlength") - totalcharEl.innerText
}