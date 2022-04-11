const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    vehicle: [
        {
            brand: {
                type: String,
                required: true,
            },
            model: {
                type: String,
                required: true
            },
            year: {
                type: Number,
                required: true
            }
        }
    ],
    fullName: {
        type: String,
        required: [true, "Please enter the Full name"]
    },
    address: [
        {
            addres: {
                type: String,
                required: true
            },
            post: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            }
        }
    ],
    currency: {
        type: String,
        required: true,
    },
    totalCost: {
        type: Number,
        required: true
    },
    estimate: {
        items: {
            panel: {
                type: String,
                required: true
            },
            cost: {
                type: Number,
                required: true
            },
            operation: {
                type: String,
                required: true
            }
        }
    },
    cost: {
        type: Number,
        required: true
    },
    timeOfIncident: {
        type: Date,
        default: Date.now()
    }
})

module.exports = new mongoose.model("Review", reviewSchema)