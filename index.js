const express = require('express')
const app = express()
const path = require('path')

const route = require('./routes')

const publicPath = path.join(__dirname,'./client')
app.use(express.static(publicPath))

//Router init 
route(app)

app.get('/',function(req,res){
    res.sendFile(path.join(publicPath,'index1.html'))
})

//start server 
const port = 3000 ; 
app.listen(port,()=>console.log(`Server is starting on port ${port}`))