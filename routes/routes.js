const app = require('express')()


app.get('/', (req, res, next) =>
{


    res.send("Estamos en linea")


})


module.exports = app