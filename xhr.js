var express = require('express');
var multiparty = require('multiparty');

var app = new express();

app.use(express.static('./'));

app.use('/str', function(req, res, next) {
  var method = req.method;

  if (method === 'GET') {
    res.status(200).send('人生八苦：生，老，病，死，爱别离，怨长久，求不得，放不下。');
  }
});

app.use('/json', function(req, res, next) {
  var method = req.method;

  if (method === 'GET') {
    res.status(200).json({ name: 'liu' });
  }
});

app.use('/err_json', function(req, res, next) {
  var method = req.method;

  if (method === 'GET') {
    res.status(200).send('一花一世界，一叶一如来');
  }
});

app.use('/timeout', function(req, res, next) {
  var method = req.method;

  if (method === 'GET') {
    setTimeout(function() {
      res.end();
    }, 2000);
  }
});

app.use('/no_status', function(req, res, next) {
  var method = req.method;

  if (method === 'GET') {
    res.end();
  }
});

app.use('/upload', function(req, res, next) {
  var method = req.method;

  if (method === 'POST') {
    var forms = new multiparty.Form({ uploadDir: './files/' });
    
    forms.parse(req, function(err, fields, files) {
      if (err) {
        res.status(200).json(err);
      } else {
        console.log(fields);
        console.log(files);
        // var file = files.inputFile[0];
        // console.log(file.originalFilename);
        res.status(200).send('received form');
      }
    });
  }
});

app.use('/post_str', function(req, res, next) {
  var method = req.method;

  if (method === 'POST') {
    res.end();
  }
});

app.use('/set_cookie', function(req, res, next) {
  var method = req.method;

  if (method === 'POST') {
    res.cookie('uid', '123').end();
  }
});

app.use('/clear_cookie', function(req, res, next) {
  var method = req.method;

  if (method === 'POST') {
    res.clearCookie('uid').end();
  }
});

app.use(function(req, res, next) {
  res.status(404).end();
});

var server = app.listen(9001, function() {
  console.log('http://localhost:9001');
});

server.setTimeout(1000);