const flowerRouter = require('./flowers')

function route(app){
    app.use('/flowers',flowerRouter)
}

module.exports = route;