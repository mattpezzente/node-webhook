const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('<h1>Hello People of Hello World!</h1>');
})

module.exports = router