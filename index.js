const express = require("express")
const app = express()
const port = 3000
const restaurant = require("./database")
const CORS = require('cors')
app.use(CORS())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get("/", function (req, res, next) {
    res.send("<h1>Welcome to restaurant API</h1>")
})
// get all restaurant
app.get("/restaurant", (req, res, next) => {
    res.json(restaurant)
})
// get  id restaurant
app.get("/restaurant/:id", (req, res, next) => {
    const restaurantId = Number.parseInt(req.params.id)
    const restaurants = restaurant.find(
        restaurant => restaurant.id === restaurantId)
    res.json(restaurants)
})
// insert new resaurant query string
// http://localhost:3000/restaurant/add/?name=test&type=typetest&imageurl=testtt
app.post("/restaurant/add", (req, res, next) => {
    const name = req.query.name
    const type = req.query.type
    const imageurl = req.query.imageurl
    let idLast = restaurant.length
    // console.log(name, type, imageurl,typeof name);

    restaurant.push({
        "id": idLast + 1,
        "name": name,
        "type": type,
        "ImageURL": imageurl
    })
    res.status(200).send("Add restaurant Success")

})
// update rastaurant
// http://localhost:3000/restaurant/update/1/?name=9999&type=Food&imageurl=Image
app.put("/restaurant/update/:id", (req, res, next) => {
    console.log("update");
    const id = Number.parseInt(req.params.id)
    const name = req.query.name
    const type = req.query.type
    const imageurl = req.query.imageurl
    const index =  restaurant.findIndex((restaurant) => restaurant.id === id)
    const newRestaurant = {
        id: id,
        name: name,
        type: type,
        ImageURL: imageurl
    }
    restaurant[index] = newRestaurant
    res.status(200).send("Update Success")

})
// delete restaurant by id
// http://localhost:3000/restaurant/delete/1/
app.delete("/restaurant/delete/:id", (req, res, next) => {
    console.log("update");
    const id = Number.parseInt(req.params.id)

    // delete restaurant[id] 
    restaurant.splice(id,1)
    res.status(200).send("delete Success")

})

app.listen(port, () => {
    console.log(`this sever is running on http://localhost:${port}`)
})
