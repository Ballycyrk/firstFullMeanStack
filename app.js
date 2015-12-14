var express     = require('express');
var path        = require('path');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var app         = express();

app.use(express.static(path.join(__dirname, 'client')))
app.use(bodyParser.urlencoded({ extended: true }));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function(req, res){
  console.log('*******************');
  console.log('********8000*******');
  console.log('*******************');
});
