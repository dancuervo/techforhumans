
const r = require('../configs/server').express()
const router = r.Router()

router.get('/', (req, res) => res.render('index',{title:'Tech for Humans'}))
router.get('/about', (req, res) => res.send('About'))
//404
router.use((req, res) => res.status(404).send('404'))

module.exports = router