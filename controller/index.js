var express = require('express'),
	router = express.Router();

router.use('/api',require('./signup'));
router.use('/api',require('./login'));
router.use(require('./session'));
router.use(require('./logout'));

module.exports = router;
