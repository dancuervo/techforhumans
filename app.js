//server config
const conf = require('./configs/server')
const app = conf.app()
const port = conf.port()
const express = conf.express()

//sets
app.set('view engine','pug')
app.use(express.static('public'))
app.use(require('./routes/routes'))

//server
app.listen(port, () => console.log(`Servidor escuchando puerta ${port}!`))