const express = require('express')
const router = express.Router()
const { getHomePage, getTestPage, postAddUser, getCreatePage } = require('../controllers/homeController')

// route get handler
router.get('/', getHomePage)
router.get('/test', getTestPage)
router.get('/create', getCreatePage)

// route post handler
router.post("/add-user",postAddUser)

module.exports = router