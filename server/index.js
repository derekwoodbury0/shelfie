let express = require('express')
let app = express()
require('dotenv').config()
let massive = require('massive')
app.use(express.json())
let ctrl = require('./controller')

let { CONNECTION_STRING, SERVER_PORT } = process.env


massive(CONNECTION_STRING).then(db => {
    app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
    app.set('db', db)
})

app.get('/api/inventory', ctrl.readAll)
app.post('/api/product', ctrl.createProduct)
app.delete('/api/inventory/:id', ctrl.deleteProduct)
app.put('/api/inventory/:id', ctrl.updateProduct)
app.get('/api/inventory/:id', ctrl.readOne)

