const Restaurant = require("../models/restaurantDB")

const postRestuarants = (req, res) => {
    const newRestaurant = new Restaurant({
        name: req.body.name,
        type: req.body.type,
        imageURL: req.body.imageURL
    })
    Restaurant.create(newRestaurant, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "some error"
            })
        } else {
            res.send(data)
        }
    })
}
const getRestuarants = (req, res) => {
    Restaurant.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "some error "
            })
        } else {
            res.send(data)
        }
    })

}
module.exports = {
    getRestuarants,
    postRestuarants
};