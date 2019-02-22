import printToDOM from "./utlities/printToDOM";
import API from "./utlities/apiManager";

function createHeader() {
    let string = `
    <section id="pageHeader">
        <div id="newInterestSection">
            <div id="newInterestHeader">Want to add a new point of interest?</div>
            <button id="startNewInterest">Click Here!</button>
        </div>
    </section>
    `
    printToDOM(string, "#output")

    string = `
        <section id="alertStuff"
            < div id = "newInterestForm" class="hidden" >
                <fieldset>
                    <label for="interestPlace"></label>
                    <select name="interestPlace" id="interestPlace"></select>
                </fieldset>
                <fieldset>
                    <label for="interestName">Name of Place of Interest:</label>
                    <input type="text" name="interestName" id="interestName">
                </fieldset>
                    <fieldset>
                        <label for="interestLocation">Location of Place of Interest:</label>
                        <input type="text" name="interestLocation" id="interestLocation">
                </fieldset>
                <fieldset>
                    <label for="interestDescription"></label>
                    <textarea name="interestDescription" id="interestDescription" cols="30" rows="10" placeHolder="Enter a description of the place of interest here..."></textarea>
                </fieldset>
                <button id="cancelNewInterest">Cancel</button>
                <button id="submitNewInterest">Submit</button>
            </div>
            <div id="doubleCheckDeleteSection" class="hidden">
                        <input type="hidden" value="" id="idToDelete"
                <h1 id="deleteHeader">Are you sure you want to REMOVE this place of interest?</h1>
                    <div id="deleteInterestName"></div>
                    <button id="cancelDelete">Cancel</button>
                    <button id="delete">BE GONE!</button>
            </div>
        </section>
        `
    printToDOM(string, "#alert")
    return API.GET("places")
        .then((res) => res.map(place => {
            let string = `
        < option value = "${place.id}" > ${place.name}</option >
            `
            printToDOM(string, "#interestPlace")
        }))
}

export default createHeader