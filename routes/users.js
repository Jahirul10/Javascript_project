var express = require('express');
var router = express.Router();
const {spawn} = require('child_process')
router.get('/', function(req, res) {
      const pythonOne =spawn('python3',['codeforces_program.py']);
     res.send("hello world!");
});
module.exports = router