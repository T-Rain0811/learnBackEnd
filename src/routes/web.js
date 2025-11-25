const express = require('express')
const router = express.Router()

// route handler
router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/test', (req, res) => {
  res.render('sample')
})

module.exports = router