const express = require("express")
const app = express()

app.use(express.json())

const reviewRoute = require("./routes/reviewRoutes")


app.use("/api/v1", reviewRoute)




module.exports = app