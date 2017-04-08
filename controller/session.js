var express = require('express'),
	router = express.Router();

router.get('/session',function(req,res){
console.log("ananya session",req.session);
if (req.session.success) {
	res.send({"status":true,"message":"user exist","session":true})
} else {
	res.send({"status":false,"message":"no user","session":false})
}
});

module.exports = router;
