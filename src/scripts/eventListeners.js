import printToDOM from "./utlities/printToDOM";
import API from "./utlities/apiManager";

function eventListeners() {
    document.querySelector("body").addEventListener("click", () => {
        if (event.target.id === "startNewInterest") {
            let form = document.querySelector("#newInterestForm")
            form.classList.toggle("hidden")
            form.classList.toggle("prominent")
        }
        else if (event.target.id === "cancelNewInterest" || event.target.id === "cancelDelete") {
            window.location.reload(false)
        }
        else if (event.target.id.startsWith("remove--")) {
            let form = document.querySelector("#doubleCheckDeleteSection")
            if (form.classList.contains("hidden")) {
                form.classList.toggle("hidden")
                form.classList.toggle("prominent")
            }
            let id = parseInt(event.target.id.split("--")[1])
            let name = document.querySelector(`#interestTitle--${id}`).textContent
            document.querySelector("#deleteInterestName").textContent = ""
            printToDOM(name, "#deleteInterestName")
            document.querySelector("#idToDelete").value = id
        }
        else if (event.target.id === "delete") {
            let id = parseInt(document.querySelector("#idToDelete").value)
            let string = `interests/${id}`
            return API.DELETE(string)
                .then(() => window.location.reload(false))
        }
    })
}

export default eventListeners