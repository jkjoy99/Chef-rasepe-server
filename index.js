const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

var cors = require('cors')
const chefs = require('./Data/Chefs.json');
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!') 

})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const singlesData = chefs.find(chef => chef.id === id)
    res.send(singlesData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


