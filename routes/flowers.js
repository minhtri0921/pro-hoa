const express = require('express')
const router = express.Router();

const flowerController = require('../Controllers/FlowerController')

router.get('/',flowerController.index)

module.exports = router ; 
