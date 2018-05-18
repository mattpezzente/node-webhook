const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('<h1>Hello People!</h1>');
})

module.exports = router