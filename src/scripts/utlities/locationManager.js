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
        if (object.visa_required === true) {
            let string = `Don't forget your travel visa for ${object.name}!`
            printToDOM(string, `#visa--${object.name}`)
        }
    },
    BUILDINTERESTCARD: (object, place) => {
        let string = `
        <div id="interest--${object.id}">
            <h3 class="interestTitle" id="interestTitle--${object.id}">${object.name}</h3>
            <p class="interestDescription">${object.description}</p>
            <div class="interestLocation">${object.location}</div>
            <div class="interestReview" id="review--${object.id}"></div>
            <section class="hidden" id="newReviewSection--${object.id}">
                <label for="newReview--${object.id}"></label>
                <textarea name="newReview--${object.id}" id="newReview--${object.id}" cols="30" rows="10" placeHolder="Enter a review of the place of interest here..."></textarea>
                <button id="cancelReview">Cancel</button>
                <button id="submitReview--${object.id}">Submit Review</button>
            </section>
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
        object.placeId = parseInt(document.querySelector("#interestPlace").value)
        object.name = document.querySelector("#interestName").value
        object.location = document.querySelector("#interestLocation").value
        object.description = document.querySelector("#interestDescription").value
        object.review = null
        return object
    }
}

export default LOCATIONS