import printToDOM from "./printToDOM";
import API from "./apiManager";

function createHeader() {
    let string = `
    <section id="pageHeader">
        <div id="newInterestSection">
            <div id="newInterestHeader">Want to add a new point of interest?</div>
            <button id="startNewInterest">Click Here!</button>
        </div>
        <div id="newInterestForm" class="hidden">
            <fieldset>
                <label for="interestPlace"></label>
                <select name="interestPlace" id="interestPlace"></select>
            </fieldset>
            <fieldset>
                <label for="interestName">Concepts Covered</label>
                <input type="text" name="interestName" id="interestName">
            </fieldset>
            <fieldset>
                <label for="interestLocation">Concepts Covered</label>
                <input type="text" name="interestLocation" id="interestLocation">
            </fieldset>
            <fieldset>
                <label for="interestDescription"></label>
                <textarea name="interestDescription" id="interestDescription" cols="30" rows="10" placeHolder="Enter a description of the place of interest here..."></textarea>
            </fieldset>
            <button id="submitNewInterest">Submit</button>
        </div>
    </section>
    `
    printToDOM(string, "#output")
    return API.GET("places")
        .then((res) => res.map(place => {
            let string = `
            <option value="${place.id}">${place.name}</option>
            `
            printToDOM(string, "#interestPlace")
        }))
}

export default createHeader