const conf = require('./configs/server')

const app = conf.app
const port = conf.port

app.get('/', (req, res) => res.send('<b>Tech for Humans</b><br>Estamos trabalhando<br>para deixar as coisa no ponto!!'))

app.listen(port, () => console.log(`Servidor escuchando puerta ${port}!`))
