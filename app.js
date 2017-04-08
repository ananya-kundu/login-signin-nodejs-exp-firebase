var express = require('express'),
	app = express();
	bodyParser = require('body-parser');
	var cors = require('cors');
	var cookieSession = require('cookie-session');
	var validator = require ('express-validator');
	app.use(validator());
	app.use(cookieSession({
			name:'user',
			keys: ['key1'],
			domain: 'localhost',
			maxAge : 24*60*60*1000
	}));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
	app.use(cors());

  app.use(require('./controller'));
	app.use(express.static('./public'));

	var port = 8081;
	app.listen(port,function(){
		console.log('Server is running on port :: ',+port);
	});
