import createHeader from "./createHeader"
import API from "./utlities/apiManager"
import LOCATIONS from "./utlities/locationManager"
import eventListeners from "./eventListeners"

createHeader()
API.GET("places?_embed=interests")
    .then((res) => {
        res.map(place => {
            LOCATIONS.BUILDPLACECARD(place)
            place.interests.map((interest) => LOCATIONS.BUILDINTERESTCARD(interest, place.name))
        })
    })
    .then(() => eventListeners())