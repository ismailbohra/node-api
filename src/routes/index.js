var express = require('express');
var router = express.Router();

const studentRoute=require('./student.route')


router.use('/student',studentRoute);

module.exports = router;