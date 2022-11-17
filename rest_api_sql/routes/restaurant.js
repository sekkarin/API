const express = require("express")
const router = express.Router()
const restuarantController = require("../controllers/restuarantControl")


router.post('/restuarants',restuarantController.postRestuarants)
router.get("/restuarants",restuarantController.getRestuarants)

module.exports = router