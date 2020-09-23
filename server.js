const express = require('express')
const server = express()
    server.use(express.static('public'))
        .get("/", (req,res) => {
            return res.sendFile(__dirname + "/index.html")
        })

.listen(5000)