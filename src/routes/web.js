const express = require('express')
const router = express.Router()
const { getHomePage, getTestPage } = require('../controllers/homeController')

// route handler
router.get('/', getHomePage)
router.get('/test', getTestPage)

module.exports = router