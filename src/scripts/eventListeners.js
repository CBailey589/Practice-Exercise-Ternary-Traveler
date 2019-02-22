import printToDOM from "./utlities/printToDOM";
import API from "./utlities/apiManager";
import LOCATIONS from "./utlities/locationManager"

function eventListeners() {
    document.querySelector("body").addEventListener("click", () => {
        if (event.target.id === "startNewInterest") {
            let form = document.querySelector("#newInterestForm")
            form.classList.toggle("hidden")
            form.classList.toggle("prominent")
            document.querySelector("#output").classList.toggle("foggy")
        }
        else if (event.target.id === "submitNewInterest") {
            if (document.querySelector("#interestName").value !== "" && document.querySelector("#interestLocation").value !== "" && document.querySelector("#interestDescription").value !== "") {
                let object = LOCATIONS.BUILDINTERESTOBJECT()
                return API.POST("interests", object)
                    .then(() => window.location.reload(false))
            } else {
                alert("All Fields Need To Be Filled.")
            }
        }
        else if (event.target.id === "cancelNewInterest" || event.target.id === "cancelDelete" || event.target.id === "cancelReview") {
            window.location.reload(false)
        }
        else if (event.target.id.startsWith("remove--")) {
            let form = document.querySelector("#doubleCheckDeleteSection")
            if (form.classList.contains("hidden")) {
                form.classList.toggle("hidden")
                form.classList.toggle("prominent")
                document.querySelector("#output").classList.toggle("foggy")
            }
            let id = parseInt(event.target.id.split("--")[1])
            let name = document.querySelector(`#interestTitle--${id}`).textContent
            document.querySelector("#deleteInterestName").textContent = ""
            printToDOM(name, "#deleteInterestName")
            document.querySelector("#idToDelete").value = id
        }
        else if (event.target.id === "delete") {
            let id = parseInt(document.querySelector("#idToDelete").value)
            return API.DELETE(`interests/${id}`)
                .then(() => alert("Your location of interest has been deleted"))
                .then(() => window.location.reload(false))
        }
        else if (event.target.id.startsWith("startReview--")) {
            let id = parseInt(event.target.id.split("--")[1])
            document.querySelector(`#newReviewSection--${id}`).classList.toggle("hidden")
            let button = document.querySelector(`#startReview--${id}`)
            document.querySelector(`#interest--${id}`).removeChild(button)
        }
        else if (event.target.id.startsWith("submitReview--")) {
            let id = parseInt(event.target.id.split("--")[1])
            if (document.querySelector(`#newReview--${id}`).value !== "") {
                return API.GET(`interests/${id}`)
                    .then((res) => {
                        let object = res
                        object.review = document.querySelector(`#newReview--${id}`).value
                        return object
                    })
                    .then((object) => {
                        API.EDIT(`interests/${id}`, object)
                    })
                    .then(() => window.location.reload(false))
            } else {
                alert("Review FIeld Needs To Be Filled.")
            }
        }
    })
}

export default eventListeners