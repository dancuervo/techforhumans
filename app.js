const conf = require('./configs/server')

const app = conf.app()
const port = conf.port()
const express = conf.express()
//sets
app.set('view engine','pug')
app.use(express.static('public'))
//app.use(app.static('public'))

app.get('/', (req, res) => res.render('index',{title:'Tech for Humans'}))

app.listen(port, () => console.log(`Servidor escuchando puerta ${port}!`))
