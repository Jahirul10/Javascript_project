var express = require('express');
var router = express.Router();
// const {spawn} = require('child_process');
// router.get('/', (req, res) => {
// var largeDataSet = [];

//  const python = spawn('python', ['script3.py']);

//  python.stdout.on('data', function (data) {
//   console.log('Pipe data from python script ...');
//   largeDataSet.push(data);
//  });
//  python.on('close', (code) => {
//  console.log(`child process close all stdio with code ${code}`);
//  res.send(largeDataSet.join(""))
//  });
 
// })
router.get('/', function(req, res) {
   const spawn = require('child_process').spawn;
   const process = spawn('python', ['./python/script3.py','3','3']);
   process.stdout.on('data',(data)=>{
      res.send(data);
   });
});
module.exports = router