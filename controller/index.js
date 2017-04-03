var express = require('express'),
	router = express.Router();

router.get('/',function(req,res){
	res.json({success: true, message : 'You are Online'});
});

router.use('/api',require('./signup'));
router.use('/api',require('./login'));

module.exports = router;
