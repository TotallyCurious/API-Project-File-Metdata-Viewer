'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

//easy print function
var p = (val)=>{console.log(val)};

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('image'),function(req, res){
  res.json({details: req.file},(e,d)=>{e?p(e):p(d);});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
