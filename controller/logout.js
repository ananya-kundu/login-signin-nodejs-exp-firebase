var express = require('express'),
  router = express.Router();

router.get('/logout', function(req, res) {
  req.session = null;
  res.send({
    "status": true,
    "session": false
  });
});
module.exports = router;
