import printToDOM from "../utlities/printToDOM"

const LOCATIONS = {
    BUILDPLACE: (object) => {
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
    BUILDINTEREST: (object, place) => {
        let string = `
        <div id="interest--${object.id}">
            <h3 class="interestTitle">${object.name}</h3>
            <p class="interestDescription">${object.description}</p>
            <div class="interestLocation">${object.location}</div>
            <div class="interestReview hidden" id="review--${object.id}"></div>
            <button id="startReview--${object.id}">Write Review</button>
            <button id="remove--${object.id}">Remove</button>
        </div>
        `
        printToDOM(string, `#interests--${place}`)
    }
}

export default LOCATIONS