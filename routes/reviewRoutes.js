const express = require("express")
const { createReview, getReview } = require("../controller.js/reviewController")

const router = express.Router()

router.route("/review").post(createReview)
router.route('/review/get').get(getReview)


module.exports = router