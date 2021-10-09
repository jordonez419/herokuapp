const dotenv = require("dotenv").config()

const express = require('express')

const path = require("path")
const app = express()
const cors = require('cors')

const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))

app.use("/api/*", (req, res) => {
    res.json({ data: "This is the API Data" })
})

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

console.log('testing')
console.log(__dirname)
console.log(__filename)
console.log(process.env.USERNAME)
console.log(process.env.PORT)
console.log(process.env.DB_PASS)