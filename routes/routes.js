const express = require('express');
const router = express.Router();

const {tablelist} = require('../controller/tablelist');

router.get('/getdata',tablelist)

module.exports = router;