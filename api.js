const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', require('./router'))

const port = 3001
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/api/`)
})

module.exports = app