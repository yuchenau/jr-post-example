const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    res.send('Hello World')
})

// get all post
app.get('/v1/posts', function(req, res) {

})

// add a new post
app.post('/v1/posts', function(req, res) {

})

app.get('/v1/posts/:id', function (req, res) {

})

app.put('/v1/posts/:id', function(req, res) {

})

app.delete('/v1/posts/:id', function(req, res) {
    
})
 
app.listen(3000)