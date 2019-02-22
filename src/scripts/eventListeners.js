function eventListeners() {
    document.querySelector("body").addEventListener("click", () => {
        if (event.target.id === "startNewInterest") {
            let form = document.querySelector("#newInterestForm")
            form.classList.toggle("hidden")
            form.classList.toggle("visible")
        }
        else if (event.target.id === "cancelNewInterest") {
            
        }
    })
}

export default eventListeners