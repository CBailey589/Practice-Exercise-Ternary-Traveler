import printToDOM from "./printToDOM"

const LOCATIONS = {
    BUILDPLACECARD: (object) => {
        let string = `
        <section id="section--${object.name}">
            <div class="sectionHeader">
                <a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/${object.name}.html"class="sectionTitle" id="info--${object.name}">${object.name}</a>
                <div id="visa--${object.name}" class="visaInfo"></div>
            </div>
            <div class="interestSection">
                <h2 class="interestHeader>Places of interest in ${object.name}"></h2>
                <section id="interests--${object.name}"></section>
            </div>
        </section>
        `
        printToDOM(string, "#output")
    },
    BUILDINTERESTCARD: (object, place) => {
        let string = `
        <div id="interest--${object.id}">
            <h3 class="interestTitle" id="interestTitle--${object.id}">${object.name}</h3>
            <p class="interestDescription">${object.description}</p>
            <div class="interestLocation">${object.location}</div>
            <div class="interestReview" id="review--${object.id}"></div>
            <button id="startReview--${object.id}" class="visible">Write Review</button>
            <button id="remove--${object.id}">Remove</button>
        </div>
        `
        printToDOM(string, `#interests--${place}`)
        if (object.review !== null) {
            printToDOM(object.review, `#review--${object.id}`)
            document.querySelector(`#interest--${object.id}`).removeChild(document.querySelector(`#startReview--${object.id}`))
        }
    },
    BUILDINTERESTOBJECT: () => {
        let object = {}
        object.placeId = document.querySelector("#interestPlace").value
        object.name = document.querySelector("#interestName").value
        object.location = document.querySelector("#interestLocation")
        object.description = document.querySelector("#interestDescription").value
        object.review = null
        return object
    }
}

export default LOCATIONS