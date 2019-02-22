import API from "./utlities/apiManager"
import LOCATIONS from "./locations/locationManager"

API.GET("places?_embed=interests")
    .then((res) => {
        console.log(res)
        return res
    })
    .then((res) => {
        res.map(place => {
            LOCATIONS.BUILDPLACE(place)
            place.interests.map((interest) => LOCATIONS.BUILDINTEREST(interest, place.name))
        })
    })