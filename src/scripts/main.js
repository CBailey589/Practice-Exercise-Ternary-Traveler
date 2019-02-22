import createHeader from "./utlities/createHeader"
import API from "./utlities/apiManager"
import LOCATIONS from "./locations/locationManager"

createHeader()
API.GET("places?_embed=interests")
    .then((res) => {
        console.log(res)
        return res
    })
    .then((res) => {
        res.map(place => {
            LOCATIONS.BUILDPLACECARD(place)
            place.interests.map((interest) => LOCATIONS.BUILDINTERESTCARD(interest, place.name))
        })
    })