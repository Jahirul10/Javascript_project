var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.listen(8080);
app.use(bodyParser.urlencoded({ extended: true }));
const mysql = require('mysql');


// // router module used
// var users =require('./routes/codeforces');
// app.use('/',users);
// // routing for codeforces
// var codeforces = require('./routes/codeforces');
// app.use('/codeforces',users);
//
app.get('/', function(reg,res){
    // const {spawn}=require("child_process")
    // const py = spawn('python',['script3.py'])
    // py.stdout.on('data',(data )=>{

        
    //     str=data.toString();
    //     res.send(Object.values(data))
    //     myjson=JSON.parse(str)
    //     // res.send(myjson);
    //     var con= mysql.createConnection({
    //         host: "localhost",
    //         user: "root",
    //         password:"",
    //         database:"pro_data"
    //     })
    //     function json2array(myjson){
    //         var result = [];
    //         var keys = Object.keys(myjson);
    //         keys.forEach(function(key){
    //             result.push(myjson[key]);
    //         });
    //         return result;
    //     }
    //     myjson=json2array(myjson);
    //     console.log(typeof myjson);

    fetch('https://codeforces.com/api/user.status?handle=jahirul&from=1&count=1000')
      .then(response => response.json())
      .then(data => {
        const submissions = data.result;
        const submissionsArray = [];
    
        for (let i = 0; i < submissions.length; i++) {
          submissionsArray.push(submissions[i]);
        }
    
        console.log(submissionsArray);
      })
      .catch(error => console.error(error));
    
  
// 
    //     myjson.forEach((item) => {
    //         const query = `INSERT INTO s1810876145 (submissionTIme, probelmId,platform,verdict) VALUES ('${item.creationTimeSeconds}', '${item.name}',${item.name}', '${item.verdict}')`;
    //         con.query(query, (error, results, fields) => {
    //           if (error) {
    //             console.log(error);
    //           } else {
    //             console.log('Item inserted into database');
    //           }
    //         });
    //       });
          
    // })
    // py.on('close',(code)=>{
    //     console.log('child_process exited with code ${code}');
    });
// });
app.post('/session', function(req, res){

   var con= mysql.createConnection({
        host: "localhost",
        user: "root",
        password:"",
        database:"pro_data"
    })
    const s18=req.body.s18;
    const s19=req.body.s19;
    
    if(s18){
        con.query("SELECT * FROM s18",(err,result)=>{

            res.render('pages/teacher',{result: result});
        })
    }
    if(s19){
        con.query("SELECT * FROM s19",(err,result)=>{

            res.render('pages/teacher',{result: result});
        })
    }
    
});
app.get('/views', function(req, res){

    
     res.render('pages/student');
     
 });