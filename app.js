var express = require('express'),
	app = express();
	bodyParser = require('body-parser'),

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(require('./controller'));
	var port = 8081;
app.listen(port,function(){
	console.log('Server is running on port :: ',+port);
});
