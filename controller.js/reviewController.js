

const Review = require("../model/reviewmodel")

exports.createReview = async (req, res, next) => {
    try {
        // const {
        //     vehicle, fullName, address, currency, totalCost, estimate, cost
        // } = req.body
        const review = await Review.create(req.body)
        // vehicle, fullName, address, currency, totalCost, estimate, cost, createdAt
        // )

        res.status(200).json({
            success: true,
            review
        })
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getReview = async (req, res, next) => {
    try {
        const review = await Review.find()

        res.status(200).json({
            success: true,
            review
        })
    } catch (err) {
        res.status(500).json(err)
    }
}