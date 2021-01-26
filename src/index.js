const express = require('express')
//Determinado quem poder'a acessar a aplicaçao
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors(
    // origin: ''
))

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log('🚀 Server running on port 3333.')
})