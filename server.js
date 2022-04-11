const app = require("./app")

const dotenv = require("dotenv")

dotenv.config({ path: "config/.env" })
const database = require("./config/database")


database()

app.use("/", (req, res) => {
    res.send("hello world docker")
})


app.listen(`${process.env.PORT}`, () => {
    console.log(`server is working on https://localhost:${process.env.PORT}`)
})